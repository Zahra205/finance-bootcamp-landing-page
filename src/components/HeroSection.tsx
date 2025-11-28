import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  const handleApplyClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSd4OXrBK5iMv7Z4p7s3g_SKh4KC5QAha2qZBmtQ23VA-SaF1Q/viewform?usp=dialog', '_blank');
  };

  const handleRequestInfo = () => {
    window.location.href = 'tel:+917386327364';
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with enhanced overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=2000')`,
        }}
      >
        {/* Sophisticated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-deep-navy/80 via-deep-navy/70 to-deep-navy/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 sm:px-8 lg:px-12 max-w-5xl mx-auto">
        <div className="animate-fade-in">

          {/* Enhanced background for main heading */}
          <div className="relative mb-6">

            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 rounded-3xl blur-3xl animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-red-500/10 to-purple-600/10 rounded-2xl transform rotate-1 animate-spin-slow"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-green-400/15 via-blue-500/15 to-purple-600/15 rounded-2xl transform -rotate-1 animate-pulse"></div>
            </div>
            
            {/* UPDATED HEADING */}
            <h1 className="relative uppercase text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white font-poppins leading-tight tracking-tight backdrop-blur-sm bg-black/10 rounded-2xl p-8 border border-white/20">
              2-MONTH INTENSE TRAINING FOR CEC & MEC  
              <span className="uppercase text-primary-green block mt-2 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                FINAL EXAMS.
              </span>
            </h1>
          </div>
          
          {/* UPDATED SUBTEXT */}
          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 font-inter font-light max-w-3xl mx-auto leading-relaxed">
            High-impact, result-driven coaching designed to help students improve ranks, master core concepts, and excel in their final exams.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={handleRequestInfo}
              variant="outline"
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-deep-navy font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto shadow-lg hover:shadow-xl backdrop-blur-sm"
            >
              Contact Us
            </Button>
            
            <Button
              onClick={handleApplyClick}
              size="lg"
              className="bg-primary-green hover:bg-primary-green/90 text-deep-navy font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto shadow-lg hover:shadow-xl"
            >
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
