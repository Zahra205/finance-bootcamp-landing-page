
import React from 'react';
import { Play } from 'lucide-react';

const FounderVideoSection: React.FC = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Video Container */}
          <div className="relative">
            <div className="aspect-video bg-gray-200 rounded-xl shadow-lg overflow-hidden relative group">
              {/* TODO: Replace with actual video embed (YouTube or MP4) */}
              {/* Placeholder for video */}
              <div className="absolute inset-0 bg-gradient-to-br from-deep-navy to-deep-navy/80 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-20 h-20 bg-primary-green rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-deep-navy fill-current ml-1" />
                  </div>
                  <p className="text-lg font-medium font-inter">
                    Founder Message
                  </p>
                  <p className="text-sm opacity-80 mt-1">
                    Click to play video
                  </p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-green/20 rounded-full blur-xl"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-deep-navy/10 rounded-full blur-xl"></div>
          </div>
          
          {/* Content */}
          <div className="lg:pl-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-deep-navy mb-6 font-poppins">
              Meet Our Founder
            </h2>
            
            {/* TODO: Add founder introduction paragraph here */}
            <div className="prose prose-lg text-gray-600 font-inter">
              <p className="text-lg leading-relaxed mb-6">
                {/* Placeholder text - to be replaced with actual founder introduction */}
                Discover the vision behind The Finance Bootcamp and learn how we're revolutionizing commerce education to make it practical, accessible, and career-focused.
              </p>
              
              <p className="text-lg leading-relaxed">
                Our approach combines traditional academic rigor with real-world application, ensuring students are prepared for the challenges of modern finance careers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderVideoSection;
