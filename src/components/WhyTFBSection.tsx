
import React from 'react';
import { Users, Target, Trophy } from 'lucide-react';

const WhyTFBSection: React.FC = () => {
  const benefits = [
    {
      icon: Users,
      title: "Built for Students",
      description: "Designed to help you learn, not just pass."
    },
    {
      icon: Target,
      title: "Interactive & Practical",
      description: "Real examples. Real clarity."
    },
    {
      icon: Trophy,
      title: "Learn & Qualify Together",
      description: "Dual benefit: Intermediate + ACCA."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-deep-navy via-deep-navy/95 to-deep-navy">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 font-poppins">
            Why The Finance Bootcamp?
          </h2>
          <div className="w-24 h-1 bg-primary-green mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-10 rounded-3xl border border-white/10 hover:border-primary-green/30 transition-all duration-300 hover:bg-white/15">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-green to-primary-green/80 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <IconComponent className="w-10 h-10 text-deep-navy" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 font-poppins">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-white/80 text-lg leading-relaxed font-inter">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyTFBSection;
