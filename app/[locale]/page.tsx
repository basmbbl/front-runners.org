'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhySection from '@/components/WhySection';
import ProgramSection from '@/components/ProgramSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import BrochureModal from '@/components/BrochureModal';

export default function Home() {
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);

  const openBrochureModal = () => setIsBrochureModalOpen(true);
  const closeBrochureModal = () => setIsBrochureModalOpen(false);

  return (
    <main className="min-h-screen">
      <Header onOpenBrochure={openBrochureModal} />
      <Hero onOpenBrochure={openBrochureModal} />
      <WhySection />
      <ProgramSection />
      <CTASection onOpenBrochure={openBrochureModal} />
      <Footer />
      <BrochureModal isOpen={isBrochureModalOpen} onClose={closeBrochureModal} />
    </main>
  );
}
