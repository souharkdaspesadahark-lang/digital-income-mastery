import { Instagram } from "lucide-react";

const Header = () => {
  return (
    <header className="py-4 bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container px-6">
        <div className="flex items-center justify-center gap-2">
          <Instagram className="w-5 h-5 text-primary" />
          <span className="text-lg font-semibold">
            Cleiton Souza <span className="text-muted-foreground">|</span>{" "}
            <span className="text-gradient-gold">Renda Online</span>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
