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
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { FaWhatsapp, FaCheck } from "react-icons/fa";

const programs = [
  {
    name: "Play Group",
    age: "1.5 - 2.5 years",
    gradient: "linear-gradient(135deg, #FF6B35, #EC4899)",
    emoji: "🧸",
    features: [
      "Sensory play activities",
      "Basic motor skill development",
      "Introduction to colors & shapes",
      "Music and rhymes",
    ],
  },
  {
    name: "Nursery",
    age: "2.5 - 3.5 years",
    gradient: "linear-gradient(135deg, #4ECDC4, #38BDF8)",
    emoji: "🌟",
    features: [
      "Pre-reading & phonics",
      "Number recognition",
      "Creative arts & crafts",
      "Social interaction skills",
    ],
    popular: true,
  },
  {
    name: "Pre-KG",
    age: "3.5 - 4.5 years",
    gradient: "linear-gradient(135deg, #A855F7, #EC4899)",
    emoji: "🚀",
    features: [
      "Early writing practice",
      "Basic math concepts",
      "Science exploration",
      "Leadership activities",
    ],
  },
];

const SectionRoot = styled(Box)({
  padding: "100px 0",
  background: "#fff",
});

const ProgramCard = styled(Card)<{ popular?: boolean }>(({ popular }) => ({
  height: "100%",
  border: popular ? "2px solid #FF6B35" : "1px solid #f3f4f6",
  position: "relative",
  overflow: "visible",
  transition: "all 0.3s ease",
  transform: popular ? "scale(1.05)" : "scale(1)",
  "&:hover": {
    transform: popular ? "scale(1.07)" : "scale(1.03)",
    boxShadow: "0 12px 40px rgba(0,0,0,0.1)",
  },
}));

const PopularBadge = styled(Chip)({
  position: "absolute",
  top: -14,
  right: 20,
  background: "linear-gradient(135deg, #FF6B35, #EC4899)",
  color: "#fff",
  fontWeight: 700,
  fontSize: "0.75rem",
  height: 28,
});

const CardHeader = styled(Box)<{ bg: string }>(({ bg }) => ({
  background: bg,
  padding: "28px 24px",
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
  return (
    <SectionRoot id="programs">
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: "center", maxWidth: 700, mx: "auto", mb: 8 }}>
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
            Age-appropriate curriculum that makes learning a joyful journey for
            every child.
          </Typography>
        </Box>

        {/* Cards */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" },
            gap: 3,
            alignItems: "center",
          }}
        >
          {programs.map((p) => (
            <ProgramCard key={p.name} popular={p.popular} elevation={0}>
              {p.popular && <PopularBadge label="Most Popular" />}
              <CardHeader bg={p.gradient}>
                <Box sx={{ fontSize: "3.5rem", mb: 1 }}>{p.emoji}</Box>
                <Typography variant="h5" sx={{ color: "#fff" }}>
                  {p.name}
                </Typography>
                <Typography sx={{ color: "rgba(255,255,255,0.8)", mt: 0.5 }}>
                  Age: {p.age}
                </Typography>
              </CardHeader>
              <CardContent sx={{ p: 3 }}>
                <List disablePadding>
                  {p.features.map((f) => (
                    <ListItem key={f} disablePadding sx={{ py: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 32, color: "primary.main" }}>
                        <FaCheck style={{ fontSize: 14 }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={f}
                        primaryTypographyProps={{
                          color: "text.secondary",
                          fontSize: "0.95rem",
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
                <Box sx={{ mt: 3 }}>
                  <EnquireButton
                    fullWidth
                    startIcon={<FaWhatsapp />}
                    onClick={() => onEnquireClick?.(`${p.name} (${p.age})`)}
                  >
                    Enquire Now
                  </EnquireButton>
                </Box>
              </CardContent>
            </ProgramCard>
          ))}
        </Box>
      </Container>
    </SectionRoot>
  );
}
