import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AuthoritySection from "@/components/AuthoritySection";
import BenefitsSection from "@/components/BenefitsSection";
import FAQSection from "@/components/FAQSection";
import SocialProofSection from "@/components/SocialProofSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Método de Renda Online | Aprenda a Gerar Renda Extra Pelo Celular</title>
        <meta 
          name="description" 
          content="Descubra como gerar renda extra usando apenas o celular. Método estruturado para iniciantes, sem experiência prévia necessária. Comece hoje mesmo." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://seu-dominio.com" />
      </Helmet>

      <main className="min-h-screen bg-background">
        <Header />
        <HeroSection />
        <AuthoritySection />
        <BenefitsSection />
        <SocialProofSection />
        <FAQSection />
        <CTASection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
