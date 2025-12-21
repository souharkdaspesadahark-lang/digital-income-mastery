import { 
  Clock, 
  DollarSign, 
  GraduationCap, 
  Laptop, 
  MapPin, 
  Shield 
} from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Laptop,
      title: "Trabalhe de Qualquer Lugar",
      description: "Tudo que você precisa é de um celular com internet. Sem escritório, sem deslocamento."
    },
    {
      icon: Clock,
      title: "Flexibilidade Total",
      description: "Defina seus próprios horários. Compatível com trabalho, estudos ou outras responsabilidades."
    },
    {
      icon: GraduationCap,
      title: "Passo a Passo Estruturado",
      description: "Conteúdo organizado do básico ao avançado, ideal para quem está começando do zero."
    },
    {
      icon: DollarSign,
      title: "Baixo Investimento Inicial",
      description: "Métodos que funcionam com ferramentas gratuitas ou de baixo custo."
    },
    {
      icon: MapPin,
      title: "Sem Barreiras Geográficas",
      description: "Alcance pessoas de todo o Brasil e do mundo, expandindo suas possibilidades."
    },
    {
      icon: Shield,
      title: "Suporte Dedicado",
      description: "Acesso a comunidade e materiais de apoio para tirar suas dúvidas."
    }
  ];

  return (
    <section className="py-24 bg-background relative">
      <div className="container px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Benefícios</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
              O Que Você Vai{" "}
              <span className="text-gradient-gold">Conquistar</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Veja como este método pode transformar sua forma de gerar renda
            </p>
          </div>

          {/* Benefits grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
