"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AnnouncementsSection from "@/components/AnnouncementsSection";
import LocationsSection from "@/components/LocationsSection";
import ProgramsSection from "@/components/ProgramsSection";
import CoachSection from "@/components/CoachSection";
import CampsSection from "@/components/CampsSection";
import PricingSection from "@/components/PricingSection";
import TrainingPhilosophySection from "@/components/TrainingPhilosophySection";
import EquipmentSection from "@/components/EquipmentSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import TrialLessonModal from "@/components/TrialLessonModal";
import LegalModal from "@/components/LegalModal";
import VoucherModal from "@/components/VoucherModal";

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [voucherOpen, setVoucherOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<string | undefined>();
  const [legalModalType, setLegalModalType] = useState<"impressum" | "datenschutz" | null>(null);

  const handleOpenVoucher = () => {
    setVoucherOpen(true);
  };

  const handleCloseVoucher = () => {
    setVoucherOpen(false);
  };

  const handleOpenBooking = (program?: string) => {
    setSelectedProgram(program);
    setBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingOpen(false);
    setSelectedProgram(undefined);
  };

  const handleOpenLegal = (type: "impressum" | "datenschutz") => {
    setLegalModalType(type);
  };

  const handleCloseLegal = () => {
    setLegalModalType(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-lime-300 selection:text-slate-950">
      <Navbar onOpenBooking={handleOpenBooking} onOpenLegal={handleOpenLegal} onOpenVoucher={handleOpenVoucher} />

      <main className="flex-1">
        <HeroSection onOpenBooking={handleOpenBooking} />
        <AnnouncementsSection onOpenBooking={handleOpenBooking} />
        <LocationsSection onOpenBooking={handleOpenBooking} />
        <ProgramsSection onOpenBooking={handleOpenBooking} />
        <CoachSection onOpenBooking={handleOpenBooking} />
        <CampsSection onOpenBooking={handleOpenBooking} />
        <PricingSection onOpenBooking={handleOpenBooking} onOpenVoucher={handleOpenVoucher} />
        <TrainingPhilosophySection />
        <EquipmentSection onOpenBooking={handleOpenBooking} />
        <TestimonialsSection />
        <CTASection onOpenBooking={handleOpenBooking} />
      </main>

      <Footer onOpenLegal={handleOpenLegal} onOpenBooking={handleOpenBooking} onOpenVoucher={handleOpenVoucher} />

      <TrialLessonModal
        isOpen={bookingOpen}
        onClose={handleCloseBooking}
        initialProgram={selectedProgram}
      />

      <VoucherModal
        isOpen={voucherOpen}
        onClose={handleCloseVoucher}
      />

      <LegalModal
        isOpen={legalModalType !== null}
        onClose={handleCloseLegal}
        type={legalModalType || "impressum"}
      />
    </div>
  );
}
