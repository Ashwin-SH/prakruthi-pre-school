"use client";

import { useState } from "react";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import { Box, Typography, Button, Container, Chip, Modal, IconButton } from "@mui/material";
import {
  FaArrowDown,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
} from "react-icons/fa";
import { whatsappLink } from "@/lib/contact";

const collagePhotos = [
  { image: "/images/school-collage.jpg", alt: "Life at Prakruthi Pre School", w: 786, h: 1108, featured: true },
  { image: "/images/classroom.jpg", alt: "Engaging classrooms", w: 786, h: 590 },
  { image: "/images/art-craft.jpg", alt: "Art & craft activities", w: 786, h: 355 },
  { image: "/images/gardening.jpg", alt: "Nature & gardening", w: 786, h: 355 },
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

const CollageTile = styled(Box)({
  position: "relative",
  borderRadius: 20,
  overflow: "hidden",
  boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
  "& img": {
    objectFit: "cover",
    transition: "transform 0.5s ease",
  },
  "&:hover img": {
    transform: "scale(1.08)",
  },
});

const EnquireBtn = styled(Button)(({ theme }) => ({
  background: theme.palette.primary.main,
  color: "#fff",
  fontWeight: 700,
  padding: "14px 32px",
  borderRadius: 50,
  fontSize: "1.05rem",
  boxShadow: "0 4px 15px rgba(255,107,53,0.35)",
  "&:hover": {
    background: theme.palette.primary.dark,
    boxShadow: "0 6px 20px rgba(255,107,53,0.45)",
    transform: "translateY(-2px)",
  },
  transition: "all 0.3s",
}));

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

/* ---- Hanging corner banners ---- */
const HangerAnchor = styled(Box)({
  position: "absolute",
  top: 0,
  zIndex: 2,
  pointerEvents: "none",
});

const HangerDrop = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  animation: "hangDrop 1.1s cubic-bezier(0.22, 1, 0.36, 1) both",
});

const HangerPivot = styled(Box)({
  transformOrigin: "top center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const HangStrings = styled("svg")({
  display: "block",
  overflow: "visible",
});

const Board = styled("a")({
  position: "relative",
  display: "block",
  boxSizing: "border-box",
  width: 172,
  marginTop: -3,
  textAlign: "center",
  textDecoration: "none",
  background: "linear-gradient(180deg, #FFFDFA 0%, #FFF4E8 100%)",
  border: "1px solid rgba(255,107,53,0.30)",
  borderRadius: 18,
  padding: "12px 18px 14px",
  boxShadow: "0 16px 32px rgba(180,90,40,0.18)",
});

// Academic session shown on the hanging banners. Rolls over on Jan 1
// (e.g. any date in 2026 → "2026-2027"). Adjust the rule if your
// admission cycle should flip at a different month.
function getAcademicYear() {
  const startYear = new Date().getFullYear();
  return `${startYear}-${startYear + 1}`;
}

export default function HeroSection({ onEnquireClick }: { onEnquireClick?: () => void }) {
  const academicYear = getAcademicYear();
  const admissionsWaLink = whatsappLink(
    `Hi, I would like to know more about admissions for ${academicYear} at Prakruthi Pre School`
  );
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const showPrev = () =>
    setLightboxIndex((p) =>
      p === null ? p : (p + collagePhotos.length - 1) % collagePhotos.length
    );
  const showNext = () =>
    setLightboxIndex((p) => (p === null ? p : (p + 1) % collagePhotos.length));

  return (
    <HeroRoot id="home">
      <BlobDecor color="#FF6B35" top="80px" left="40px" />
      <BlobDecor color="#4ECDC4" top="160px" right="40px" />
      <BlobDecor color="#FFE66D" bottom="-40px" left="50%" />

      {/* Hanging admission banner — drops in from the top-left corner */}
      {(["left"] as const).map((side, idx) => (
        <HangerAnchor
          key={side}
          className="corner-hanger"
          sx={{
            // mobile: small, hangs from the top-right; desktop: full size, top-left
            top: { xs: 40, sm: 48, md: 0 },
            left: { xs: "auto", md: 24, lg: 36 },
            right: { xs: 8, sm: 16, md: "auto" },
            transformOrigin: { xs: "top right", md: "top left" },
            transform: {
              xs: "scale(0.55)",
              sm: "scale(0.66)",
              md: "scale(0.9)",
              lg: "scale(1)",
            },
          }}
        >
          <HangerDrop sx={{ animationDelay: idx === 0 ? "0.25s" : "0.45s" }}>
            <HangerPivot
              sx={{
                animation: {
                  xs: "swayRight 4.5s ease-in-out 1.3s infinite both",
                  md: "swayLeft 4.5s ease-in-out 1.3s infinite both",
                },
              }}
            >
              {/* Ring + twin strings */}
              <HangStrings width={172} height={120} viewBox="0 0 172 132">
                <circle cx={86} cy={8} r={5} fill="#fff" stroke="#FF6B35" strokeWidth={2} />
                <line x1={86} y1={13} x2={20} y2={130} stroke="#D9A07F" strokeWidth={1.6} strokeLinecap="round" />
                <line x1={86} y1={13} x2={152} y2={130} stroke="#D9A07F" strokeWidth={1.6} strokeLinecap="round" />
              </HangStrings>

              {/* Elegant signboard — links to WhatsApp */}
              <Board
                href={admissionsWaLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Enquire on WhatsApp about admissions for ${academicYear}`}
                sx={{
                  pointerEvents: "auto",
                  cursor: "pointer",
                  transition: "transform 0.25s, box-shadow 0.25s",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: "0 20px 38px rgba(180,90,40,0.26)",
                  },
                  "&:active": { transform: "translateY(0)" },
                }}
              >
                <Box component="span" sx={{ fontSize: 14, lineHeight: 1, display: "block", mb: 0.5 }}>
                  🌿
                </Box>
                <Typography
                  sx={{
                    fontSize: 8.5,
                    fontWeight: 700,
                    letterSpacing: "1.6px",
                    textTransform: "uppercase",
                    color: "#B0673E",
                    lineHeight: 1,
                  }}
                >
                  Admissions Open
                </Typography>
                <Box
                  sx={{
                    width: 30,
                    height: 2,
                    borderRadius: 2,
                    mx: "auto",
                    my: 0.7,
                    background: "linear-gradient(90deg, #FF6B35, #EC4899)",
                  }}
                />
                <Typography sx={{ fontSize: 18, fontWeight: 800, lineHeight: 1.1 }}>
                  <GradientText gradient="linear-gradient(135deg, #FF6B35, #EC4899)">
                    {academicYear.replace("-", "–")}
                  </GradientText>
                </Typography>
              </Board>
            </HangerPivot>
          </HangerDrop>
        </HangerAnchor>
      ))}

      <Container maxWidth="lg" sx={{ position: "relative", pt: { xs: 12, md: 14 }, pb: { xs: 4, md: 7 } }}>
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
                position: "relative",
                zIndex: 1,
                bgcolor: "rgba(255,107,53,0.1)",
                color: "primary.main",
                fontWeight: 600,
                fontSize: "0.85rem",
                mb: 3,
                height: 36,
              }}
            />

            <Box sx={{ position: "relative", mb: 3 }}>
              {/* School photo backdrop behind the heading */}
              <Box
                aria-hidden
                sx={{
                  position: "absolute",
                  inset: { xs: "0px -8px -10px", lg: "0px -30px -40px" },
                  pointerEvents: "none",
                  zIndex: 0,
                  overflow: "hidden",
                  borderRadius: { xs: 4, lg: 28 },
                  boxShadow: "inset 0 0 60px 20px rgba(255,248,240,0.6)",
                  maskImage: {
                    xs: "linear-gradient(180deg, transparent 0%, #000 18%, #000 82%, transparent 100%)",
                    lg: "radial-gradient(ellipse at center, #000 52%, transparent 82%)",
                  },
                  WebkitMaskImage: {
                    xs: "linear-gradient(180deg, transparent 0%, #000 18%, #000 82%, transparent 100%)",
                    lg: "radial-gradient(ellipse at center, #000 52%, transparent 82%)",
                  },
                }}
              >
                <Image
                  src="/images/hero-school.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  style={{ objectFit: "cover", opacity: 0.5 }}
                />
                {/* Warm veil — keeps the text readable while letting the photo show */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(115deg, rgba(255,248,240,0.82) 0%, rgba(255,246,238,0.62) 50%, rgba(255,240,224,0.45) 100%)",
                  }}
                />
              </Box>

              <Typography
                variant="h1"
                sx={{
                  position: "relative",
                  zIndex: 1,
                  color: "#16213E",
                  fontSize: { xs: "2.1rem", sm: "3.2rem", lg: "4.2rem" },
                  lineHeight: { xs: 1.2, sm: 1.15 },
                  textShadow: "0 1px 3px rgba(0,0,0,0.16)",
                }}
              >
                Where{" "}
                <GradientText
                  gradient="linear-gradient(135deg, #FF5722, #E91E63)"
                  sx={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.22))" }}
                >
                  Little Dreams
                </GradientText>{" "}
                Begin to{" "}
                <GradientText
                  gradient="linear-gradient(135deg, #00B5AC, #2196F3)"
                  sx={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.22))" }}
                >
                  Bloom
                </GradientText>
              </Typography>
            </Box>

            <Typography
              sx={{
                color: "text.secondary",
                fontSize: { xs: "0.98rem", sm: "1.15rem" },
                lineHeight: { xs: 1.7, sm: 1.8 },
                maxWidth: 520,
                mt: "5px",
                mb: 4,
              }}
            >
              At Prakruthi Pre School, we nurture curiosity, creativity, and
              confidence in every child through nature-inspired, play-based
              learning.
            </Typography>

            {/* Stats */}
            <Box sx={{ display: "flex", gap: { xs: 4, sm: 6 }, mb: 5 }}>
              {[
                { num: "100+", label: "Happy Students" },
                { num: "3", label: "Years of Trust" },
                { num: "10+", label: "Expert Teachers" },
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

            <Box sx={{ display: "flex", flexWrap: "nowrap", gap: { xs: 1.5, sm: 2 } }}>
              <EnquireBtn
                onClick={onEnquireClick}
                sx={{
                  flex: { xs: 1, sm: "0 0 auto" },
                  px: { xs: 2, sm: 4 },
                  fontSize: { xs: "0.9rem", sm: "1.05rem" },
                  whiteSpace: "nowrap",
                }}
              >
                Enquire Now
              </EnquireBtn>
              <LearnMoreBtn
                href="#about"
                endIcon={<FaArrowDown style={{ fontSize: 14 }} />}
                sx={{
                  flex: { xs: 1, sm: "0 0 auto" },
                  px: { xs: 2, sm: 4 },
                  fontSize: { xs: "0.9rem", sm: "1.05rem" },
                  whiteSpace: "nowrap",
                }}
              >
                Learn More
              </LearnMoreBtn>
            </Box>
          </Box>

          {/* Photo Collage */}
          <Box sx={{ display: "block" }}>
            {/* Top row: featured + two stacked */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "1.25fr 1fr",
                gridTemplateRows: {
                  xs: "repeat(2, 110px)",
                  sm: "repeat(2, 150px)",
                  lg: "repeat(2, 150px)",
                },
                gap: { xs: 1.5, lg: 2 },
              }}
            >
              {[0, 1, 2].map((i) => (
                <CollageTile
                  key={collagePhotos[i].image}
                  onClick={() => openLightbox(i)}
                  sx={{
                    cursor: "pointer",
                    ...(collagePhotos[i].featured
                      ? { gridColumn: "1", gridRow: "1 / span 2" }
                      : { gridColumn: "2" }),
                  }}
                >
                  <Image
                    src={collagePhotos[i].image}
                    alt={collagePhotos[i].alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={collagePhotos[i].featured}
                  />
                </CollageTile>
              ))}
            </Box>

            {/* Full-width fourth image — shown complete, no cropping */}
            <CollageTile
              onClick={() => openLightbox(3)}
              sx={{ mt: { xs: 1.5, lg: 2 }, cursor: "pointer" }}
            >
              <Image
                src={collagePhotos[3].image}
                alt={collagePhotos[3].alt}
                width={786}
                height={355}
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </CollageTile>
          </Box>
        </Box>
      </Container>

      {/* Lightbox — frosted overlay, the page stays visible (blurred & dimmed) */}
      <Modal open={lightboxIndex !== null} onClose={closeLightbox} hideBackdrop>
        <Box
          onClick={closeLightbox}
          sx={{
            position: "fixed",
            inset: 0,
            bgcolor: "rgba(12,14,22,0.45)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            animation: "fadeIn 0.3s ease",
          }}
        >
          <IconButton
            onClick={closeLightbox}
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              color: "#fff",
              bgcolor: "rgba(0,0,0,0.35)",
              "&:hover": { bgcolor: "rgba(0,0,0,0.55)" },
            }}
            aria-label="Close"
          >
            <FaTimes />
          </IconButton>

          <IconButton
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            sx={{
              position: "absolute",
              left: { xs: 8, sm: 24 },
              color: "#fff",
              bgcolor: "rgba(0,0,0,0.35)",
              "&:hover": { bgcolor: "rgba(0,0,0,0.55)" },
            }}
            aria-label="Previous image"
          >
            <FaChevronLeft />
          </IconButton>

          <Box onClick={(e) => e.stopPropagation()} sx={{ lineHeight: 0 }}>
            {lightboxIndex !== null && (
              <Image
                src={collagePhotos[lightboxIndex].image}
                alt={collagePhotos[lightboxIndex].alt}
                width={collagePhotos[lightboxIndex].w}
                height={collagePhotos[lightboxIndex].h}
                sizes="90vw"
                style={{
                  width: `min(90vw, calc(90vh * ${collagePhotos[lightboxIndex].w} / ${collagePhotos[lightboxIndex].h}))`,
                  height: "auto",
                  borderRadius: 18,
                  boxShadow: "0 30px 80px rgba(0,0,0,0.45)",
                  display: "block",
                }}
              />
            )}
          </Box>

          <IconButton
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            sx={{
              position: "absolute",
              right: { xs: 8, sm: 24 },
              color: "#fff",
              bgcolor: "rgba(0,0,0,0.35)",
              "&:hover": { bgcolor: "rgba(0,0,0,0.55)" },
            }}
            aria-label="Next image"
          >
            <FaChevronRight />
          </IconButton>
        </Box>
      </Modal>
    </HeroRoot>
  );
}
