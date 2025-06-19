
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  const handleApplyClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSd4OXrBK5iMv7Z4p7s3g_SKh4KC5QAha2qZBmtQ23VA-SaF1Q/viewform?usp=dialog', '_blank');
  };

  const handleRequestInfo = () => {
    window.location.href = '#contact';
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
          <h1 className="uppercase text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 font-poppins leading-tight tracking-tight">
            Finance education never worked quite 
            <span className="uppercase text-primary-green block mt-2">like this.</span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 font-inter font-light max-w-3xl mx-auto leading-relaxed">
            Because financial illiteracy isn’t just a gap  - it’s a trap.
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
