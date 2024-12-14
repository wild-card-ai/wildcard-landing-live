import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import React from "react";
interface ScrollingBannerProps {
  items: {
    name: string;
    logo_url?: string;
    icon?: React.ReactNode;
  }[];
  direction?: 'left' | 'right';
  speed?: number;
}

const ScrollingBanner = ({ items, direction = 'left', speed = 30 }: ScrollingBannerProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroll = () => {
      if (scrollRef.current) {
        if (direction === 'left') {
          scrollRef.current.scrollLeft += 1;
          if (scrollRef.current.scrollLeft >= (scrollRef.current.scrollWidth / 2)) {
            scrollRef.current.scrollLeft = 0;
          }
        } else {
          scrollRef.current.scrollLeft -= 1;
          if (scrollRef.current.scrollLeft <= 0) {
            scrollRef.current.scrollLeft = scrollRef.current.scrollWidth / 2;
          }
        }
      }
    };

    const timer = setInterval(scroll, speed);
    return () => clearInterval(timer);
  }, [direction, speed]);

  return (
    <div className="overflow-hidden bg-transparent px-2">
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-hidden whitespace-nowrap"
        style={{ scrollBehavior: 'auto' }}
      >
        {[...items, ...items].map((item, i) => (
          <Card
            key={`${item.name}-${i}`}
            className="inline-flex items-center justify-center p-6 min-w-[200px] bg-card/50 backdrop-blur-sm border border-none"
          >
            {item.logo_url ? (
              <img src={item.logo_url} alt={item.name} className="h-8" />
            ) : item.icon ? (
              <div className="flex items-center justify-center">
                  {item.icon}
              </div>
            ) : (
              <span className="text-lg font-medium">{item.name}</span>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ScrollingBanner;