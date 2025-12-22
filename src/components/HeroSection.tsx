import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Clock } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-dark pt-8 md:pt-0">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container relative z-10 px-4 md:px-6 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Urgency badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/20 border border-destructive/40 mb-6 animate-fade-in">
            <div className="w-2 h-2 rounded-full bg-destructive animate-pulse" />
            <span className="text-sm font-semibold text-destructive">VAGAS LIMITADAS — Oferta por tempo limitado</span>
          </div>

          {/* Main Headline - Stronger promise */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 animate-fade-up">
            De R$0 a{" "}
            <span className="text-gradient-gold">Renda Extra</span>{" "}
            <br className="hidden sm:block" />
            Com Apenas o Celular
          </h1>

          {/* Direct benefit subheadline */}
          <p className="text-lg md:text-xl text-foreground/90 font-medium max-w-2xl mx-auto mb-4 animate-fade-up" style={{ animationDelay: '0.15s' }}>
            Método simples que qualquer pessoa pode aplicar, mesmo sem experiência.
          </p>
          
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: '0.25s' }}>
            Aprenda em poucos dias. Aplique no seu tempo. Sem precisar aparecer.
          </p>

          {/* CTA Button - More prominent */}
          <div className="flex flex-col items-center gap-3 animate-fade-up" style={{ animationDelay: '0.35s' }}>
            <Button 
              variant="cta" 
              size="xl"
              className="w-full sm:w-auto text-lg md:text-xl py-5 md:py-7 px-8 md:px-12 animate-pulse-slow"
              asChild
            >
              <a href="https://pay.kiwify.com.br/stPj5Aq?afid=Gm9OtlYz" target="_blank" rel="noopener noreferrer">
                QUERO COMEÇAR AGORA
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            </Button>
            <span className="text-sm text-muted-foreground">Acesso imediato após o pagamento</span>
          </div>

          {/* Trust indicators - Larger and clearer */}
          <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl mx-auto animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center justify-center gap-2 bg-secondary/40 rounded-lg py-3 px-4">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Acesso Imediato</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-secondary/40 rounded-lg py-3 px-4">
              <Shield className="w-5 h-5 text-green-500" />
              <span className="text-sm font-medium">Compra Segura</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-secondary/40 rounded-lg py-3 px-4">
              <Zap className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Suporte Incluso</span>
            </div>
          </div>

          {/* Social proof micro */}
          <div className="mt-8 flex items-center justify-center gap-3 animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <div className="flex -space-x-2">
              {[1,2,3,4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/60 to-accent/60 border-2 border-background" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              <strong className="text-foreground">+500 pessoas</strong> já aplicando o método
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
