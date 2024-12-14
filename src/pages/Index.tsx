import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import CodeExample from "@/components/CodeExample";
import FAQ from "@/components/FAQ";
import GetStarted from "@/components/GetStarted";
import ScrollingBanner from "@/components/ScrollingBanner";
import { SiGithub, SiSlack, SiDiscord, SiNotion, SiGoogledrive, SiBrave, SiTwilio, SiYoutube, SiGmail, SiStripe, SiZoom, SiGooglecalendar, SiSpotify } from "@icons-pack/react-simple-icons";

const integrations = [
  { name: "GitHub", icon: <SiGithub className="h-8 w-8" /> },
  { name: "Stripe", icon: <SiStripe className="h-8 w-8" /> },
  { name: "Slack Web API", icon: <SiSlack className="h-8 w-8" /> },
  { name: "Zoom", icon: <SiZoom className="h-12 w-12" /> },
  { name: "Google Calendar", icon: <SiGooglecalendar className="h-8 w-8" /> },
  { name: "Spotify", icon: <SiSpotify className="h-8 w-8" /> },
  { name: "Gmail", icon: <SiGmail className="h-8 w-8" /> },
  { name: "YouTube Data", icon: <SiYoutube className="h-8 w-8" /> },
  { name: "Notion", icon: <SiNotion className="h-8 w-8" /> },
  { name: "Discord", icon: <SiDiscord className="h-8 w-8" /> },
  { name: "Twilio Messaging", icon: <SiTwilio className="h-8 w-8" /> },
  { name: "Brave Web Search", icon: <SiBrave className="h-8 w-8" /> },
  { name: "Google Drive", icon: <SiGoogledrive className="h-8 w-8" /> },
];

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <div id="integrations" className="px-8 bg-gradient-to-b from-primary/5 via-primary/5 to-background">
        <h4 className="text-2xl font-semibold text-center mb-4 opacity-50">Integrate with the Most Popular APIs</h4>
        <ScrollingBanner items={integrations} direction="right" />
      </div>
      <Features />
      <HowItWorks />
      <CodeExample />
      <GetStarted />
      <FAQ />
    </main>
  );
};

export default Index;