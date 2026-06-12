"use client";

import { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  TextField,
  MenuItem,
  Button,
  Alert,
  IconButton,
} from "@mui/material";
import { FaPaperPlane, FaTimes } from "react-icons/fa";

const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    borderRadius: 12,
    background: "#fff",
    "&:hover fieldset": { borderColor: "#FF6B35" },
    "&.Mui-focused fieldset": { borderColor: "#FF6B35" },
  },
  "& .MuiInputLabel-root.Mui-focused": { color: "#FF6B35" },
});

const SubmitButton = styled(Button)({
  background: "linear-gradient(135deg, #FF6B35, #EC4899)",
  color: "#fff",
  fontWeight: 700,
  padding: "14px 32px",
  borderRadius: 12,
  fontSize: "1.05rem",
  boxShadow: "0 4px 15px rgba(255,107,53,0.3)",
  "&:hover": {
    background: "linear-gradient(135deg, #E55A2B, #EC4899)",
    boxShadow: "0 6px 20px rgba(255,107,53,0.4)",
  },
  "&:disabled": { background: "#d1d5db", boxShadow: "none" },
  transition: "all 0.3s",
});

interface EnquiryModalProps {
  open: boolean;
  onClose: () => void;
  preselectedProgram?: string;
}

export default function EnquiryModal({ open, onClose, preselectedProgram }: EnquiryModalProps) {
  const [form, setForm] = useState({
    childName: "",
    childAge: "",
    parentName: "",
    phone: "",
    email: "",
    program: preselectedProgram || "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ childName: "", childAge: "", parentName: "", phone: "", email: "", program: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleClose = () => {
    setStatus("idle");
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: { xs: 3, sm: 4 },
          overflow: "hidden",
          m: { xs: "10px", sm: 3 },
          width: { xs: "calc(100% - 20px)", sm: "100%" },
          maxWidth: { xs: "calc(100% - 20px)", sm: 600 },
          maxHeight: { xs: "calc(100% - 20px)", sm: "90vh" },
        },
      }}
    >
      {/* Header */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #FF6B35, #EC4899)",
          p: { xs: 2, sm: 3 },
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography
            variant="h5"
            sx={{ color: "#fff", fontWeight: 700, fontSize: { xs: "1.2rem", sm: "1.5rem" } }}
          >
            Enroll Your Little One
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.8)", fontSize: { xs: "0.78rem", sm: "0.9rem" }, mt: 0.5 }}>
            Fill in the details and we&apos;ll get back to you soon!
          </Typography>
        </Box>
        <IconButton onClick={handleClose} sx={{ color: "#fff", flexShrink: 0 }}>
          <FaTimes />
        </IconButton>
      </Box>

      <DialogContent sx={{ p: { xs: 2, sm: 3.5 }, bgcolor: "#FFF8F0" }}>
        {status === "success" ? (
          <Box sx={{ textAlign: "center", py: 4 }}>
            <Box sx={{ fontSize: { xs: "3rem", sm: "4rem" }, mb: 2 }}>🎉</Box>
            <Typography variant="h5" sx={{ color: "#15803d", fontWeight: 700, mb: 1, fontSize: { xs: "1.3rem", sm: "1.5rem" } }}>
              Thank You!
            </Typography>
            <Typography sx={{ color: "#16a34a", mb: 3, fontSize: { xs: "0.9rem", sm: "1rem" } }}>
              Your enquiry has been submitted. We&apos;ll contact you soon!
            </Typography>
            <Button
              onClick={handleClose}
              sx={{
                bgcolor: "primary.main",
                color: "#fff",
                fontWeight: 600,
                borderRadius: 50,
                px: 4,
                py: 1.5,
                "&:hover": { bgcolor: "primary.dark" },
              }}
            >
              Close
            </Button>
          </Box>
        ) : (
          <Box component="form" onSubmit={handleSubmit}>
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2, mb: 2 }}>
              <StyledTextField
                label="Child's Full Name"
                name="childName"
                value={form.childName}
                onChange={handleChange}
                required
                fullWidth
                size="small"
              />
              <StyledTextField
                label="Child's Age"
                name="childAge"
                value={form.childAge}
                onChange={handleChange}
                required
                fullWidth
                size="small"
                placeholder="e.g., 2 years 3 months"
              />
              <StyledTextField
                label="Parent / Guardian Name"
                name="parentName"
                value={form.parentName}
                onChange={handleChange}
                required
                fullWidth
                size="small"
              />
              <StyledTextField
                label="Phone Number"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                required
                fullWidth
                size="small"
              />
              <StyledTextField
                label="Email Address (optional)"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                fullWidth
                size="small"
              />
              <StyledTextField
                label="Select Program"
                name="program"
                value={form.program}
                onChange={handleChange}
                required
                fullWidth
                select
                size="small"
              >
                <MenuItem value="Kindergarten (2 - 3 years)">Kindergarten (2 - 3 years)</MenuItem>
                <MenuItem value="Nursery (3 - 4 years)">Nursery (3 - 4 years)</MenuItem>
                <MenuItem value="LKG (4 - 5 years)">LKG (4 - 5 years)</MenuItem>
                <MenuItem value="UKG (5 - 6 years)">UKG (5 - 6 years)</MenuItem>
              </StyledTextField>
            </Box>
            <StyledTextField
              label="Additional Message (optional)"
              name="message"
              value={form.message}
              onChange={handleChange}
              fullWidth
              multiline
              rows={2}
              size="small"
              sx={{ mb: 2 }}
            />

            {status === "error" && (
              <Alert severity="error" sx={{ mb: 2, borderRadius: 3 }}>
                Something went wrong. Please try again.
              </Alert>
            )}

            <SubmitButton
              type="submit"
              fullWidth
              disabled={status === "loading"}
              startIcon={status === "loading" ? undefined : <FaPaperPlane />}
              sx={{ fontSize: { xs: "0.95rem", sm: "1.05rem" }, py: { xs: 1.25, sm: "14px" } }}
            >
              {status === "loading" ? "Submitting..." : "Submit Enquiry"}
            </SubmitButton>
          </Box>
        )}
      </DialogContent>
    </Dialog>
  );
}
