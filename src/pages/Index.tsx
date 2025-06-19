
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FounderVideoSection from '@/components/FounderVideoSection';
import OfferingsSection from '@/components/OfferingsSection';
import WhyTFBSection from '@/components/WhyTFBSection';
import CTAFooterSection from '@/components/CTAFooterSection';
import ApplicationModal from '@/components/ApplicationModal';

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTriggered, setModalTriggered] = useState(false);

  useEffect(() => {
    if (modalTriggered) return; // Prevent multiple triggers

    // Show modal after 5 seconds
    const timer = setTimeout(() => {
      if (!modalTriggered) {
        setIsModalOpen(true);
        setModalTriggered(true);
      }
    }, 5000);

    // Show modal on scroll (halfway through page)
    const handleScroll = () => {
      if (modalTriggered) return; // Prevent triggering if already shown
      
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      if (scrollPosition > (documentHeight - windowHeight) / 2) {
        setIsModalOpen(true);
        setModalTriggered(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [modalTriggered]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FounderVideoSection />
      <OfferingsSection />
      <WhyTFBSection />
      <CTAFooterSection />
      <ApplicationModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default Index;
