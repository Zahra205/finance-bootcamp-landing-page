
import React from 'react';

const FounderVideoSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Container */}
          <div className="relative">
            {/* Placeholder for video - will be replaced with actual embed */}
            <div className="aspect-video bg-gradient-to-br from-deep-navy/10 to-deep-navy/5 rounded-2xl shadow-2xl border border-gray-200 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-20 h-20 bg-primary-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-deep-navy" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-deep-navy/60 font-medium">Founder Video Coming Soon</p>
                <p className="text-sm text-deep-navy/40 mt-2">YouTube/MP4 embed will be placed here</p>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-deep-navy mb-4 font-poppins">
              About the Founder
            </h2>
            
            <p className="text-lg text-deep-navy/80 leading-relaxed font-inter">
              Zahra Arif is a finance enthusiast and ACCA trainer who started teaching at the age of 15. With over 5 years of experience working with students from different backgrounds, she focuses on making finance easier to understand and more relevant to everyday life. Zahra's interest lies in addressing the gap in financial literacy, especially among students, and finding simple, practical ways to make a lasting impact. Through her work at The Finance Bootcamp, she hopes to help young people build confidence in their financial understanding and think more openly about their futures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderVideoSection;
