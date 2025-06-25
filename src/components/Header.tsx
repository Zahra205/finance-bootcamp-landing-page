
import React from 'react';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  const handleApplyClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSd4OXrBK5iMv7Z4p7s3g_SKh4KC5QAha2qZBmtQ23VA-SaF1Q/viewform?usp=dialog', '_blank');
  };

  return (
    <header className="relative z-50">
      {/* Main Navigation */}
      <nav className="bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 backdrop-blur-lg shadow-2xl border-b-4 border-primary-green relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-4 left-10 w-12 h-12 bg-yellow-400 rounded-full animate-bounce"></div>
          <div className="absolute top-8 right-20 w-8 h-8 bg-green-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-4 left-1/4 w-6 h-6 bg-blue-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-6 right-1/3 w-10 h-10 bg-red-400 rounded-full animate-spin"></div>
        </div>
        
        <div className="container mx-auto px-6 py-6 relative z-10">
          <div className="flex items-center justify-between">
            {/* Logo - removed hover animations */}
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/005af62b-0df7-4b53-836f-772c63bda3c6.png" 
                alt="The Finance Bootcamp" 
                className="h-32 w-auto drop-shadow-2xl"
              />
            </div>
            
            {/* Navigation items */}
            <div className="flex items-center space-x-8">
              <div className="hidden md:flex items-center space-x-8">
                <a href="#about" className="text-white hover:text-yellow-300 transition-all duration-300 font-bold text-lg hover:scale-125 transform drop-shadow-lg hover:drop-shadow-2xl">About</a>
                <a href="#offerings" className="text-white hover:text-green-300 transition-all duration-300 font-bold text-lg hover:scale-125 transform drop-shadow-lg hover:drop-shadow-2xl">Offerings</a>
                <a href="tel:+917386327364" className="text-white hover:text-pink-300 transition-all duration-300 font-bold text-lg hover:scale-125 transform drop-shadow-lg hover:drop-shadow-2xl">Contact</a>
              </div>
              
              <Button
                onClick={handleApplyClick}
                className="bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 hover:from-green-400 hover:via-blue-500 hover:to-purple-600 text-white font-bold px-10 py-4 rounded-full transition-all duration-500 hover:scale-125 shadow-2xl hover:shadow-3xl text-lg border-3 border-white transform hover:rotate-6 hover:animate-pulse"
              >
                🚀 Apply Now 🌟
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
