
import React from 'react';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  const handleApplyClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSd4OXrBK5iMv7Z4p7s3g_SKh4KC5QAha2qZBmtQ23VA-SaF1Q/viewform?usp=dialog', '_blank');
  };

  return (
    <header className="relative z-50">
      {/* Main Navigation */}
      <nav className="bg-deep-navy/95 backdrop-blur-lg shadow-lg  border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo placeholder - commented for future use */}
            {/* <div className="text-2xl font-bold text-deep-navy font-poppins">
              [LOGO WILL GO HERE]
            </div> */}
            <div className="text-2xl font-bold text-primary-green font-poppins tracking-tight">
              The Finance Bootcamp
            </div>
            
            {/* Navigation items */}
            <div className="flex items-center space-x-8">
              <div className="hidden md:flex items-center space-x-6">
                <a href="#about" className="text-white hover:text-primary-green transition-colors duration-200 font-medium text-sm">About</a>
                <a href="#offerings" className="text-white hover:text-primary-green transition-colors duration-200 font-medium text-sm">Offerings</a>
                <a href="tel:+917386327364" className="text-white hover:text-primary-green transition-colors duration-200 font-medium text-sm">Contact</a>
              </div>
              
              <Button
                onClick={handleApplyClick}
                className="bg-primary-green hover:bg-primary-green/90 text-deep-navy font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-sm"
              >
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
