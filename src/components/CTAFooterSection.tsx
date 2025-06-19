
import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Phone } from 'lucide-react';

const CTAFooterSection: React.FC = () => {
  const handleApplyClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSd4OXrBK5iMv7Z4p7s3g_SKh4KC5QAha2qZBmtQ23VA-SaF1Q/viewform?usp=dialog', '_blank');
  };

  return (
    <section className="bg-deep-navy">
      {/* CTA Section */}
      <div className="py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 font-poppins">
            Ready to join the next generation of finance learners?
          </h2>
          
          <Button
            onClick={handleApplyClick}
            size="lg"
            className="bg-primary-green hover:bg-primary-green/90 text-deep-navy font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 text-lg"
          >
            Apply Now
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-700 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Information */}
          <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Email */}
            <div className="flex items-center gap-3 text-white group">
              <Mail className="w-5 h-5 text-primary-green flex-shrink-0" />
              <a 
                href="mailto:zahra@thefinancebootcamp.com" 
                className="hover:text-primary-green transition-colors font-inter text-base group-hover:underline"
              >
                zahra@thefinancebootcamp.com
              </a>
            </div>
            
            {/* Address */}
            <div className="flex items-start gap-3 text-white">
              <MapPin className="w-5 h-5 text-primary-green mt-1 flex-shrink-0" />
              <span className="font-inter text-base leading-relaxed">
                beside NMDC - Vijaya Nagar Colony Road, NMDC Colony, Venkatadri Colony, Masab Tank, Hyderabad, Telangana 500004
              </span>
            </div>
            
            {/* Phone */}
            <div className="flex items-center gap-3 text-white group">
              <Phone className="w-5 h-5 text-primary-green flex-shrink-0" />
              <a 
                href="tel:7386327364" 
                className="hover:text-primary-green transition-colors font-inter text-base group-hover:underline"
              >
                +91 7386327364
              </a>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="text-center pt-6 border-t border-gray-700">
            <p className="text-gray-400 font-inter text-base">
              © 2025 The Finance Bootcamp. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default CTAFooterSection;
