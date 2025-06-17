
import React from 'react';
import { BookOpen, Users, Award } from 'lucide-react';

const OfferingsSection: React.FC = () => {
  const offerings = [
    {
      icon: BookOpen,
      title: "Intermediate Tutoring",
      description: "Strong foundation across MEC/CEC.",
      gradient: "from-primary-green/20 to-primary-green/5"
    },
    {
      icon: Users,
      title: "Corporate Workshops",
      description: "Real-world finance training for schools and teams.",
      gradient: "from-deep-navy/20 to-deep-navy/5"
    },
    {
      icon: Award,
      title: "FIA-ACCA Qualification",
      badge: "Coming Soon",
      description: "Fast-track to ACCA while you're still in college.",
      gradient: "from-primary-green/30 to-primary-green/10"
    }
  ];

  return (
    <section id="offerings" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-deep-navy mb-6 font-poppins">
            Our Offerings
          </h2>
          <p className="text-2xl text-gray-600 font-inter max-w-3xl mx-auto">
            Comprehensive finance education designed for the modern world
          </p>
        </div>

        {/* Offerings Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offering, index) => {
            const IconComponent = offering.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-primary-green/30"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${offering.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative z-10 p-8">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-primary-green/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-green/20 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-primary-green" />
                  </div>
                  
                  {/* Title with Badge */}
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-2xl font-semibold text-deep-navy font-poppins">
                      {offering.title}
                    </h3>
                    {offering.badge && (
                      <span className="px-3 py-1 bg-primary-green text-deep-navy text-xs font-semibold rounded-full">
                        {offering.badge}
                      </span>
                    )}
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-600 font-inter leading-relaxed text-lg">
                    {offering.description}
                  </p>
                </div>
                
                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-green/20 rounded-2xl transition-colors duration-300"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;
