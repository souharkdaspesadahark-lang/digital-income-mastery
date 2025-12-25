import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useSiteSettings } from "@/hooks/useSiteSettings";

interface MidCTAProps {
  variant?: "default" | "urgent";
}

const MidCTA = ({ variant = "default" }: MidCTAProps) => {
  const { data: settings } = useSiteSettings();
  const ctaLink = settings?.main_cta_link || "https://pay.kiwify.com.br/stPj5Aq?afid=Gm9OtlYz";
  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 relative">
      <div className="container px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center">
          {variant === "urgent" ? (
            <>
              <p className="text-lg md:text-xl font-bold text-foreground mb-2">
                Quanto mais você espera, mais difícil fica começar
              </p>
              <p className="text-muted-foreground mb-6">
                Esse é o momento de dar o primeiro passo
              </p>
            </>
          ) : (
            <>
              <p className="text-lg md:text-xl font-bold text-foreground mb-2">
                Você chegou até aqui por um motivo
              </p>
              <p className="text-muted-foreground mb-6">
                Não deixe essa oportunidade passar
              </p>
            </>
          )}
          
          <Button 
            variant="cta" 
            size="xl"
            className="w-full sm:w-auto"
            asChild
          >
            <a href={ctaLink} target="_blank" rel="noopener noreferrer">
              QUERO COMEÇAR AGORA
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
          <p className="text-xs text-muted-foreground mt-3">Sem compromisso • Acesso imediato</p>
        </div>
      </div>
    </section>
  );
};

export default MidCTA;
