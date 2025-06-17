
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  const handleApplyClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSd4OXrBK5iMv7Z4p7s3g_SKh4KC5QAha2qZBmtQ23VA-SaF1Q/viewform?usp=dialog', '_blank');
  };

  const handleRequestInfo = () => {
    // This can be linked to a contact form or email
    window.location.href = 'mailto:zahra@thefinancebootcamp.com?subject=Request for Information';
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=2000')`,
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-deep-navy/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 font-poppins leading-tight">
            WHERE FINANCE FINALLY MAKES CENTS.
          </h1>
          
          <p className="text-2xl sm:text-3xl lg:text-4xl text-primary-green mb-6 font-inter font-medium">
            Commerce education that actually makes sense.
          </p>
          
          <p className="text-xl sm:text-2xl text-white/90 mb-12 font-inter max-w-3xl mx-auto leading-relaxed">
            Learn Intermediate, Qualify FIA-ACCA, and Train for Tomorrow.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              onClick={handleRequestInfo}
              variant="outline"
              size="lg"
              className="bg-transparent border-2 border-primary-green text-primary-green hover:bg-primary-green hover:text-deep-navy font-semibold px-10 py-4 rounded-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto text-lg"
            >
              Request Info
            </Button>
            
            <Button
              onClick={handleApplyClick}
              size="lg"
              className="bg-primary-green hover:bg-primary-green/90 text-deep-navy font-semibold px-10 py-4 rounded-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto text-lg"
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
