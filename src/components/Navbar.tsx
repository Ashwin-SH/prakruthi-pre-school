"use client";

import { useState } from "react";
import Link from "next/link";
import { styled } from "@mui/material/styles";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Button,
  Typography,
} from "@mui/material";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#programs", label: "Programs" },
  { href: "#admission", label: "Admission" },
  { href: "#contact", label: "Contact" },
];

const StyledAppBar = styled(AppBar)({
  background: "rgba(255, 255, 255, 0.95)",
  backdropFilter: "blur(12px)",
  boxShadow: "0 2px 20px rgba(0,0,0,0.06)",
});

const NavLink = styled("a")(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: 500,
  fontSize: "0.95rem",
  textDecoration: "none",
  position: "relative",
  padding: "4px 0",
  transition: "color 0.3s",
  "&:hover": {
    color: theme.palette.primary.main,
  },
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: -2,
    left: 0,
    width: 0,
    height: 2,
    background: theme.palette.primary.main,
    borderRadius: 2,
    transition: "width 0.3s",
  },
  "&:hover::after": {
    width: "100%",
  },
}));

const EnrollButton = styled(Button)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.error.main})`,
  color: "#fff",
  fontWeight: 700,
  padding: "10px 28px",
  borderRadius: 50,
  boxShadow: "0 4px 15px rgba(255,107,53,0.3)",
  "&:hover": {
    background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.error.main})`,
    boxShadow: "0 6px 20px rgba(255,107,53,0.4)",
    transform: "translateY(-1px)",
  },
  transition: "all 0.3s",
}));

const LogoText = styled(Typography)(({ theme }) => ({
  fontSize: "1.4rem",
  fontWeight: 800,
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.error.main})`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  lineHeight: 1.2,
}));

const DrawerContent = styled(Box)({
  width: 280,
  height: "100%",
  display: "flex",
  flexDirection: "column",
});

export default function Navbar({ onEnrollClick }: { onEnrollClick?: () => void }) {
  const [open, setOpen] = useState(false);

  return (
    <StyledAppBar position="fixed">
      <Toolbar
        sx={{
          maxWidth: 1280,
          width: "100%",
          mx: "auto",
          px: { xs: 2, md: 4 },
          height: 70,
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
          <Box sx={{ fontSize: "2rem" }}>🌿</Box>
          <Box>
            <LogoText>Prakruthi</LogoText>
            <Typography
              sx={{ fontSize: "0.95rem", color: "text.secondary", fontWeight: 500, mt: -0.3 }}
            >
              Pre School
            </Typography>
          </Box>
        </Link>

        <Box sx={{ flexGrow: 1 }} />

        {/* Desktop Nav */}
        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 3.5 }}>
          {navLinks.map((l) => (
            <NavLink key={l.href} href={l.href}>
              {l.label}
            </NavLink>
          ))}
          <EnrollButton onClick={onEnrollClick}>Enroll Now</EnrollButton>
        </Box>

        {/* Mobile Toggle */}
        <IconButton
          sx={{ display: { md: "none" }, color: "text.primary" }}
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <FaBars />
        </IconButton>

        {/* Mobile Drawer */}
        <Drawer
          anchor="right"
          open={open}
          onClose={() => setOpen(false)}
          PaperProps={{ sx: { borderRadius: "20px 0 0 20px" } }}
        >
          <DrawerContent>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: 2, borderBottom: "1px solid #eee" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Box sx={{ fontSize: "1.5rem" }}>🌿</Box>
                <Box>
                  <LogoText sx={{ fontSize: "1.1rem", lineHeight: 1.1 }}>Prakruthi</LogoText>
                  <Typography sx={{ fontSize: "0.8rem", color: "text.secondary", fontWeight: 500, mt: -0.3 }}>
                    Pre School
                  </Typography>
                </Box>
              </Box>
              <IconButton onClick={() => setOpen(false)}>
                <FaTimes />
              </IconButton>
            </Box>
            <List sx={{ flex: 1, pt: 2 }}>
              {navLinks.map((l) => (
                <ListItem key={l.href} disablePadding>
                  <ListItemButton
                    href={l.href}
                    onClick={() => setOpen(false)}
                    sx={{
                      py: 1.5,
                      px: 3,
                      "&:hover": { bgcolor: "rgba(255,107,53,0.08)" },
                    }}
                  >
                    <ListItemText
                      primary={l.label}
                      primaryTypographyProps={{ fontWeight: 500, fontSize: "1.05rem" }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Box sx={{ p: 2 }}>
              <EnrollButton fullWidth onClick={() => { onEnrollClick?.(); setOpen(false); }}>
                Enroll Now
              </EnrollButton>
            </Box>
          </DrawerContent>
        </Drawer>
      </Toolbar>
    </StyledAppBar>
  );
}
