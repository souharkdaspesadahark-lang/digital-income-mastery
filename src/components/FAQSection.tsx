import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Preciso de experiência prévia para começar?",
      answer: "Não. O método foi desenvolvido especificamente para iniciantes. Você receberá instruções detalhadas desde o primeiro passo, sem necessidade de conhecimentos técnicos ou experiência em marketing digital."
    },
    {
      question: "Quanto tempo preciso dedicar por dia?",
      answer: "O método é flexível e se adapta à sua rotina. Você pode começar dedicando apenas 1-2 horas por dia. À medida que evolui, você define o ritmo que faz sentido para seus objetivos."
    },
    {
      question: "Preciso investir dinheiro para começar?",
      answer: "As estratégias ensinadas podem ser aplicadas com ferramentas gratuitas disponíveis na internet. O investimento inicial é mínimo, focando no conhecimento e na aplicação correta das técnicas."
    },
    {
      question: "Em quanto tempo vou ver resultados?",
      answer: "Os resultados variam de pessoa para pessoa, dependendo da dedicação e consistência na aplicação do método. Não fazemos promessas de ganhos específicos, pois o sucesso depende do seu esforço e comprometimento."
    },
    {
      question: "O método funciona para qualquer pessoa?",
      answer: "Sim, desde que você tenha acesso a um celular com internet e disposição para aprender e aplicar as estratégias ensinadas. Idade, formação ou localização não são impedimentos."
    },
    {
      question: "Como funciona o acesso ao conteúdo?",
      answer: "Após a confirmação do pagamento, você recebe acesso imediato a todo o conteúdo através de uma área de membros exclusiva, disponível 24 horas por dia, 7 dias por semana."
    }
  ];

  return (
    <section className="py-24 bg-card relative">
      <div className="container px-6">
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Dúvidas Frequentes</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
              Perguntas{" "}
              <span className="text-gradient-gold">Respondidas</span>
            </h2>
            <p className="text-muted-foreground">
              Esclarecemos as principais dúvidas de quem está começando
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-secondary/30 border border-border rounded-xl px-6 data-[state=open]:border-primary/40 transition-colors"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <span className="font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
