
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
      <footer className="border-t border-gray-700 py-12" id='contact'>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Information Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Email Column */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                <div className="w-10 h-10 bg-primary-green/20 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary-green" />
                </div>
                <h3 className="text-white font-semibold text-lg font-poppins">Email Us</h3>
              </div>
              <a 
                href="mailto:zahra@thefinancebootcamp.com" 
                className="text-gray-300 hover:text-primary-green transition-colors font-inter text-base block hover:underline"
              >
                zahra@thefinancebootcamp.com
              </a>
              <p className="text-gray-400 text-sm mt-2 font-inter">
                Get in touch for inquiries
              </p>
            </div>
            
            {/* Address Column */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                <div className="w-10 h-10 bg-primary-green/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary-green" />
                </div>
                <h3 className="text-white font-semibold text-lg font-poppins">Visit Us</h3>
              </div>
              <address className="text-gray-300 font-inter text-base not-italic leading-relaxed">
                beside NMDC - Vijaya Nagar Colony Road,<br />
                NMDC Colony, Venkatadri Colony,<br />
                Masab Tank, Hyderabad,<br />
                Telangana 500004
              </address>
              <p className="text-gray-400 text-sm mt-2 font-inter">
                Our campus location
              </p>
            </div>
            
            {/* Phone Column */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                <div className="w-10 h-10 bg-primary-green/20 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary-green" />
                </div>
                <h3 className="text-white font-semibold text-lg font-poppins">Call Us</h3>
              </div>
              <a 
                href="tel:+917386327364" 
                className="text-gray-300 hover:text-primary-green transition-colors font-inter text-base block hover:underline"
              >
                +91 7386327364
              </a>
              <p className="text-gray-400 text-sm mt-2 font-inter">
                Mon - Fri, 9:00 AM - 6:00 PM
              </p>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="text-center pt-8 border-t border-gray-700">
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
