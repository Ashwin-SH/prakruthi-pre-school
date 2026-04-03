"use client";

import { styled } from "@mui/material/styles";
import { Fab, Typography, Box } from "@mui/material";
import { FaWhatsapp } from "react-icons/fa";

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
        href="https://wa.me/916361587391?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20Prakruthi%20Pre%20School"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <WhatsAppFab aria-label="Chat on WhatsApp">
          <FaWhatsapp style={{ fontSize: "1.8rem" }} />
        </WhatsAppFab>
      </a>
    </>
  );
}
