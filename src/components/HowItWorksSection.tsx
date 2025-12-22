import { PlayCircle, Smartphone, TrendingUp } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "1",
      icon: PlayCircle,
      title: "Você acessa o método",
      description: "Conteúdo direto ao ponto, sem enrolação"
    },
    {
      number: "2", 
      icon: Smartphone,
      title: "Aplica pelo celular",
      description: "Mesmo sem experiência, passo a passo"
    },
    {
      number: "3",
      icon: TrendingUp,
      title: "Começa a gerar resultado",
      description: "No seu tempo, sem precisar aparecer"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-background relative">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Simples assim</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-2">
            Como <span className="text-gradient-gold">Funciona</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative text-center p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-300"
            >
              {/* Step number */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center text-sm">
                {step.number}
              </div>
              
              {/* Icon */}
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
              
              {/* Content */}
              <h3 className="text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.description}</p>

              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
