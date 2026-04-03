"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import ProgramsSection from "@/components/ProgramsSection";
import AdmissionForm from "@/components/AdmissionForm";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import EnquiryModal from "@/components/EnquiryModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState("");

  const openEnquiry = (program?: string) => {
    setSelectedProgram(program || "");
    setModalOpen(true);
  };

  return (
    <>
      <Navbar onEnrollClick={() => openEnquiry()} />
      <main>
        <HeroSection onEnquireClick={() => openEnquiry()} />
        <AboutSection />
        <GallerySection />
        <ProgramsSection onEnquireClick={(program) => openEnquiry(program)} />
        <AdmissionForm />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <EnquiryModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        preselectedProgram={selectedProgram}
      />
    </>
  );
}
