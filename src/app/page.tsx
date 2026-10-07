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
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import TrialLessonModal from "@/components/TrialLessonModal";
import LegalModal from "@/components/LegalModal";

/**
 * Main Landing Page for Tennisschule Amir.
 * Modeled after Rippner Tennis architecture and style.
 */
export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<string | undefined>();
  const [legalModalType, setLegalModalType] = useState<"impressum" | "datenschutz" | null>(null);

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
      {/* Top Navbar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection onOpenBooking={handleOpenBooking} />

        {/* Announcements & News */}
        <AnnouncementsSection onOpenBooking={handleOpenBooking} />

        {/* Locations (SG Weiterstadt & Pfungstadt) */}
        <LocationsSection onOpenBooking={handleOpenBooking} />

        {/* Training Programs */}
        <ProgramsSection onOpenBooking={handleOpenBooking} />

        {/* Cheftrainer Amir Reza Profile */}
        <CoachSection onOpenBooking={handleOpenBooking} />

        {/* Feriencamps */}
        <CampsSection onOpenBooking={handleOpenBooking} />

        {/* Transparent Pricing Table */}
        <PricingSection onOpenBooking={handleOpenBooking} />

        {/* Modern Training Philosophy */}
        <TrainingPhilosophySection />

        {/* Yonex Equipment & 24h Stringing Service */}
        <EquipmentSection onOpenBooking={handleOpenBooking} />

        {/* High Conversion CTA */}
        <CTASection onOpenBooking={handleOpenBooking} />
      </main>

      {/* Footer */}
      <Footer onOpenLegal={handleOpenLegal} onOpenBooking={handleOpenBooking} />

      {/* Interactive Booking & Trial Modal */}
      <TrialLessonModal
        isOpen={bookingOpen}
        onClose={handleCloseBooking}
        initialProgram={selectedProgram}
      />

      {/* Legal Modal (Impressum / Datenschutz) */}
      <LegalModal
        isOpen={legalModalType !== null}
        onClose={handleCloseLegal}
        type={legalModalType || "impressum"}
      />
    </div>
  );
}
