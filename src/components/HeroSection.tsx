"use client";

import Image from "next/image";
import { styled } from "@mui/material/styles";
import { Box, Typography, Button, Container, Chip } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { FaWhatsapp, FaArrowDown } from "react-icons/fa";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const heroSlides = [
  {
    image: "/images/school-group.jpg",
    title: "Our Prakruthi Family",
    subtitle: "A loving community of students, teachers & parents",
  },
  {
    image: "/images/campus-front.jpg",
    title: "Our Beautiful Campus",
    subtitle: "Safe, green, and inspiring learning spaces",
  },
  {
    image: "/images/classroom.jpg",
    title: "Engaging Classrooms",
    subtitle: "Where curiosity meets creative learning",
  },
  {
    image: "/images/bus-trip.jpg",
    title: "Fun Field Trips",
    subtitle: "Learning beyond the classroom walls",
  },
  {
    image: "/images/rain-day.jpg",
    title: "Theme-Based Activities",
    subtitle: "Making every day a celebration of learning",
  },
];

const HeroRoot = styled(Box)({
  position: "relative",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  overflow: "hidden",
  background: "linear-gradient(135deg, #FFF8F0 0%, #FFFFFF 50%, #FFF0E0 100%)",
});

const BlobDecor = styled(Box)<{ color: string; top?: string; left?: string; right?: string; bottom?: string }>(
  ({ color, top, left, right, bottom }) => ({
    position: "absolute",
    width: 300,
    height: 300,
    borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
    background: color,
    filter: "blur(60px)",
    opacity: 0.15,
    top,
    left,
    right,
    bottom,
    animation: "blob 7s ease-in-out infinite",
  })
);

const GradientText = styled("span")<{ gradient: string }>(({ gradient }) => ({
  background: gradient,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
}));

const StatBox = styled(Box)({
  textAlign: "center",
});

const ImageSlide = styled(Box)({
  position: "relative",
  borderRadius: 24,
  overflow: "hidden",
  height: 420,
  "& img": {
    objectFit: "cover",
  },
});

const SlideOverlay = styled(Box)({
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
  padding: "40px 24px 24px",
  color: "#fff",
});

const WhatsAppBtn = styled(Button)({
  background: "#25D366",
  color: "#fff",
  fontWeight: 700,
  padding: "14px 32px",
  borderRadius: 50,
  fontSize: "1.05rem",
  boxShadow: "0 4px 15px rgba(37,211,102,0.3)",
  "&:hover": {
    background: "#1fb855",
    boxShadow: "0 6px 20px rgba(37,211,102,0.4)",
    transform: "translateY(-2px)",
  },
  transition: "all 0.3s",
});

const LearnMoreBtn = styled(Button)(({ theme }) => ({
  background: "#fff",
  color: theme.palette.text.primary,
  fontWeight: 600,
  padding: "14px 32px",
  borderRadius: 50,
  fontSize: "1.05rem",
  border: "1px solid #e5e7eb",
  boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
  "&:hover": {
    background: "#f9fafb",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    transform: "translateY(-1px)",
  },
  transition: "all 0.3s",
}));

export default function HeroSection({ onEnquireClick }: { onEnquireClick?: () => void }) {
  return (
    <HeroRoot id="home">
      <BlobDecor color="#FF6B35" top="80px" left="40px" />
      <BlobDecor color="#4ECDC4" top="160px" right="40px" />
      <BlobDecor color="#FFE66D" bottom="-40px" left="50%" />

      <Container maxWidth="lg" sx={{ position: "relative", pt: { xs: 12, md: 14 }, pb: { xs: 8, md: 10 } }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
            gap: 6,
            alignItems: "center",
          }}
        >
          {/* Text */}
          <Box>
            <Chip
              label="🌱 Admissions Open 2026-27"
              sx={{
                bgcolor: "rgba(255,107,53,0.1)",
                color: "primary.main",
                fontWeight: 600,
                fontSize: "0.85rem",
                mb: 3,
                height: 36,
              }}
            />

            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.8rem", sm: "3.5rem", lg: "4.2rem" },
                mb: 3,
              }}
            >
              Where{" "}
              <GradientText gradient="linear-gradient(135deg, #FF6B35, #EC4899)">
                Little Dreams
              </GradientText>{" "}
              Begin to{" "}
              <GradientText gradient="linear-gradient(135deg, #4ECDC4, #38BDF8)">
                Bloom
              </GradientText>
            </Typography>

            <Typography
              sx={{
                color: "text.secondary",
                fontSize: { xs: "1.05rem", sm: "1.15rem" },
                lineHeight: 1.8,
                maxWidth: 520,
                mb: 4,
              }}
            >
              At Prakruthi Pre School, we nurture curiosity, creativity, and
              confidence in every child through nature-inspired, play-based
              learning.
            </Typography>

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 5 }}>
              <WhatsAppBtn onClick={onEnquireClick} startIcon={<FaWhatsapp />}>
                Enquire Now
              </WhatsAppBtn>
              <LearnMoreBtn href="#about" endIcon={<FaArrowDown style={{ fontSize: 14 }} />}>
                Learn More
              </LearnMoreBtn>
            </Box>

            {/* Stats */}
            <Box sx={{ display: "flex", gap: { xs: 4, sm: 6 } }}>
              {[
                { num: "500+", label: "Happy Students" },
                { num: "15+", label: "Years of Trust" },
                { num: "50+", label: "Expert Teachers" },
              ].map((s) => (
                <StatBox key={s.label}>
                  <Typography sx={{ fontSize: "1.6rem", fontWeight: 800, color: "primary.main" }}>
                    {s.num}
                  </Typography>
                  <Typography sx={{ fontSize: "0.8rem", color: "text.secondary" }}>
                    {s.label}
                  </Typography>
                </StatBox>
              ))}
            </Box>
          </Box>

          {/* Photo Carousel */}
          <Box sx={{ display: { xs: "none", lg: "block" } }}>
            <Swiper
              modules={[Autoplay, EffectFade, Pagination]}
              effect="fade"
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              loop
              style={{ borderRadius: 24, overflow: "hidden" }}
            >
              {heroSlides.map((slide, i) => (
                <SwiperSlide key={i}>
                  <ImageSlide>
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority={i === 0}
                    />
                    <SlideOverlay>
                      <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5 }}>
                        {slide.title}
                      </Typography>
                      <Typography sx={{ opacity: 0.85 }}>
                        {slide.subtitle}
                      </Typography>
                    </SlideOverlay>
                  </ImageSlide>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>

          {/* Mobile Hero Image */}
          <Box
            sx={{
              display: { xs: "block", lg: "none" },
              borderRadius: 4,
              overflow: "hidden",
              position: "relative",
              height: 250,
              boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
            }}
          >
            <Image
              src="/images/campus-front.jpg"
              alt="Prakruthi Pre School Campus"
              fill
              sizes="100vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </Box>
        </Box>
      </Container>
    </HeroRoot>
  );
}
