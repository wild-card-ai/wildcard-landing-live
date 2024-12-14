import { Button } from "@/components/ui/button";
import { SiGithub } from "@icons-pack/react-simple-icons";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-sm bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center">
        <a href="/" className="text-xl font-bold text-foreground">
          Wildcard
        </a>
        <nav className="hidden md:flex gap-6 justify-center items-center flex-1">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#integrations" className="text-muted-foreground hover:text-foreground transition-colors">
            Integrations
          </a>
          {/* <a href="/playground" className="text-muted-foreground hover:text-foreground transition-colors">
            Playground
          </a>
          <a href="#docs" className="text-muted-foreground hover:text-foreground transition-colors">
            Docs
          </a> */}
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" asChild>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <SiGithub className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;