import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Lock, Shield, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import { useSiteSettings } from "@/hooks/useSiteSettings";

const CTASection = () => {
  const { data: settings } = useSiteSettings();
  const ctaLink = settings?.main_cta_link || "https://pay.kiwify.com.br/stPj5Aq?afid=Gm9OtlYz";
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const totalSeconds = prev.hours * 3600 + prev.minutes * 60 + prev.seconds - 1;
        
        if (totalSeconds <= 0) {
          return { hours: 2, minutes: 0, seconds: 0 };
        }
        
        return {
          hours: Math.floor(totalSeconds / 3600),
          minutes: Math.floor((totalSeconds % 3600) / 60),
          seconds: totalSeconds % 60
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (num: number) => num.toString().padStart(2, '0');

  return (
    <section className="py-24 bg-gradient-dark relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Urgency badge */}
          <div className="inline-flex items-center gap-2 bg-destructive/20 text-destructive px-4 py-2 rounded-full text-sm font-medium mb-6 animate-pulse">
            <Clock className="w-4 h-4" />
            <span>Oferta por tempo limitado</span>
          </div>

          {/* Main CTA content */}
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Comece Sua Jornada{" "}
            <span className="text-gradient-gold">Hoje Mesmo</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Dê o primeiro passo para construir sua independência financeira. 
            Acesso imediato ao método completo.
          </p>

          {/* Countdown Timer */}
          <div className="mb-8">
            <p className="text-sm text-muted-foreground mb-3">Esta oferta expira em:</p>
            <div className="flex justify-center gap-3">
              <div className="bg-card border border-border rounded-lg p-4 min-w-[80px]">
                <span className="text-3xl md:text-4xl font-bold text-primary">{formatTime(timeLeft.hours)}</span>
                <p className="text-xs text-muted-foreground mt-1">Horas</p>
              </div>
              <div className="flex items-center text-2xl font-bold text-primary">:</div>
              <div className="bg-card border border-border rounded-lg p-4 min-w-[80px]">
                <span className="text-3xl md:text-4xl font-bold text-primary">{formatTime(timeLeft.minutes)}</span>
                <p className="text-xs text-muted-foreground mt-1">Minutos</p>
              </div>
              <div className="flex items-center text-2xl font-bold text-primary">:</div>
              <div className="bg-card border border-border rounded-lg p-4 min-w-[80px]">
                <span className="text-3xl md:text-4xl font-bold text-primary">{formatTime(timeLeft.seconds)}</span>
                <p className="text-xs text-muted-foreground mt-1">Segundos</p>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-4 mb-2">
              <span className="text-2xl text-muted-foreground line-through">R$ 97,00</span>
              <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                69% OFF
              </span>
            </div>
            <div className="text-5xl md:text-6xl font-bold text-foreground">
              R$ <span className="text-gradient-gold">29,90</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">Pagamento único • Acesso vitalício</p>
          </div>

          {/* Benefits checklist */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>Acesso vitalício</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>Suporte incluso</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>Atualizações gratuitas</span>
            </div>
          </div>

          {/* CTA Button */}
          <Button 
            variant="cta" 
            className="text-xl py-7 px-12 animate-pulse"
            asChild
          >
            <a href={ctaLink} target="_blank" rel="noopener noreferrer">
              Quero Garantir Meu Acesso Agora
              <ArrowRight className="w-6 h-6" />
            </a>
          </Button>

          {/* Security badges */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4" />
              <span>Pagamento 100% seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Seus dados protegidos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
