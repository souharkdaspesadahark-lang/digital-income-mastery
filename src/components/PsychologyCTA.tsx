import { AlertTriangle, Clock, Brain, Target, TrendingDown, Zap } from "lucide-react";
import { Button } from "./ui/button";

interface PsychologyCTAProps {
  variant: "fear" | "opportunity" | "scarcity" | "social";
}

const PsychologyCTA = ({ variant }: PsychologyCTAProps) => {
  const productLink = "https://pay.kiwify.com.br/stPj5Aq?afid=Gm9OtlYz";

  if (variant === "fear") {
    return (
      <section className="py-16 bg-gradient-to-b from-destructive/5 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-destructive/10 via-transparent to-transparent" />
        
        <div className="container px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-destructive/10 border border-destructive/20 rounded-full px-4 py-2 mb-6">
              <AlertTriangle className="w-4 h-4 text-destructive" />
              <span className="text-sm font-medium text-destructive">Reflexão Importante</span>
            </div>

            <h2 className="text-2xl md:text-4xl font-bold mb-6">
              <span className="text-destructive">Daqui a 1 ano,</span> onde você estará?
            </h2>

            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 mb-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-left space-y-4">
                  <h3 className="font-semibold text-destructive flex items-center gap-2">
                    <TrendingDown className="w-5 h-5" />
                    Se você NÃO agir hoje:
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-destructive">✗</span>
                      Continuará dependendo de um salário que não acompanha a inflação
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive">✗</span>
                      Verá outras pessoas conquistando liberdade financeira
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive">✗</span>
                      Perderá mais um ano adiando seus sonhos
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive">✗</span>
                      O custo de vida aumenta, sua renda permanece a mesma
                    </li>
                  </ul>
                </div>

                <div className="text-left space-y-4">
                  <h3 className="font-semibold text-primary flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    Se você DECIDIR agir agora:
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      Terá uma fonte de renda extra em semanas
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      Ganhará autonomia sobre seu tempo e dinheiro
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      Poderá realizar planos que hoje parecem impossíveis
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      Construirá segurança financeira para você e sua família
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <p className="text-xl font-semibold text-foreground mb-6">
              A pergunta é: <span className="text-primary">Quanto custa NÃO tentar?</span>
            </p>

            <Button variant="cta" size="lg" className="text-lg px-10 py-7" asChild>
              <a href={productLink} target="_blank" rel="noopener noreferrer">
                Quero Mudar Minha Realidade Agora
              </a>
            </Button>
          </div>
        </div>
      </section>
    );
  }

  if (variant === "opportunity") {
    return (
      <section className="py-16 bg-gradient-to-b from-card to-background relative overflow-hidden">
        <div className="container px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-3xl p-8 md:p-12">
              <div className="text-center mb-8">
                <Brain className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Seu cérebro foi programado para te <span className="text-destructive">sabotar</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  A mente busca conforto e evita riscos. Por isso, você encontra desculpas para não começar. 
                  Mas veja o que acontece quando você quebra esse padrão:
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-card/50 rounded-xl p-6 text-center">
                  <p className="text-4xl font-bold text-gradient-gold mb-2">72h</p>
                  <p className="text-sm text-muted-foreground">Tempo médio para aplicar o primeiro conceito</p>
                </div>
                <div className="bg-card/50 rounded-xl p-6 text-center">
                  <p className="text-4xl font-bold text-gradient-gold mb-2">14 dias</p>
                  <p className="text-sm text-muted-foreground">Para ver os primeiros resultados</p>
                </div>
                <div className="bg-card/50 rounded-xl p-6 text-center">
                  <p className="text-4xl font-bold text-gradient-gold mb-2">30 dias</p>
                  <p className="text-sm text-muted-foreground">Para ter uma nova fonte de renda</p>
                </div>
              </div>

              <div className="text-center">
                <p className="text-lg mb-6 text-foreground">
                  <strong>Você está a uma decisão</strong> de mudar completamente sua situação financeira.
                  <br />
                  <span className="text-muted-foreground">A única coisa que separa você dos resultados é a ação.</span>
                </p>

                <Button variant="cta" size="lg" className="text-lg px-10 py-7" asChild>
                  <a href={productLink} target="_blank" rel="noopener noreferrer">
                    <Zap className="w-5 h-5 mr-2" />
                    Tomar a Decisão Agora
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (variant === "scarcity") {
    return (
      <section className="py-12 bg-destructive/5 border-y border-destructive/20">
        <div className="container px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-destructive animate-pulse" />
              <span className="text-lg font-semibold text-destructive">Atenção: Esta oferta é por tempo limitado</span>
            </div>
            
            <p className="text-muted-foreground mb-6">
              O preço de <span className="line-through">R$ 97,00</span> por apenas{" "}
              <span className="text-primary font-bold">R$ 29,90</span> é uma condição especial de lançamento.
              <br />
              <strong className="text-foreground">Amanhã, este valor pode não estar mais disponível.</strong>
            </p>

            <div className="bg-card/50 border border-border rounded-xl p-6 mb-6">
              <p className="text-sm text-muted-foreground mb-2">Pense bem:</p>
              <p className="text-xl font-semibold text-foreground">
                O que você perde ao <span className="text-primary">não</span> investir R$ 29,90 em você mesmo?
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                É menos do que um jantar fora. Mas pode valer uma mudança de vida.
              </p>
            </div>

            <Button variant="cta" size="lg" asChild>
              <a href={productLink} target="_blank" rel="noopener noreferrer">
                Garantir Minha Vaga com Desconto
              </a>
            </Button>
          </div>
        </div>
      </section>
    );
  }

  // Social proof variant
  return (
    <section className="py-12 bg-primary/5 border-y border-primary/20">
      <div className="container px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg mb-4">
            <strong className="text-foreground">Enquanto você lê isso,</strong>{" "}
            <span className="text-muted-foreground">outras pessoas estão aplicando o método e gerando resultados.</span>
          </p>
          
          <p className="text-2xl font-bold text-gradient-gold mb-6">
            A pergunta não é SE funciona. É: você vai fazer parte disso?
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" asChild>
              <a href={productLink} target="_blank" rel="noopener noreferrer">
                Sim, Quero Fazer Parte
              </a>
            </Button>
            <Button variant="ctaOutline" size="lg" asChild>
              <a href={productLink} target="_blank" rel="noopener noreferrer">
                Ver Mais Detalhes
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PsychologyCTA;
