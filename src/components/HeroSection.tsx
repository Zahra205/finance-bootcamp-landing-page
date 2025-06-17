
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  const handleApplyClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSd4OXrBK5iMv7Z4p7s3g_SKh4KC5QAha2qZBmtQ23VA-SaF1Q/viewform?usp=dialog', '_blank');
  };

  const handleRequestInfo = () => {
    window.location.href = 'mailto:zahra@thefinancebootcamp.com?subject=Request for Information';
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
      <div className="relative z-10 text-center px-6 sm:px-8 lg:px-12 max-w-6xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold text-white mb-12 font-poppins leading-tight tracking-tight">
            WHERE FINANCE FINALLY MAKES 
            <span className="text-primary-green block mt-2">CENTS.</span>
          </h1>
          
          <p className="text-2xl sm:text-3xl lg:text-4xl text-white/90 mb-16 font-inter font-light max-w-4xl mx-auto leading-relaxed">
            Commerce education that actually makes sense.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <Button
              onClick={handleRequestInfo}
              variant="outline"
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-deep-navy font-semibold px-12 py-5 rounded-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto text-xl shadow-lg hover:shadow-xl backdrop-blur-sm"
            >
              Request Info
            </Button>
            
            <Button
              onClick={handleApplyClick}
              size="lg"
              className="bg-primary-green hover:bg-primary-green/90 text-deep-navy font-semibold px-12 py-5 rounded-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto text-xl shadow-lg hover:shadow-xl"
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
