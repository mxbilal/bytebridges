import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "../../content/site";

const FloatingCTA = () => (
  <a
    href={whatsappUrl()}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 hover:scale-105 transition-all"
  >
    <MessageCircle className="w-7 h-7" />
  </a>
);

export default FloatingCTA;
