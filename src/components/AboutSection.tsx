"use client";

import Image from "next/image";
import { styled } from "@mui/material/styles";
import { Box, Typography, Container, Chip, Card, CardContent } from "@mui/material";
import {
  FaLeaf,
  FaPaintBrush,
  FaMusic,
  FaBook,
  FaHeart,
  FaStar,
} from "react-icons/fa";

const features = [
  {
    icon: <FaLeaf />,
    title: "Nature-Based Learning",
    desc: "Children explore, observe, and learn through direct interaction with nature and the environment.",
    color: "#22c55e",
    bg: "#f0fdf4",
  },
  {
    icon: <FaPaintBrush />,
    title: "Creative Arts",
    desc: "Painting, crafting, and creative expression to develop fine motor skills and imagination.",
    color: "#FF6B35",
    bg: "#fff7ed",
  },
  {
    icon: <FaMusic />,
    title: "Music & Movement",
    desc: "Rhythm, dance, and musical activities that boost cognitive development and coordination.",
    color: "#A855F7",
    bg: "#faf5ff",
  },
  {
    icon: <FaBook />,
    title: "Early Literacy",
    desc: "Story time, phonics, and language activities that build a strong foundation for reading.",
    color: "#38BDF8",
    bg: "#f0f9ff",
  },
  {
    icon: <FaHeart />,
    title: "Social Skills",
    desc: "Group activities and guided play that teach sharing, empathy, and cooperation.",
    color: "#EC4899",
    bg: "#fdf2f8",
  },
  {
    icon: <FaStar />,
    title: "Holistic Growth",
    desc: "A balanced approach to physical, emotional, and intellectual development.",
    color: "#EAB308",
    bg: "#fefce8",
  },
];

const SectionRoot = styled(Box)({
  padding: "100px 0",
  background: "#fff",
});

const FeatureCard = styled(Card)({
  height: "100%",
  border: "1px solid #f3f4f6",
  transition: "all 0.3s ease",
  cursor: "default",
  "&:hover": {
    borderColor: "rgba(255,107,53,0.2)",
    boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
    transform: "translateY(-4px)",
  },
});

const IconCircle = styled(Box)<{ bgcolor: string; iconcolor: string }>(
  ({ bgcolor, iconcolor }) => ({
    width: 56,
    height: 56,
    borderRadius: 14,
    background: bgcolor,
    color: iconcolor,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.4rem",
    marginBottom: 16,
    transition: "transform 0.3s",
    ".MuiCard-root:hover &": {
      transform: "scale(1.1)",
    },
  })
);

export default function AboutSection() {
  return (
    <SectionRoot id="about">
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: "center", maxWidth: 700, mx: "auto", mb: 8 }}>
          <Chip
            label="Why Choose Us"
            sx={{
              bgcolor: "rgba(78,205,196,0.1)",
              color: "secondary.main",
              fontWeight: 600,
              mb: 2,
            }}
          />
          <Typography variant="h2" sx={{ fontSize: { xs: "2rem", sm: "2.8rem" }, mb: 2 }}>
            A Place Where Children{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              Thrive
            </Box>
          </Typography>
          <Typography sx={{ color: "text.secondary", fontSize: "1.1rem", lineHeight: 1.8 }}>
            At Prakruthi Pre School, we believe every child is a seed of
            potential. Our nurturing environment, experienced educators, and
            play-based curriculum help your little one grow into a confident,
            curious learner.
          </Typography>
        </Box>

        {/* Photo Banner */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr 1fr" },
            gap: 2.5,
            mb: 8,
          }}
        >
          {[
            { src: "/images/campus-exterior.jpg", label: "🏫 Our Campus", sub: "Green & spacious learning environment" },
            { src: "/images/classroom.jpg", label: "📚 Classrooms", sub: "Bright & engaging learning spaces" },
            { src: "/images/activity-hall.jpg", label: "🏃 Activity Hall", sub: "Large indoor play & dance area" },
            { src: "/images/campus-security.jpg", label: "🔒 CCTV Security", sub: "24/7 campus monitoring for safety" },
          ].map((item) => (
            <Box
              key={item.label}
              sx={{
                position: "relative",
                borderRadius: 4,
                overflow: "hidden",
                height: { xs: 200, md: 240 },
                boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
                transition: "transform 0.3s",
                "&:hover": { transform: "translateY(-4px)" },
              }}
            >
              <Image
                src={item.src}
                alt={item.label}
                fill
                sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 25vw"
                style={{ objectFit: "cover" }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
                  p: 2,
                }}
              >
                <Typography sx={{ color: "#fff", fontWeight: 700, fontSize: "0.95rem" }}>
                  {item.label}
                </Typography>
                <Typography sx={{ color: "rgba(255,255,255,0.8)", fontSize: "0.75rem" }}>
                  {item.sub}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        {/* Features */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "1fr 1fr 1fr" },
            gap: 3,
          }}
        >
          {features.map((f) => (
            <FeatureCard key={f.title} elevation={0}>
              <CardContent sx={{ p: 3.5 }}>
                <IconCircle bgcolor={f.bg} iconcolor={f.color}>
                  {f.icon}
                </IconCircle>
                <Typography variant="h6" sx={{ mb: 1, fontSize: "1.15rem" }}>
                  {f.title}
                </Typography>
                <Typography sx={{ color: "text.secondary", lineHeight: 1.7 }}>
                  {f.desc}
                </Typography>
              </CardContent>
            </FeatureCard>
          ))}
        </Box>
      </Container>
    </SectionRoot>
  );
}
