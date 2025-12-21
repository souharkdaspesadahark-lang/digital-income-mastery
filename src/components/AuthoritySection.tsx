import { CheckCircle, Globe, Users, Zap } from "lucide-react";

const AuthoritySection = () => {
  const stats = [
    { icon: Globe, value: "R$ 200B+", label: "Mercado digital brasileiro" },
    { icon: Users, value: "150M+", label: "Brasileiros conectados" },
    { icon: Zap, value: "24/7", label: "Oportunidades disponíveis" },
  ];

  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-50" />

      <div className="container relative z-10 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Por Que Este Método{" "}
              <span className="text-gradient-gold">Funciona</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              O mercado digital brasileiro está em plena expansão. 
              Quem se posiciona corretamente agora colhe resultados no futuro.
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300 group"
              >
                <stat.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-bold text-gradient-gold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Authority text */}
          <div className="bg-secondary/30 rounded-2xl p-8 border border-border">
            <h3 className="text-xl font-semibold mb-4">O cenário atual do mercado digital</h3>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p>
                  O Brasil é um dos países que mais cresce em comércio eletrônico e marketing digital, 
                  com milhões de novas oportunidades surgindo a cada ano.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p>
                  Estratégias digitais bem aplicadas permitem que qualquer pessoa, independente de 
                  formação ou experiência prévia, construa fontes de renda consistentes.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p>
                  Este método foi estruturado para funcionar com ferramentas gratuitas e acessíveis, 
                  eliminando barreiras de entrada para iniciantes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
