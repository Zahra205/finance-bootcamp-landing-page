
import React from 'react';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  const handleApplyClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSd4OXrBK5iMv7Z4p7s3g_SKh4KC5QAha2qZBmtQ23VA-SaF1Q/viewform?usp=dialog', '_blank');
  };

  return (
    <header className="w-full">
      {/* Highlight Banner */}
      <div className="bg-primary-green text-deep-navy py-3 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
          <span className="font-medium font-inter">
            Applications open for our new cohort!
          </span>
          <Button
            onClick={handleApplyClick}
            variant="outline"
            size="sm"
            className="bg-deep-navy text-primary-green border-deep-navy hover:bg-deep-navy/90 hover:text-primary-green font-semibold px-4 py-1.5 rounded-md transition-all duration-200"
          >
            Apply Now
          </Button>
        </div>
      </div>
      
      {/* Main Header */}
      <nav className="bg-white shadow-sm py-4 px-4">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo placeholder - can be easily replaced */}
          <div className="text-2xl font-bold text-deep-navy font-poppins">
            {/* TODO: Replace with actual logo */}
            The Finance Bootcamp
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <a href="#offerings" className="text-deep-navy hover:text-primary-green transition-colors font-inter">
              Our Offerings
            </a>
            <a href="#about" className="text-deep-navy hover:text-primary-green transition-colors font-inter">
              About
            </a>
            <Button
              onClick={handleApplyClick}
              className="bg-primary-green hover:bg-primary-green/90 text-deep-navy font-semibold px-6 py-2 rounded-lg transition-all duration-200"
            >
              Apply Now
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
