import React from 'react';
import { motion, useTransform, useMotionValue, animate } from 'framer-motion';

const NetworkVisualization = () => {
  // Background gradient animation:
  // We'll animate a color stop in HSL. You can also directly keyframe between colors.
  const x = useMotionValue(0);
  const backgroundColor = useTransform(
    x,
    [0, 1],
    [
      "linear-gradient(120deg, hsl(220, 40%, 12%), hsl(220, 40%, 8%))", 
      "linear-gradient(120deg, hsl(220, 40%, 10%), hsl(220, 40%, 14%))"
    ]
  );

  // Animate the x value back and forth to subtly shift the gradient
  React.useEffect(() => {
    const controls = animate(x, 1, {
      duration: 10,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    });
    return () => controls.stop();
  }, [x]);

  // Central Diamond Animation Variants
  const diamondVariants = {
    animate: {
      rotate: [0, 360],
      transition: { duration: 12, ease: "linear", repeat: Infinity }
    }
  };

  // Circle Pulse
  const circleVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: { duration: 4, ease: "easeInOut", repeat: Infinity }
    }
  };

  // Orbiting Dots
  // Multiple sets of orbiting dots at different radii and speeds.
  const createOrbitingDots = (count, radius, color, duration) => {
    return Array.from({ length: count }).map((_, i) => {
      const angle = (360 / count) * i;
      return (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: 6,
            height: 6,
            backgroundColor: color,
            borderRadius: '50%',
            // We'll position them with CSS transforms
            transform: `translate(-50%, -50%) rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
          }}
          animate={{
            rotate: 360
          }}
          transition={{
            duration,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      );
    });
  };

  // Drifting Particles (Subtle, semi-transparent, blurred)
  const driftingParticles = Array.from({ length: 6 }).map((_, i) => {
    const size = Math.random() * 4 + 2; // random size between 2 and 6
    const startX = Math.random() * 100;
    const endX = startX + (Math.random() * 20 - 10); // slight horizontal drift
    const startY = Math.random() * 100;
    const endY = startY + (Math.random() * 10 - 5); // slight vertical drift
    const duration = Math.random() * 15 + 10; // between 10 and 25 seconds
    return (
      <motion.div
        key={i}
        style={{
          position: 'absolute',
          top: `${startY}%`,
          left: `${startX}%`,
          width: size,
          height: size,
          borderRadius: '50%',
          backgroundColor: 'rgba(255,255,255,0.05)',
          filter: 'blur(2px)'
        }}
        animate={{
          x: `${endX - startX}%`,
          y: `${endY - startY}%`
        }}
        transition={{
          duration,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: "easeInOut"
        }}
      />
    );
  });

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        background: backgroundColor.get(),
        overflow: 'hidden'
      }}
    >
      {/* Drifting particles in the background */}
      {driftingParticles}

      {/* Central visual element */}
      <div style={{
        position: 'absolute',
        top: '33%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 300,
        height: 300,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Pulsing Circle */}
        <motion.div
          variants={circleVariants}
          animate="animate"
          style={{
            position: 'absolute',
            width: 250,
            height: 250,
            borderRadius: '50%',
            border: '2px solid #3fa7eb',
            boxShadow: '0 0 20px rgba(63,167,235,0.3)',
          }}
        />

        {/* Rotating Diamond */}
        <motion.div
          variants={diamondVariants}
          animate="animate"
          style={{
            width: 60,
            height: 60,
            background: '#3fa7eb',
            transform: 'rotate(45deg)',
            borderRadius: 6,
            boxShadow: '0 0 15px rgba(63,167,235,0.5)'
          }}
        />

        {/* Orbiting Dots */}
        <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
          {createOrbitingDots(6, 100, '#3fa7eb', 20)}
          {createOrbitingDots(8, 130, 'rgba(63,167,235,0.7)', 25)}
        </div>
      </div>
    </motion.div>
  );
};

export default NetworkVisualization;