
import React from 'react';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  const handleApplyClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSd4OXrBK5iMv7Z4p7s3g_SKh4KC5QAha2qZBmtQ23VA-SaF1Q/viewform?usp=dialog', '_blank');
  };

  return (
    <header className="relative z-50">
      {/* Main Navigation */}
      <nav className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-500 backdrop-blur-lg shadow-xl border-b-4 border-primary-green">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center transform hover:scale-105 transition-transform duration-300">
              <img 
                src="/lovable-uploads/005af62b-0df7-4b53-836f-772c63bda3c6.png" 
                alt="The Finance Bootcamp" 
                className="h-20 w-auto drop-shadow-lg"
              />
            </div>
            
            {/* Navigation items */}
            <div className="flex items-center space-x-8">
              <div className="hidden md:flex items-center space-x-8">
                <a href="#about" className="text-white hover:text-primary-green transition-all duration-300 font-bold text-lg hover:scale-110 transform drop-shadow-lg">About</a>
                <a href="#offerings" className="text-white hover:text-primary-green transition-all duration-300 font-bold text-lg hover:scale-110 transform drop-shadow-lg">Offerings</a>
                <a href="tel:+917386327364" className="text-white hover:text-primary-green transition-all duration-300 font-bold text-lg hover:scale-110 transform drop-shadow-lg">Contact</a>
              </div>
              
              <Button
                onClick={handleApplyClick}
                className="bg-gradient-to-r from-primary-green to-yellow-400 hover:from-yellow-400 hover:to-primary-green text-deep-navy font-bold px-8 py-3 rounded-full transition-all duration-300 hover:scale-110 shadow-2xl hover:shadow-3xl text-lg border-2 border-white transform hover:rotate-2"
              >
                🚀 Apply Now
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
