"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/916361587391?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20Prakruthi%20Pre%20School"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 flex items-center gap-2 group"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="text-3xl" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap text-sm font-semibold">
        Chat with us
      </span>
    </a>
  );
}
