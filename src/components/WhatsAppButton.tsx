"use client";

import { styled } from "@mui/material/styles";
import { Fab, Box } from "@mui/material";
import { FaWhatsapp } from "react-icons/fa";
import { whatsappLink } from "@/lib/contact";

const WhatsAppFab = styled(Fab)({
  position: "fixed",
  bottom: 24,
  right: 24,
  zIndex: 1000,
  background: "#25D366",
  color: "#fff",
  width: 60,
  height: 60,
  boxShadow: "0 4px 20px rgba(37,211,102,0.4)",
  "&:hover": {
    background: "#1fb855",
    boxShadow: "0 6px 25px rgba(37,211,102,0.5)",
    transform: "scale(1.1)",
  },
  transition: "all 0.3s",
});

const PulseRing = styled(Box)({
  position: "fixed",
  bottom: 24,
  right: 24,
  zIndex: 999,
  width: 60,
  height: 60,
  borderRadius: "50%",
  border: "3px solid #25D366",
  animation: "pulse-ring 2s ease-out infinite",
  "@keyframes pulse-ring": {
    "0%": { transform: "scale(1)", opacity: 1 },
    "100%": { transform: "scale(1.5)", opacity: 0 },
  },
});

export default function WhatsAppButton() {
  return (
    <>
      <PulseRing />
      <a
        href={whatsappLink("Hi, I would like to know more about Prakruthi Pre School")}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <WhatsAppFab aria-label="Chat on WhatsApp">
          <FaWhatsapp style={{ fontSize: "1.3rem" }} />
        </WhatsAppFab>
      </a>
    </>
  );
}
