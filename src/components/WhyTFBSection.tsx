
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
    <section className="py-16 bg-gradient-to-br from-deep-navy via-deep-navy/95 to-deep-navy">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 font-poppins">
            Why The Finance Bootcamp?
          </h2>
          <div className="w-20 h-1 bg-primary-green mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-primary-green/30 transition-all duration-300 hover:bg-white/15">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-green to-primary-green/80 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <IconComponent className="w-8 h-8 text-deep-navy" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 font-poppins">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-white/80 leading-relaxed font-inter">
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
