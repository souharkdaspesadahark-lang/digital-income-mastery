import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import SimpleTestimonials from "@/components/SimpleTestimonials";
import ForWhoSection from "@/components/ForWhoSection";
import BenefitsSection from "@/components/BenefitsSection";
import MidCTA from "@/components/MidCTA";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import LimitedSpotsCounter from "@/components/LimitedSpotsCounter";
import StickyCTA from "@/components/StickyCTA";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Método de Renda Online | Gere Renda Extra Pelo Celular</title>
        <meta 
          name="description" 
          content="Aprenda a gerar renda extra usando apenas o celular. Método simples para iniciantes, sem experiência prévia necessária. Acesso imediato." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://seu-dominio.com" />
      </Helmet>

      <main className="min-h-screen bg-background pb-20">
        <LimitedSpotsCounter />
        <Header />
        <HeroSection />
        <HowItWorksSection />
        <SimpleTestimonials />
        <MidCTA />
        <ForWhoSection />
        <BenefitsSection />
        <MidCTA variant="urgent" />
        <AboutSection />
        <FAQSection />
        <CTASection />
        <Footer />
        
        {/* Fixed elements */}
        <StickyCTA />
        <WhatsAppButton />
      </main>
    </>
  );
};

export default Index;
