
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ApplicationModal: React.FC<ApplicationModalProps> = ({ isOpen, onClose }) => {
  const handleApplyClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSd4OXrBK5iMv7Z4p7s3g_SKh4KC5QAha2qZBmtQ23VA-SaF1Q/viewform?usp=dialog', '_blank');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg bg-white border-0 shadow-2xl rounded-2xl overflow-hidden">
        <DialogHeader className="text-center space-y-6 pt-8 pb-4 px-8">
          <DialogTitle className="text-3xl font-bold text-deep-navy font-poppins leading-tight text-center">
            Applications are open for our new cohort!
          </DialogTitle>
          <DialogDescription className="sr-only">
            Apply now for The Finance Bootcamp's new cohort
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex justify-center pb-8 px-8">
          <Button
            onClick={handleApplyClick}
            className="bg-primary-green hover:bg-primary-green/90 text-deep-navy font-semibold px-12 py-4 rounded-xl text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Apply Now
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ApplicationModal;
