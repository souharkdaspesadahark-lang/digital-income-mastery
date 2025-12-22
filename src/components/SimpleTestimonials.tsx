import { Star } from "lucide-react";

const SimpleTestimonials = () => {
  const testimonials = [
    {
      text: "Nunca pensei que fosse possível. Comecei do zero e hoje já tenho uma renda extra consistente.",
      name: "Ana P.",
      time: "Há 2 semanas"
    },
    {
      text: "O método é simples e direto. Consegui aplicar mesmo trabalhando em tempo integral.",
      name: "Carlos M.",
      time: "Há 1 mês"
    },
    {
      text: "Finalmente algo que funciona de verdade. Recomendo para quem quer começar.",
      name: "Juliana S.",
      time: "Há 3 semanas"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-background relative">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">O que dizem</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-2">
            Quem Já <span className="text-gradient-gold">Aplicou</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {testimonials.map((item, index) => (
            <div 
              key={index}
              className="p-5 md:p-6 rounded-xl bg-card border border-border"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-foreground/90 text-sm md:text-base mb-4 leading-relaxed">
                "{item.text}"
              </p>
              
              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">{item.name.charAt(0)}</span>
                  </div>
                  <span className="text-sm font-medium">{item.name}</span>
                </div>
                <span className="text-xs text-muted-foreground">{item.time}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badge */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-sm text-muted-foreground">+500 pessoas já usando o método</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleTestimonials;
