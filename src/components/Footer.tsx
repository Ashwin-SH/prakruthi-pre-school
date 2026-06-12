"use client";

import { styled } from "@mui/material/styles";
import { Box, Typography, Container, IconButton } from "@mui/material";
import {
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import { PHONE_DISPLAY, whatsappLink } from "@/lib/contact";

const FooterRoot = styled(Box)({
  background: "#111827",
  color: "#d1d5db",
  paddingTop: 80,
  paddingBottom: 24,
});

const FooterLink = styled("a")({
  color: "#d1d5db",
  textDecoration: "none",
  transition: "color 0.3s",
  "&:hover": {
    color: "#FF6B35",
  },
});

const SocialButton = styled(IconButton)({
  background: "#1f2937",
  color: "#d1d5db",
  transition: "all 0.3s",
  "&:hover": {
    background: "#FF6B35",
    color: "#fff",
  },
});

const LogoText = styled(Typography)({
  fontSize: "1.4rem",
  fontWeight: 800,
  background: "linear-gradient(135deg, #FF6B35, #EC4899)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  lineHeight: 1.2,
});

export default function Footer() {
  return (
    <FooterRoot>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" },
            gap: 6,
          }}
        >
          {/* Brand */}
          <Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
              <Box sx={{ fontSize: "2rem" }}>🌿</Box>
              <Box>
                <LogoText>Prakruthi</LogoText>
                <Typography sx={{ fontSize: "0.75rem", color: "#9ca3af", mt: -0.3 }}>
                  Pre School
                </Typography>
              </Box>
            </Box>
            <Typography sx={{ color: "#9ca3af", lineHeight: 1.8, maxWidth: 300 }}>
              Nurturing young minds with love, creativity, and nature-inspired
              learning since day one.
            </Typography>
          </Box>

          {/* Quick Links */}
          <Box>
            <Typography sx={{ color: "#fff", fontWeight: 600, fontSize: "1.1rem", mb: 2.5 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              {["Home", "About", "Gallery", "Programs", "Admission", "Contact"].map((l) => (
                <FooterLink key={l} href={`#${l.toLowerCase()}`}>
                  {l}
                </FooterLink>
              ))}
            </Box>
          </Box>

          {/* Contact */}
          <Box>
            <Typography sx={{ color: "#fff", fontWeight: 600, fontSize: "1.1rem", mb: 2.5 }}>
              Contact Us
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <FaPhone style={{ color: "#FF6B35" }} />
                <Typography>{PHONE_DISPLAY}</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <FaWhatsapp style={{ color: "#25D366" }} />
                <FooterLink href={whatsappLink()}>
                  WhatsApp Us
                </FooterLink>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <FaEnvelope style={{ color: "#4ECDC4" }} />
                <Typography>info@prakruthipreschool.com</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                <FaMapMarkerAlt style={{ color: "#EC4899", marginTop: 4 }} />
                <Typography
                  component="a"
                  href="https://www.google.com/maps/dir/?api=1&destination=PRAKRUTHI+PRE+SCHOOL+Malmaddi+Dharwad+Karnataka+580007"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "inherit",
                    textDecoration: "none",
                    cursor: "pointer",
                    "&:hover": { textDecoration: "underline", color: "#fff" },
                  }}
                >
                  Prakruthi Pre School, Malmaddi, Dharwad, Karnataka 580007
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", gap: 1.5, mt: 3 }}>
              <SocialButton aria-label="Instagram" size="small">
                <FaInstagram />
              </SocialButton>
              <SocialButton aria-label="Facebook" size="small">
                <FaFacebookF />
              </SocialButton>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            borderTop: "1px solid #1f2937",
            mt: 6,
            pt: 3,
            textAlign: "center",
          }}
        >
          <Typography sx={{ color: "#6b7280", fontSize: "0.85rem" }}>
            &copy; {new Date().getFullYear()} Prakruthi Pre School. All rights
            reserved.
          </Typography>
        </Box>
      </Container>
    </FooterRoot>
  );
}
