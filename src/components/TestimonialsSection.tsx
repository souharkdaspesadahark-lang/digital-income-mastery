import { Star, TrendingUp, BadgeCheck } from "lucide-react";

const testimonials = [
  {
    name: "Ana Carolina",
    role: "Estudante",
    result: "R$ 2.847 no primeiro mês",
    text: "Eu era completamente cética, mas decidi tentar. Em 30 dias, fiz mais do que meu estágio pagava. Agora trabalho no meu tempo.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Rafael Mendes",
    role: "Ex-CLT",
    result: "R$ 4.200 em 45 dias",
    text: "Larguei meu emprego de carteira assinada depois de 3 meses aplicando o método. Hoje tenho liberdade financeira e de tempo.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Juliana Ferreira",
    role: "Mãe de 2 filhos",
    result: "R$ 1.890 trabalhando de casa",
    text: "Com dois filhos pequenos, não tinha como sair de casa. Esse método me permitiu gerar renda cuidando deles ao mesmo tempo.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Pedro Silva",
    role: "Aposentado",
    result: "R$ 3.100 de renda extra",
    text: "Aos 62 anos, achei que era tarde demais. Me enganei. Hoje complemento minha aposentadoria com uma renda que nunca imaginei.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-card relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="container px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <BadgeCheck className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Resultados Reais de Pessoas Reais</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Veja Quem Já <span className="text-gradient-gold">Transformou Sua Vida</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Pessoas comuns que decidiram agir e hoje colhem os resultados
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary/30"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <BadgeCheck className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="bg-primary/10 border border-primary/20 rounded-lg px-4 py-2 mb-4 inline-flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="font-bold text-primary">{testimonial.result}</span>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">"{testimonial.text}"</p>
            </div>
          ))}
        </div>

        {/* Results Summary */}
        <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-8 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <p className="text-3xl font-bold text-gradient-gold">+2.500</p>
              <p className="text-sm text-muted-foreground">Alunos Ativos</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gradient-gold">R$ 1.2M+</p>
              <p className="text-sm text-muted-foreground">Gerados pelos Alunos</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gradient-gold">4.9/5</p>
              <p className="text-sm text-muted-foreground">Avaliação Média</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gradient-gold">97%</p>
              <p className="text-sm text-muted-foreground">Taxa de Satisfação</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
