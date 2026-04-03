"use client";

import { useState } from "react";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import {
  Box,
  Typography,
  Container,
  Chip,
  Dialog,
  IconButton,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type GalleryItem = {
  label: string;
  gradient?: string;
  emoji?: string;
  image?: string;
};

const galleryItems: GalleryItem[] = [
  { image: "/images/school-group.jpg", label: "Our Prakruthi Family" },
  { image: "/images/christmas.jpg", label: "Christmas Celebration" },
  { image: "/images/field-trip.jpg", label: "Field Trip Adventures" },
  { image: "/images/gardening.jpg", label: "Gardening Activities" },
  { image: "/images/green-day.webp", label: "Green Day Celebration" },
  { image: "/images/rain-day.jpg", label: "Rain Day Theme" },
  { image: "/images/art-craft.jpg", label: "Art & Craft Time" },
  { image: "/images/school-fair.jpg", label: "School Fair" },
  { image: "/images/welcome-ceremony.jpg", label: "Welcome Ceremony" },
  { image: "/images/bus-trip.jpg", label: "School Bus Trip" },
  { image: "/images/parent-meeting.jpg", label: "Parent-Teacher Meeting" },
  { image: "/images/school-event.jpg", label: "School Events" },
];

const SectionRoot = styled(Box)({
  padding: "100px 0",
  background: "#FFF8F0",
});

const GalleryCard = styled(Box)<{ bg: string }>(({ bg }) => ({
  background: bg,
  borderRadius: 20,
  overflow: "hidden",
  cursor: "pointer",
  transition: "all 0.4s ease",
  "&:hover": {
    transform: "translateY(-6px) scale(1.02)",
    boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
  },
  "&:hover .emoji": {
    transform: "scale(1.3) rotate(5deg)",
  },
}));

const VideoCard = styled(Box)({
  borderRadius: 20,
  overflow: "hidden",
  boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
  "& iframe": {
    width: "100%",
    height: "100%",
    border: "none",
  },
});

export default function GallerySection() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <SectionRoot id="gallery">
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: "center", maxWidth: 700, mx: "auto", mb: 8 }}>
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

        {/* Gallery Carousel - Mobile */}
        <Box sx={{ display: { xs: "block", md: "none" }, mb: 4 }}>
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 2500 }}
            pagination={{ clickable: true }}
            loop
            spaceBetween={12}
            slidesPerView={1.3}
            centeredSlides
          >
            {galleryItems.map((item, i) => (
              <SwiperSlide key={i}>
                <GalleryCard bg={item.image ? "transparent" : item.gradient!} onClick={() => setLightbox(i)} sx={{ height: 220, position: "relative" }}>
                  {item.image ? (
                    <>
                      <Image src={item.image} alt={item.label} fill sizes="80vw" style={{ objectFit: "cover", borderRadius: 20 }} />
                      <Box sx={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(transparent, rgba(0,0,0,0.7))", p: 2, borderRadius: "0 0 20px 20px" }}>
                        <Typography sx={{ color: "#fff", fontWeight: 600 }}>{item.label}</Typography>
                      </Box>
                    </>
                  ) : (
                    <Box sx={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: "#fff" }}>
                      <Box className="emoji" sx={{ fontSize: "4rem", transition: "transform 0.4s", mb: 1 }}>{item.emoji}</Box>
                      <Typography sx={{ fontWeight: 600, opacity: 0.9 }}>{item.label}</Typography>
                    </Box>
                  )}
                </GalleryCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>

        {/* Gallery Grid - Desktop */}
        <Box
          sx={{
            display: { xs: "none", md: "grid" },
            gridTemplateColumns: "repeat(4, 1fr)",
            gridTemplateRows: "auto",
            gap: 2.5,
          }}
        >
          {galleryItems.map((item, i) => (
            <GalleryCard
              key={i}
              bg={item.image ? "transparent" : item.gradient!}
              onClick={() => setLightbox(i)}
              sx={{
                gridColumn: i === 0 || i === 4 ? "span 2" : "span 1",
                gridRow: i === 0 || i === 4 ? "span 2" : "span 1",
                height: i === 0 || i === 4 ? "auto" : 220,
                minHeight: i === 0 || i === 4 ? 340 : 220,
                position: "relative",
              }}
            >
              {item.image ? (
                <>
                  <Image src={item.image} alt={item.label} fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover", borderRadius: 20 }} />
                  <Box sx={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(transparent, rgba(0,0,0,0.7))", p: 2.5, borderRadius: "0 0 20px 20px", zIndex: 1 }}>
                    <Typography sx={{ color: "#fff", fontWeight: 700, fontSize: i === 0 || i === 4 ? "1.2rem" : "0.95rem" }}>
                      {item.label}
                    </Typography>
                  </Box>
                </>
              ) : (
                <Box sx={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: "#fff", p: 3 }}>
                  <Box className="emoji" sx={{ fontSize: i === 0 || i === 4 ? "6rem" : "3.5rem", transition: "transform 0.4s", mb: 1 }}>
                    {item.emoji}
                  </Box>
                  <Typography sx={{ fontWeight: 600, opacity: 0.9, fontSize: i === 0 || i === 4 ? "1.2rem" : "0.95rem" }}>
                    {item.label}
                  </Typography>
                </Box>
              )}
            </GalleryCard>
          ))}
        </Box>

        {/* Lightbox */}
        <Dialog
          open={lightbox !== null}
          onClose={() => setLightbox(null)}
          maxWidth="md"
          fullWidth
          PaperProps={{
            sx: {
              borderRadius: 4,
              overflow: "hidden",
              bgcolor: "transparent",
              boxShadow: "none",
            },
          }}
        >
          {lightbox !== null && (
            <Box sx={{ position: "relative" }}>
              {galleryItems[lightbox].image ? (
                <Box sx={{ position: "relative", height: { xs: 300, sm: 450 }, borderRadius: 4, overflow: "hidden" }}>
                  <Image
                    src={galleryItems[lightbox].image!}
                    alt={galleryItems[lightbox].label}
                    fill
                    sizes="90vw"
                    style={{ objectFit: "cover" }}
                  />
                  <Box sx={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(transparent, rgba(0,0,0,0.7))", p: 3 }}>
                    <Typography variant="h4" sx={{ color: "#fff" }}>
                      {galleryItems[lightbox].label}
                    </Typography>
                  </Box>
                </Box>
              ) : (
                <Box
                  sx={{
                    background: galleryItems[lightbox].gradient,
                    height: { xs: 300, sm: 450 },
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    borderRadius: 4,
                  }}
                >
                  <Box sx={{ fontSize: { xs: "5rem", sm: "8rem" }, mb: 2 }}>
                    {galleryItems[lightbox].emoji}
                  </Box>
                  <Typography variant="h4" sx={{ color: "#fff" }}>
                    {galleryItems[lightbox].label}
                  </Typography>
                </Box>
              )}
              <IconButton
                onClick={() => setLightbox(null)}
                sx={{
                  position: "absolute",
                  top: 12,
                  right: 12,
                  bgcolor: "rgba(0,0,0,0.4)",
                  color: "#fff",
                  "&:hover": { bgcolor: "rgba(0,0,0,0.6)" },
                }}
              >
                <FaTimes />
              </IconButton>
              <IconButton
                onClick={() => setLightbox((lightbox - 1 + galleryItems.length) % galleryItems.length)}
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: 12,
                  transform: "translateY(-50%)",
                  bgcolor: "rgba(0,0,0,0.4)",
                  color: "#fff",
                  "&:hover": { bgcolor: "rgba(0,0,0,0.6)" },
                }}
              >
                <FaChevronLeft />
              </IconButton>
              <IconButton
                onClick={() => setLightbox((lightbox + 1) % galleryItems.length)}
                sx={{
                  position: "absolute",
                  top: "50%",
                  right: 12,
                  transform: "translateY(-50%)",
                  bgcolor: "rgba(0,0,0,0.4)",
                  color: "#fff",
                  "&:hover": { bgcolor: "rgba(0,0,0,0.6)" },
                }}
              >
                <FaChevronRight />
              </IconButton>
            </Box>
          )}
        </Dialog>

        {/* Video Section */}
        <Box sx={{ mt: 10 }}>
          <Typography variant="h4" sx={{ textAlign: "center", mb: 4 }}>
            Watch Our Little Stars in Action
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: 3,
            }}
          >
            <VideoCard sx={{ aspectRatio: "16/9" }}>
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="School Activities"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </VideoCard>
            <VideoCard sx={{ aspectRatio: "16/9" }}>
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Annual Day"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </VideoCard>
          </Box>
          <Typography
            sx={{ textAlign: "center", color: "#ccc", fontSize: "0.85rem", mt: 2 }}
          >
            Replace these with your school&apos;s actual YouTube video links
          </Typography>
        </Box>
      </Container>
    </SectionRoot>
  );
}
