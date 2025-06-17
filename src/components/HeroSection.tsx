
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
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-poppins leading-tight">
            The Finance Bootcamp
          </h1>
          
          <p className="text-xl sm:text-2xl lg:text-3xl text-primary-green mb-4 font-inter font-medium">
            Commerce education that actually makes sense.
          </p>
          
          <p className="text-lg sm:text-xl text-white/90 mb-8 font-inter max-w-2xl mx-auto">
            Learn Intermediate, Qualify FIA-ACCA, and Train for Tomorrow.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={handleRequestInfo}
              variant="outline"
              size="lg"
              className="bg-transparent border-2 border-primary-green text-primary-green hover:bg-primary-green hover:text-deep-navy font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              Request Info
            </Button>
            
            <Button
              onClick={handleApplyClick}
              size="lg"
              className="bg-primary-green hover:bg-primary-green/90 text-deep-navy font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto"
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
