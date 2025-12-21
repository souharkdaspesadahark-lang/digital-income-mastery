import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Lock, Shield } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-dark relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main CTA content */}
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Comece Sua Jornada{" "}
            <span className="text-gradient-gold">Hoje Mesmo</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Dê o primeiro passo para construir sua independência financeira. 
            Acesso imediato ao método completo.
          </p>

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
            className="text-xl py-7 px-12"
            asChild
          >
            <a href="https://pay.kiwify.com.br/stPj5Aq?afid=Gm9OtlYz" target="_blank" rel="noopener noreferrer">
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
