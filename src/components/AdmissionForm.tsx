"use client";

import { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Typography,
  Container,
  Chip,
  TextField,
  MenuItem,
  Button,
  Alert,
} from "@mui/material";
import { FaPaperPlane } from "react-icons/fa";

const SectionRoot = styled(Box)({
  padding: "100px 0",
  background: "#fff",
});

const FormCard = styled(Box)({
  background: "#FFF8F0",
  borderRadius: 24,
  padding: "40px",
  boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
  "@media (max-width: 600px)": {
    padding: "24px 16px",
  },
});

const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    borderRadius: 12,
    background: "#fff",
    "&:hover fieldset": {
      borderColor: "#FF6B35",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#FF6B35",
    },
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#FF6B35",
  },
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
  "&:disabled": {
    background: "#d1d5db",
    boxShadow: "none",
  },
  transition: "all 0.3s",
});

const SuccessCard = styled(Box)({
  textAlign: "center",
  background: "#f0fdf4",
  border: "1px solid #bbf7d0",
  borderRadius: 24,
  padding: "60px 40px",
});

export default function AdmissionForm() {
  const [form, setForm] = useState({
    childName: "",
    childAge: "",
    parentName: "",
    phone: "",
    email: "",
    program: "",
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

  return (
    <SectionRoot id="admission">
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", maxWidth: 700, mx: "auto", mb: 8 }}>
          <Chip
            label="Admissions Open"
            sx={{
              bgcolor: "rgba(132,204,22,0.1)",
              color: "#84CC16",
              fontWeight: 600,
              mb: 2,
            }}
          />
          <Typography variant="h2" sx={{ fontSize: { xs: "2rem", sm: "2.8rem" }, mb: 2 }}>
            Enroll Your{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              Little One
            </Box>
          </Typography>
          <Typography sx={{ color: "text.secondary", fontSize: "1.1rem" }}>
            Fill out the form below and we&apos;ll get back to you within 24 hours.
          </Typography>
        </Box>

        <Box sx={{ maxWidth: 640, mx: "auto" }}>
          {status === "success" ? (
            <SuccessCard>
              <Box sx={{ fontSize: "4rem", mb: 2 }}>🎉</Box>
              <Typography variant="h4" sx={{ color: "#15803d", mb: 1 }}>
                Thank You!
              </Typography>
              <Typography sx={{ color: "#16a34a", fontSize: "1.1rem", mb: 4 }}>
                Your enquiry has been submitted successfully. We&apos;ll contact you soon!
              </Typography>
              <Button
                onClick={() => setStatus("idle")}
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
                Submit Another Enquiry
              </Button>
            </SuccessCard>
          ) : (
            <FormCard as="form" onSubmit={handleSubmit}>
              <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2.5 }}>
                <StyledTextField
                  label="Child's Full Name"
                  name="childName"
                  value={form.childName}
                  onChange={handleChange}
                  required
                  fullWidth
                />
                <StyledTextField
                  label="Child's Age"
                  name="childAge"
                  value={form.childAge}
                  onChange={handleChange}
                  required
                  fullWidth
                  placeholder="e.g., 2 years 3 months"
                />
                <StyledTextField
                  label="Parent / Guardian Name"
                  name="parentName"
                  value={form.parentName}
                  onChange={handleChange}
                  required
                  fullWidth
                />
                <StyledTextField
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  fullWidth
                />
                <StyledTextField
                  label="Email Address (optional)"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  fullWidth
                />
                <StyledTextField
                  label="Select Program"
                  name="program"
                  value={form.program}
                  onChange={handleChange}
                  required
                  fullWidth
                  select
                >
                  <MenuItem value="Play Group (1.5 - 2.5 years)">Play Group (1.5 - 2.5 years)</MenuItem>
                  <MenuItem value="Nursery (2.5 - 3.5 years)">Nursery (2.5 - 3.5 years)</MenuItem>
                  <MenuItem value="Pre-KG (3.5 - 4.5 years)">Pre-KG (3.5 - 4.5 years)</MenuItem>
                </StyledTextField>
                <Box sx={{ gridColumn: { sm: "span 2" } }}>
                  <StyledTextField
                    label="Additional Message (optional)"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    fullWidth
                    multiline
                    rows={3}
                  />
                </Box>
              </Box>

              {status === "error" && (
                <Alert severity="error" sx={{ mt: 2, borderRadius: 3 }}>
                  Something went wrong. Please try again or contact us on WhatsApp.
                </Alert>
              )}

              <Box sx={{ mt: 3 }}>
                <SubmitButton
                  type="submit"
                  fullWidth
                  disabled={status === "loading"}
                  startIcon={status === "loading" ? undefined : <FaPaperPlane />}
                >
                  {status === "loading" ? "Submitting..." : "Submit Enquiry"}
                </SubmitButton>
              </Box>
            </FormCard>
          )}
        </Box>
      </Container>
    </SectionRoot>
  );
}
