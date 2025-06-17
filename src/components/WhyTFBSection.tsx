
import React from 'react';
import { GraduationCap, Target, Trophy } from 'lucide-react';

const WhyTFBSection: React.FC = () => {
  const benefits = [
    {
      icon: GraduationCap,
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
    <section className="py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-deep-navy mb-6 font-poppins">
            Why The Finance Bootcamp?
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="text-center group"
              >
                {/* Icon */}
                <div className="w-20 h-20 bg-primary-green/10 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-primary-green/20 transition-colors duration-300">
                  <IconComponent className="w-10 h-10 text-primary-green" />
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-semibold text-deep-navy mb-4 font-poppins">
                  {benefit.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 font-inter text-lg leading-relaxed max-w-sm mx-auto">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyTFBSection;
