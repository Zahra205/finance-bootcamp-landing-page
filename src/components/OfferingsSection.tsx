
import React from 'react';
import { BookOpen, Users, Award } from 'lucide-react';

const OfferingsSection: React.FC = () => {
  const offerings = [
    {
      icon: BookOpen,
      title: "Intermediate Tutoring",
      description: "Strong foundation across MEC/CEC."
    },
    {
      icon: Users,
      title: "Corporate Workshops",
      description: "Real-world finance training for schools and teams."
    },
    {
      icon: Award,
      title: "FIA-ACCA Qualification (Coming Soon)",
      description: "Fast-track to ACCA while you're still in college."
    }
  ];

  return (
    <section id="offerings" className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-deep-navy mb-4 font-poppins">
            Our Offerings
          </h2>
          <div className="w-20 h-1 bg-primary-green mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {offerings.map((offering, index) => {
            const IconComponent = offering.icon;
            return (
              <div key={index} className="text-center group">
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-green to-primary-green/80 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-deep-navy" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-deep-navy mb-3 font-poppins">
                    {offering.title}
                  </h3>
                  
                  <p className="text-deep-navy/70 leading-relaxed font-inter">
                    {offering.description}
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

export default OfferingsSection;
