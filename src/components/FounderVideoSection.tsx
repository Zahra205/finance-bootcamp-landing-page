
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderVideoSection;
