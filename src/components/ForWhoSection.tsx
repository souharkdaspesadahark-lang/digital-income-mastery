import { Check, X } from "lucide-react";

const ForWhoSection = () => {
  const forWho = [
    "Quer começar do zero",
    "Busca uma renda extra real",
    "Tem pouco tempo disponível",
    "Quer trabalhar pelo celular",
    "Está disposto a aprender"
  ];

  const notForWho = [
    "Quer dinheiro fácil e rápido",
    "Não quer se dedicar",
    "Acha que é milagre",
    "Não segue instruções"
  ];

  return (
    <section className="py-16 md:py-20 bg-card relative">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Isso é <span className="text-gradient-gold">Para Você?</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Seja honesto consigo mesmo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {/* For who */}
          <div className="p-6 md:p-8 rounded-2xl bg-green-500/5 border border-green-500/20">
            <h3 className="text-lg font-bold mb-6 text-green-400 flex items-center gap-2">
              <Check className="w-5 h-5" />
              É para você se...
            </h3>
            <ul className="space-y-4">
              {forWho.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-green-400" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not for who */}
          <div className="p-6 md:p-8 rounded-2xl bg-destructive/5 border border-destructive/20">
            <h3 className="text-lg font-bold mb-6 text-destructive flex items-center gap-2">
              <X className="w-5 h-5" />
              NÃO é para você se...
            </h3>
            <ul className="space-y-4">
              {notForWho.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-destructive" />
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;
