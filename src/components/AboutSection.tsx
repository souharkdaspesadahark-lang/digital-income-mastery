const AboutSection = () => {
  return (
    <section className="py-16 md:py-20 bg-background relative">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Quem criou isso</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-2">
              Sobre o <span className="text-gradient-gold">Método</span>
            </h2>
          </div>

          <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
            <p className="text-foreground/90 text-base md:text-lg leading-relaxed mb-4">
              Esse método foi criado por alguém que também começou do zero, sem dinheiro, sem experiência e sem saber por onde começar.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-4">
              Depois de muito erro e acerto, encontrei uma forma simples de gerar renda extra usando apenas o celular — e decidi organizar tudo isso num passo a passo claro para quem quer o mesmo.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">O que você vai ganhar:</strong> um método estruturado, sem enrolação, que você pode aplicar no seu tempo e no seu ritmo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
