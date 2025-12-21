import { Quote, Star } from "lucide-react";

const SocialProofSection = () => {
  const testimonials = [
    {
      text: "Comecei sem saber nada de internet e hoje consigo gerar uma renda extra que faz diferença no final do mês.",
      author: "Maria S.",
      role: "Estudante"
    },
    {
      text: "O passo a passo é muito claro. Mesmo trabalhando em tempo integral, consegui aplicar as estratégias.",
      author: "Carlos R.",
      role: "Profissional autônomo"
    },
    {
      text: "Finalmente um método que não promete milagres. Dá trabalho, mas os resultados aparecem.",
      author: "Ana P.",
      role: "Empreendedora"
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative z-10 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Depoimentos</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
              O Que Dizem Quem{" "}
              <span className="text-gradient-gold">Já Começou</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Histórias reais de pessoas que decidiram dar o primeiro passo
            </p>
          </div>

          {/* Testimonials grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                <p className="text-foreground/90 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium text-sm">{testimonial.author}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Trust badge */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              Milhares de pessoas já utilizam estratégias digitais para gerar renda extra no Brasil
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
