import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section (approx 500px)
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-t border-border p-3 md:p-4 animate-fade-up">
      <div className="container flex items-center justify-between gap-4 max-w-4xl mx-auto">
        <div className="hidden sm:block">
          <p className="text-sm font-semibold">Pronto para começar?</p>
          <p className="text-xs text-muted-foreground">Acesso imediato ao método</p>
        </div>
        <Button 
          variant="cta" 
          className="w-full sm:w-auto py-4 sm:py-3"
          asChild
        >
          <a href="https://pay.kiwify.com.br/stPj5Aq?afid=Gm9OtlYz" target="_blank" rel="noopener noreferrer">
            QUERO COMEÇAR AGORA
            <ArrowRight className="w-4 h-4" />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default StickyCTA;
