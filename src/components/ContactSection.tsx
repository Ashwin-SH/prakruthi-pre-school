"use client";

import { styled } from "@mui/material/styles";
import {
  Box,
  Typography,
  Container,
  Chip,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import {
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import { PHONE_DISPLAY, TEL_LINK, whatsappLink } from "@/lib/contact";

const SectionRoot = styled(Box)({
  padding: "100px 0",
  background: "linear-gradient(135deg, #FFF8F0 0%, #FFF0E0 100%)",
});

const ContactCard = styled(Card)({
  border: "1px solid #f3f4f6",
  transition: "all 0.3s ease",
  "&:hover": {
    boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
    transform: "translateY(-2px)",
  },
});

const IconBox = styled(Box)<{ bgcolor: string; iconcolor: string }>(
  ({ bgcolor, iconcolor }) => ({
    width: 52,
    height: 52,
    borderRadius: 14,
    background: bgcolor,
    color: iconcolor,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.3rem",
    flexShrink: 0,
  })
);

const VisitCard = styled(Box)({
  background: "linear-gradient(135deg, #FF6B35, #EC4899)",
  borderRadius: 24,
  padding: 48,
  color: "#fff",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  minHeight: 400,
});

const ScheduleButton = styled(Button)({
  background: "#fff",
  color: "#FF6B35",
  fontWeight: 700,
  padding: "14px 32px",
  borderRadius: 50,
  fontSize: "1.05rem",
  boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
  "&:hover": {
    background: "#f9fafb",
    boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
    transform: "translateY(-2px)",
  },
  transition: "all 0.3s",
});

const contactItems = [
  {
    icon: <FaWhatsapp />,
    bgcolor: "#f0fdf4",
    iconcolor: "#22c55e",
    title: "WhatsApp",
    subtitle: "Quick replies, usually within minutes",
    link: whatsappLink(),
    linkText: PHONE_DISPLAY,
  },
  {
    icon: <FaPhone />,
    bgcolor: "#fff7ed",
    iconcolor: "#FF6B35",
    title: "Call Us",
    subtitle: "Mon - Sat, 9 AM to 5 PM",
    link: TEL_LINK,
    linkText: PHONE_DISPLAY,
  },
  {
    icon: <FaEnvelope />,
    bgcolor: "#f0fdfa",
    iconcolor: "#4ECDC4",
    title: "Email",
    subtitle: "We reply within 24 hours",
    linkText: "info@prakruthipreschool.com",
  },
  {
    icon: <FaClock />,
    bgcolor: "#fdf2f8",
    iconcolor: "#EC4899",
    title: "School Hours",
    subtitle: "Monday - Friday: 9:00 AM - 1:00 PM",
    extra: "Saturday: 9:00 AM - 12:00 PM",
  },
];

export default function ContactSection() {
  return (
    <SectionRoot id="contact" sx={{ pt: "50px" }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: "center", maxWidth: 700, mx: "auto", mb: 8 }}>
          <Chip
            label="Get In Touch"
            sx={{
              bgcolor: "rgba(255,107,53,0.1)",
              color: "primary.main",
              fontWeight: 600,
              mb: 2,
            }}
          />
          <Typography variant="h2" sx={{ fontSize: { xs: "2rem", sm: "2.8rem" }, mb: 2 }}>
            We&apos;d Love to{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              Hear From You
            </Box>
          </Typography>
          <Typography sx={{ color: "text.secondary", fontSize: "1.1rem" }}>
            Have questions about admissions or want to visit our school? Reach
            out to us!
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
            gap: 4,
          }}
        >
          {/* Contact Cards */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
            {contactItems.map((item) => (
              <ContactCard key={item.title} elevation={0}>
                <CardContent sx={{ display: "flex", alignItems: "flex-start", gap: 2, p: 2.5 }}>
                  <IconBox bgcolor={item.bgcolor} iconcolor={item.iconcolor}>
                    {item.icon}
                  </IconBox>
                  <Box sx={{ minWidth: 0 }}>
                    <Typography variant="h6" sx={{ fontSize: "1.1rem", mb: 0.3 }}>
                      {item.title}
                    </Typography>
                    <Typography sx={{ color: "text.secondary", fontSize: "0.9rem", mb: 0.5 }}>
                      {item.subtitle}
                    </Typography>
                    {item.link ? (
                      <Typography
                        {...(item.link ? {
                          component: "a" as const,
                          href: item.link,
                          target: item.link.startsWith("http") ? "_blank" : undefined,
                          rel: item.link.startsWith("http") ? "noopener noreferrer" : undefined,
                        } : {})}
                        sx={{
                          color: item.iconcolor,
                          fontWeight: 600,
                          textDecoration: "none",
                          overflowWrap: "anywhere",
                          "&:hover": { textDecoration: "underline" },
                        }}
                      >
                        {item.linkText}
                      </Typography>
                    ) : item.linkText ? (
                      <Typography sx={{ color: item.iconcolor, fontWeight: 600, overflowWrap: "anywhere" }}>
                        {item.linkText}
                      </Typography>
                    ) : null}
                    {item.extra && (
                      <Typography sx={{ color: "text.secondary", fontSize: "0.9rem" }}>
                        {item.extra}
                      </Typography>
                    )}
                  </Box>
                </CardContent>
              </ContactCard>
            ))}
          </Box>

          {/* Visit Card */}
          <VisitCard sx={{ p: { xs: 3, sm: 6 }, minHeight: { xs: 320, sm: 400 } }}>
            <Box
              sx={{
                bgcolor: "rgba(255,255,255,0.2)",
                p: 2.5,
                borderRadius: "50%",
                mb: 3,
              }}
            >
              <FaMapMarkerAlt style={{ fontSize: "2.5rem" }} />
            </Box>
            <Typography variant="h3" sx={{ color: "#fff", mb: 2, fontSize: { xs: "1.6rem", sm: "2rem" } }}>
              Visit Our Campus
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.85)", fontSize: "1.1rem", mb: 1 }}>
              Prakruthi Pre School
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.7)", mb: 4, maxWidth: 350 }}>
              Malmaddi, Dharwad, Karnataka 580007
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2, alignItems: "stretch", width: "100%", maxWidth: 320 }}>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=PRAKRUTHI+PRE+SCHOOL+Malmaddi+Dharwad+Karnataka+580007"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", width: "100%" }}
              >
                <ScheduleButton fullWidth startIcon={<FaMapMarkerAlt />}>
                  Get Directions
                </ScheduleButton>
              </a>
              <a
                href={whatsappLink("Hi, I would like to schedule a campus visit")}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", width: "100%" }}
              >
                <ScheduleButton fullWidth startIcon={<FaWhatsapp style={{ color: "#25D366" }} />}>
                  Schedule a Visit
                </ScheduleButton>
              </a>
            </Box>
          </VisitCard>
        </Box>
      </Container>
    </SectionRoot>
  );
}
