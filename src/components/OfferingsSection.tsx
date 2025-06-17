
import React from 'react';
import { BookOpen, Users, GraduationCap } from 'lucide-react';

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
      icon: GraduationCap,
      title: "FIA-ACCA Qualification (Coming Soon)",
      description: "Fast-track to ACCA while you're still in college."
    }
  ];

  return (
    <section id="offerings" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-deep-navy mb-6 font-poppins">
            Our Offerings
          </h2>
          <div className="w-24 h-1 bg-primary-green mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {offerings.map((offering, index) => {
            const IconComponent = offering.icon;
            return (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-white to-gray-50 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-green/20 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-green to-primary-green/80 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-deep-navy" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-deep-navy mb-4 font-poppins group-hover:text-primary-green transition-colors duration-300">
                    {offering.title}
                  </h3>
                  
                  <p className="text-gray-700 text-lg leading-relaxed font-inter">
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
