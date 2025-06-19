
import React from 'react';
import { Button } from '@/components/ui/button';

const WhyTFBSection: React.FC = () => {
  const handleApplyClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSd4OXrBK5iMv7Z4p7s3g_SKh4KC5QAha2qZBmtQ23VA-SaF1Q/viewform?usp=dialog', '_blank');
  };

  const handleAdmissionsClick = () => {
    window.location.href = 'Contact';
  };

  return (
    <section className="py-16 bg-gradient-to-br from-deep-navy via-deep-navy/95 to-deep-navy relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('/lovable-uploads/133d8abd-fa0b-467f-b4c3-4592f598a63f.png')`,
        }}
      >
        <div className="absolute inset-0 bg-deep-navy/60"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-left mb-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-poppins leading-tight">
  The gap between where you are and where you want to be? <br />
  It starts closing right here.
</h2>

<p className="text-lg sm:text-xl text-white/90 mb-8 font-inter leading-relaxed max-w-3xl">
  Apply in minutes. <br />
  Start on the 1st of next month. <br />
  Get support from day one. <br />
  And become the person your future is waiting for.
</p>

<p className="text-lg sm:text-xl text-white/90 mb-8 font-inter leading-relaxed max-w-3xl space-y-4">
  The world changed. Financial literacy didn’t. So we built something better. <br /><br />

  Educated adults still struggle to manage their homes. <br />
  Founders lose momentum because no one taught them how to track their money. <br />
  And entire communities miss out on schemes, tax benefits, and funding — simply because they don’t know they exist. <br /><br />

  Finance was never part of our education. <br />
  We were never taught how to budget, save, file, or grow wealth — and now we’re all paying the price for it. <br /><br />

  The Finance Bootcamp exists to fix that. <br />
  We’re building a new kind of learning space — one that teaches finance in a way that actually makes sense. <br />
  Clear. Practical. Powerful.
</p>

            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleAdmissionsClick}
                variant="outline"
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-deep-navy font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto shadow-lg hover:shadow-xl backdrop-blur-sm"
              >
                Contact Us
              </Button>
              
              <Button
                onClick={handleApplyClick}
                size="lg"
                className="bg-primary-green hover:bg-primary-green/90 text-deep-navy font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto shadow-lg hover:shadow-xl"
              >
                Apply Now →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTFBSection;
