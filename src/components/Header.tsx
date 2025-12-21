import { Instagram } from "lucide-react";

const Header = () => {
  return (
    <header className="py-4 bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container px-6">
        <a 
          href="https://www.instagram.com/cleitonsouza.online?igsh=MTh0dHl4bHh3dGZuMQ==" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 hover:opacity-80 transition-opacity"
        >
          <Instagram className="w-5 h-5 text-primary" />
          <span className="text-lg font-semibold">
            Cleiton Souza <span className="text-muted-foreground">|</span>{" "}
            <span className="text-gradient-gold">Renda Online</span>
          </span>
        </a>
      </div>
    </header>
  );
};

export default Header;
