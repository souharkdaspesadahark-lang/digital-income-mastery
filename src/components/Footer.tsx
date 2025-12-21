const Footer = () => {
  return (
    <footer className="py-8 bg-card border-t border-border">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho 
            de uma estratégia não deve ser interpretada como uma garantia de resultados.
          </p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
