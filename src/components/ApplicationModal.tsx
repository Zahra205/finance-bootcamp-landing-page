
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

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
      <DialogContent className="sm:max-w-md bg-white border border-gray-200 shadow-2xl">
        <div className="absolute right-4 top-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="h-8 w-8 p-0 hover:bg-gray-100"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <DialogHeader className="text-center space-y-4 pt-6">
          <DialogTitle className="text-2xl font-bold text-deep-navy font-poppins">
            Applications are now open!
          </DialogTitle>
          <p className="text-gray-600 font-inter">
            Join our latest Intermediate + FIA cohort.
          </p>
        </DialogHeader>
        
        <div className="flex justify-center pt-4 pb-6">
          <Button
            onClick={handleApplyClick}
            className="bg-primary-green hover:bg-primary-green/90 text-deep-navy font-semibold px-8 py-3 rounded-lg transition-all duration-200 hover:scale-105"
          >
            Apply Now
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ApplicationModal;
