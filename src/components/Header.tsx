
import React from 'react';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  const handleApplyClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSd4OXrBK5iMv7Z4p7s3g_SKh4KC5QAha2qZBmtQ23VA-SaF1Q/viewform?usp=dialog', '_blank');
  };

  return (
    <header className="relative z-50">
      {/* Premium Application Banner */}
      <div className="bg-gradient-to-r from-primary-green to-primary-green/90 backdrop-blur-sm border-b border-primary-green/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-deep-navy font-semibold text-lg font-inter text-center sm:text-left">
              Applications are open for our new cohort!
            </p>
            <Button
              onClick={handleApplyClick}
              className="bg-deep-navy hover:bg-deep-navy/90 text-primary-green font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl border border-deep-navy/20"
            >
              Apply Now
            </Button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            {/* Logo placeholder - commented for future use */}
            {/* <div className="text-2xl font-bold text-deep-navy font-poppins">
              [LOGO WILL GO HERE]
            </div> */}
            <div className="text-3xl font-bold text-deep-navy font-poppins tracking-tight">
              The Finance Bootcamp
            </div>
            
            {/* Navigation items can be added here later */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-deep-navy hover:text-primary-green transition-colors duration-200 font-medium">About</a>
              <a href="#offerings" className="text-deep-navy hover:text-primary-green transition-colors duration-200 font-medium">Offerings</a>
              <a href="#contact" className="text-deep-navy hover:text-primary-green transition-colors duration-200 font-medium">Contact</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
