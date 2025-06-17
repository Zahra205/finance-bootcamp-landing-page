
import React from 'react';

const FounderVideoSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Video Container */}
          <div className="relative group">
            <div className="relative aspect-video bg-gradient-to-br from-deep-navy/10 to-primary-green/10 rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
              {/* Video placeholder - YouTube/MP4 embed will go here */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 mx-auto bg-primary-green/20 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-primary-green" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-deep-navy/60 font-medium">Video content will be embedded here</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-deep-navy mb-8 font-poppins leading-tight">
              About the Founder
            </h2>
            
            <div className="prose prose-lg text-gray-700 font-inter leading-relaxed">
              <p className="text-xl mb-6 text-gray-800 leading-relaxed">
                Zahra Arif is a finance enthusiast and ACCA trainer who started teaching at the age of 15. With over 5 years of experience working with students from different backgrounds, she focuses on making finance easier to understand and more relevant to everyday life.
              </p>
              
              <p className="text-xl mb-6 text-gray-800 leading-relaxed">
                Zahra's interest lies in addressing the gap in financial literacy, especially among students, and finding simple, practical ways to make a lasting impact.
              </p>
              
              <p className="text-xl text-gray-800 leading-relaxed">
                Through her work at The Finance Bootcamp, she hopes to help young people build confidence in their financial understanding and think more openly about their futures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderVideoSection;
