
import React from 'react';

const FounderVideoSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white" id='about'>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Portrait Video Container */}
          <div className="relative flex justify-center">
            <div className="w-[300px] md:w-[360px] lg:w-[400px] aspect-[9/16] bg-black rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
              <video
                controls
                autoPlay
                className="w-full h-full object-cover rounded-2xl"
                playsInline
                poster="/thumbnail.jpg" // Optional
              >
                <source src="/pitch.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-deep-navy mb-4 font-poppins">
              The gap between where you are and where you want to be? <br />
              It starts closing right here.
            </h2>

            <p className="text-lg text-deep-navy/80 leading-relaxed font-inter">
              Apply in minutes. <br />
              Start on the 1st of next month. <br />
              Get support from day one. <br />
              And become the person your future is waiting for.
              <br /><br />
              The world changed. Financial literacy didn’t. So we built something better.
              <br /><br />
              Educated adults still struggle to manage their homes.
              Founders lose momentum because no one taught them how to track their money.
              And entire communities miss out on schemes, tax benefits, and funding — simply because they don’t know they exist.
              <br /><br />
              Finance was never part of our education. <br />
              We were never taught how to budget, save, file, or grow wealth — and now we’re all paying the price for it.
              <br /><br />
              The Finance Bootcamp exists to fix that. <br />
              We’re building a new kind of learning space — one that teaches finance in a way that actually makes sense.
              Clear. Practical. Powerful.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderVideoSection;

