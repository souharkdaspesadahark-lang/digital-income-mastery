import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappNumber = "5511999999999"; // Replace with actual number
  const message = encodeURIComponent("Olá! Tenho interesse no método de renda online.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 md:bottom-24 right-4 md:right-6 z-40 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-white" />
    </a>
  );
};

export default WhatsAppButton;
