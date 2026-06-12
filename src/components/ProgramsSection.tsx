"use client";

import { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Typography,
  Container,
  Chip,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import {
  FaWhatsapp,
  FaCheck,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const programs = [
  {
    name: "Kindergarten",
    age: "2 - 3 years",
    gradient: "linear-gradient(135deg, #FF6B35, #EC4899)",
    emoji: "🧸",
    features: [
      "Sensory play & exploration",
      "Basic motor skill development",
      "Colors, shapes & rhymes",
      "A gentle first-school experience",
    ],
  },
  {
    name: "Nursery",
    age: "3 - 4 years",
    gradient: "linear-gradient(135deg, #4ECDC4, #38BDF8)",
    emoji: "🌟",
    features: [
      "Pre-reading & phonics",
      "Number recognition",
      "Creative arts & crafts",
      "Social interaction skills",
    ],
  },
  {
    name: "LKG",
    age: "4 - 5 years",
    gradient: "linear-gradient(135deg, #A855F7, #EC4899)",
    emoji: "🚀",
    features: [
      "Early reading & writing",
      "Basic math concepts",
      "Environmental awareness",
      "Confidence-building activities",
    ],
  },
  {
    name: "UKG",
    age: "5 - 6 years",
    gradient: "linear-gradient(135deg, #FFA726, #FF6B35)",
    emoji: "🎓",
    features: [
      "Fluent reading & writing",
      "Logical & math thinking",
      "Science exploration",
      "Primary-school readiness",
    ],
  },
];

const SectionRoot = styled(Box)({
  padding: "100px 0",
  background: "#fff",
});

const CardHeader = styled(Box, {
  shouldForwardProp: (prop) => prop !== "bg",
})<{ bg: string }>(({ bg }) => ({
  background: bg,
  textAlign: "center",
  color: "#fff",
}));

const EnquireButton = styled(Button)(({ theme }) => ({
  background: theme.palette.primary.main,
  color: "#fff",
  fontWeight: 700,
  borderRadius: 12,
  padding: "12px 24px",
  width: "100%",
  "&:hover": {
    background: theme.palette.primary.dark,
  },
  transition: "all 0.3s",
}));

export default function ProgramsSection({ onEnquireClick }: { onEnquireClick?: (program: string) => void }) {
  const [expanded, setExpanded] = useState<number | null>(null);

  const goPrev = () =>
    setExpanded((p) => (p === null ? p : (p - 1 + programs.length) % programs.length));
  const goNext = () =>
    setExpanded((p) => (p === null ? p : (p + 1) % programs.length));

  return (
    <SectionRoot id="programs" sx={{ pt: { xs: 3, md: 6 }, pb: { xs: 4, md: 8 } }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: "center", maxWidth: 700, mx: "auto", mb: { xs: 4, md: 7 } }}>
          <Chip
            label="Our Programs"
            sx={{
              bgcolor: "rgba(168,85,247,0.1)",
              color: "#A855F7",
              fontWeight: 600,
              mb: 2,
            }}
          />
          <Typography variant="h2" sx={{ fontSize: { xs: "2rem", sm: "2.8rem" }, mb: 2 }}>
            Programs Designed for{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              Every Stage
            </Box>
          </Typography>
          <Typography sx={{ color: "text.secondary", fontSize: "1.1rem" }}>
            Tap a program to see what your child will learn at each stage.
          </Typography>
        </Box>

        {expanded === null ? (
          /* ---- Grid: 2 per row, age + name only ---- */
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: { xs: 2, sm: 3 },
              maxWidth: 720,
              mx: "auto",
            }}
          >
            {programs.map((p, i) => (
              <Box
                key={p.name}
                onClick={() => setExpanded(i)}
                role="button"
                aria-label={`View ${p.name}`}
                sx={{
                  cursor: "pointer",
                  borderRadius: "18px",
                  overflow: "hidden",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                  transition: "transform 0.25s ease, box-shadow 0.25s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 14px 34px rgba(0,0,0,0.14)",
                  },
                }}
              >
                <CardHeader bg={p.gradient} sx={{ px: 1.25, py: { xs: 3, sm: 4.5 } }}>
                  <Box sx={{ fontSize: { xs: "2.4rem", sm: "3.2rem" }, mb: 1 }}>{p.emoji}</Box>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#fff",
                      fontSize: { xs: "0.95rem", sm: "1.4rem" },
                      lineHeight: 1.2,
                    }}
                  >
                    {p.name}
                  </Typography>
                  <Typography sx={{ color: "rgba(255,255,255,0.9)", mt: 0.5, fontSize: { xs: "0.8rem", sm: "1rem" } }}>
                    {p.age}
                  </Typography>
                </CardHeader>
              </Box>
            ))}
          </Box>
        ) : (
          /* ---- Expanded single program with full details ---- */
          <Box sx={{ position: "relative", maxWidth: 560, mx: "auto" }}>
            <Box
              sx={{
                borderRadius: "18px",
                overflow: "hidden",
                bgcolor: "#fff",
                boxShadow: "0 16px 44px rgba(0,0,0,0.16)",
              }}
            >
              <CardHeader bg={programs[expanded].gradient} sx={{ position: "relative", px: 3, py: 5 }}>
                <IconButton
                  onClick={() => setExpanded(null)}
                  aria-label="Close"
                  size="small"
                  sx={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    color: "#fff",
                    bgcolor: "rgba(0,0,0,0.2)",
                    "&:hover": { bgcolor: "rgba(0,0,0,0.35)" },
                  }}
                >
                  <FaTimes style={{ fontSize: 14 }} />
                </IconButton>
                <Box sx={{ fontSize: "3.6rem", mb: 1 }}>{programs[expanded].emoji}</Box>
                <Typography variant="h4" sx={{ color: "#fff" }}>
                  {programs[expanded].name}
                </Typography>
                <Typography sx={{ color: "rgba(255,255,255,0.9)", mt: 0.5 }}>
                  Age: {programs[expanded].age}
                </Typography>
              </CardHeader>

              <Box sx={{ p: { xs: 3, sm: 4 } }}>
                <List disablePadding>
                  {programs[expanded].features.map((f) => (
                    <ListItem key={f} disablePadding sx={{ py: 0.6 }}>
                      <ListItemIcon sx={{ minWidth: 32, color: "primary.main" }}>
                        <FaCheck style={{ fontSize: 14 }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={f}
                        primaryTypographyProps={{ color: "text.secondary", fontSize: "0.97rem" }}
                      />
                    </ListItem>
                  ))}
                </List>
                <Box sx={{ mt: 3 }}>
                  <EnquireButton
                    startIcon={<FaWhatsapp />}
                    onClick={() =>
                      onEnquireClick?.(`${programs[expanded].name} (${programs[expanded].age})`)
                    }
                  >
                    Enquire Now
                  </EnquireButton>
                </Box>
              </Box>
            </Box>

            {/* Swipe arrows */}
            <IconButton
              onClick={goPrev}
              aria-label="Previous program"
              sx={{
                position: "absolute",
                top: "50%",
                left: { xs: 4, sm: -22 },
                transform: "translateY(-50%)",
                bgcolor: "transparent",
                color: "text.primary",
                "&:hover": { bgcolor: "rgba(0,0,0,0.06)" },
              }}
            >
              <FaChevronLeft />
            </IconButton>
            <IconButton
              onClick={goNext}
              aria-label="Next program"
              sx={{
                position: "absolute",
                top: "50%",
                right: { xs: 4, sm: -22 },
                transform: "translateY(-50%)",
                bgcolor: "transparent",
                color: "text.primary",
                "&:hover": { bgcolor: "rgba(0,0,0,0.06)" },
              }}
            >
              <FaChevronRight />
            </IconButton>
          </Box>
        )}
      </Container>
    </SectionRoot>
  );
}
