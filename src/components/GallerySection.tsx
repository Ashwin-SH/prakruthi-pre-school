"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import {
  Box,
  Typography,
  Container,
  Chip,
  Modal,
  IconButton,
} from "@mui/material";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

type GalleryItem = {
  label: string;
  image: string;
  w: number;
  h: number;
};

const galleryItems: GalleryItem[] = [
  { image: "/images/krishnashtami-day.jpg", label: "Krishnashtami Day", w: 1280, h: 960 },
  { image: "/images/fancy-dress-day.jpg", label: "Fancy Dress Day", w: 1280, h: 960 },
  { image: "/images/festival-celebration.jpg", label: "Festival Celebrations", w: 1600, h: 1200 },
  { image: "/images/independence-day.jpg", label: "Independence Day", w: 1600, h: 1200 },
  { image: "/images/school-group.jpg", label: "Our Prakruthi Family", w: 966, h: 960 },
  { image: "/images/christmas.jpg", label: "Christmas Celebration", w: 786, h: 590 },
  { image: "/images/field-trip.jpg", label: "Field Trip Adventures", w: 2304, h: 1040 },
  { image: "/images/gardening.jpg", label: "Gardening Activities", w: 786, h: 355 },
  { image: "/images/green-day.webp", label: "Green Day Celebration", w: 1728, h: 912 },
  { image: "/images/rain-day.jpg", label: "Rain Day Theme", w: 786, h: 1286 },
  { image: "/images/art-craft.jpg", label: "Art & Craft Time", w: 786, h: 355 },
  { image: "/images/school-fair.jpg", label: "School Fair", w: 786, h: 590 },
  { image: "/images/welcome-ceremony.jpg", label: "Welcome Ceremony", w: 786, h: 590 },
  { image: "/images/bus-trip.jpg", label: "School Bus Trip", w: 786, h: 590 },
  { image: "/images/parent-meeting.jpg", label: "Parent-Teacher Meeting", w: 786, h: 590 },
  { image: "/images/school-event.jpg", label: "School Events", w: 786, h: 590 },
];

const SectionRoot = styled(Box)({
  padding: "100px 0",
  background: "#FFF8F0",
  overflow: "hidden",
});

const GalleryCard = styled(Box)({
  position: "relative",
  flexShrink: 0,
  borderRadius: 20,
  overflow: "hidden",
  cursor: "pointer",
  boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "scale(1.04)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.18)",
  },
});

export default function GallerySection() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [inView, setInView] = useState(true);
  const trackRef = useRef<HTMLDivElement | null>(null);

  // Only scroll while the section is on screen.
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const ob = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0 }
    );
    ob.observe(el);
    return () => ob.disconnect();
  }, []);

  // Pause when a photo is open (lightbox) or when the section is off screen.
  const scrolling = inView && lightbox === null;

  return (
    <SectionRoot id="gallery" sx={{ py: { xs: 5, md: "100px" }, mt: { xs: "-20px", md: 0 } }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: "center", maxWidth: 700, mx: "auto", mb: { xs: 4, md: 7 } }}>
          <Chip
            label="Our Gallery"
            sx={{
              bgcolor: "rgba(236,72,153,0.1)",
              color: "#EC4899",
              fontWeight: 600,
              mb: 2,
            }}
          />
          <Typography variant="h2" sx={{ fontSize: { xs: "2rem", sm: "2.8rem" }, mb: 2 }}>
            Moments of{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              Joy
            </Box>
          </Typography>
          <Typography sx={{ color: "text.secondary", fontSize: "1.1rem" }}>
            A glimpse into the colorful world of learning and fun at Prakruthi
            Pre School.
          </Typography>
        </Box>
      </Container>

      {/* Continuous right-to-left scroller (full-bleed) */}
      <Box ref={trackRef} sx={{ overflow: "hidden", py: 2 }}>
        <Box
          className="gallery-marquee"
          style={{ animationPlayState: scrolling ? "running" : "paused" }}
          sx={{ display: "flex", gap: 2.5, width: "max-content", px: 1.5 }}
        >
          {[...galleryItems, ...galleryItems].map((item, i) => {
            const real = i % galleryItems.length;
            return (
              <GalleryCard
                key={i}
                onClick={() => setLightbox(real)}
                aria-label={`View ${item.label}`}
                sx={{ width: { xs: 210, md: 300 }, height: { xs: 165, md: 230 } }}
              >
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  sizes="(max-width: 768px) 60vw, 300px"
                  style={{ objectFit: "cover" }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
                    p: 1.5,
                  }}
                >
                  <Typography sx={{ color: "#fff", fontWeight: 600, fontSize: { xs: "0.8rem", md: "0.95rem" } }}>
                    {item.label}
                  </Typography>
                </Box>
              </GalleryCard>
            );
          })}
        </Box>
      </Box>

      {/* Lightbox — frosted overlay (page blurred behind), pauses the scroll */}
      <Modal open={lightbox !== null} onClose={() => setLightbox(null)} hideBackdrop>
        <Box
          onClick={() => setLightbox(null)}
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
            onClick={() => setLightbox(null)}
            aria-label="Close"
            size="small"
            sx={{
              position: "absolute",
              top: 14,
              right: 14,
              color: "#fff",
              bgcolor: "rgba(0,0,0,0.35)",
              "&:hover": { bgcolor: "rgba(0,0,0,0.55)" },
            }}
          >
            <FaTimes style={{ fontSize: 14 }} />
          </IconButton>

          <IconButton
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((p) => (p === null ? p : (p - 1 + galleryItems.length) % galleryItems.length));
            }}
            aria-label="Previous"
            sx={{
              position: "absolute",
              left: { xs: 8, sm: 24 },
              color: "#fff",
              bgcolor: "rgba(0,0,0,0.35)",
              "&:hover": { bgcolor: "rgba(0,0,0,0.55)" },
            }}
          >
            <FaChevronLeft />
          </IconButton>

          <Box
            onClick={(e) => e.stopPropagation()}
            sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1.5 }}
          >
            {lightbox !== null && (
              <>
                <Image
                  src={galleryItems[lightbox].image}
                  alt={galleryItems[lightbox].label}
                  width={galleryItems[lightbox].w}
                  height={galleryItems[lightbox].h}
                  sizes="90vw"
                  style={{
                    width: `min(90vw, calc(80vh * ${galleryItems[lightbox].w} / ${galleryItems[lightbox].h}))`,
                    height: "auto",
                    borderRadius: 18,
                    boxShadow: "0 30px 80px rgba(0,0,0,0.45)",
                    display: "block",
                  }}
                />
                <Typography
                  sx={{
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: { xs: "0.95rem", sm: "1.15rem" },
                    textShadow: "0 1px 6px rgba(0,0,0,0.5)",
                    textAlign: "center",
                  }}
                >
                  {galleryItems[lightbox].label}
                </Typography>
              </>
            )}
          </Box>

          <IconButton
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((p) => (p === null ? p : (p + 1) % galleryItems.length));
            }}
            aria-label="Next"
            sx={{
              position: "absolute",
              right: { xs: 8, sm: 24 },
              color: "#fff",
              bgcolor: "rgba(0,0,0,0.35)",
              "&:hover": { bgcolor: "rgba(0,0,0,0.55)" },
            }}
          >
            <FaChevronRight />
          </IconButton>
        </Box>
      </Modal>
    </SectionRoot>
  );
}
