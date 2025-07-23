import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Activity } from 'lucide-react';
import HRVMeasurement from './HRVMeasurement';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';

interface HRVMeasurementButtonProps {
  onComplete?: (result: { hrv: number; heartRate: number }) => void;
  variant?: 'default' | 'outline' | 'secondary';
  size?: 'default' | 'sm' | 'lg';
  className?: string;
}

const HRVMeasurementButton: React.FC<HRVMeasurementButtonProps> = ({
  onComplete,
  variant = 'default',
  size = 'default',
  className = ''
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleComplete = (result: { hrv: number; heartRate: number }) => {
    setShowModal(false);
    if (onComplete) {
      onComplete(result);
    }
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <>
      <Button
        onClick={() => setShowModal(true)}
        variant={variant}
        size={size}
        className={`flex items-center gap-2 ${className}`}
      >
        <Activity className="h-4 w-4" />
        Measure HRV
      </Button>

      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="p-0 max-w-sm">
          <VisuallyHidden.Root>
            <DialogTitle>HRV Measurement</DialogTitle>
          </VisuallyHidden.Root>
          <HRVMeasurement 
            onComplete={handleComplete}
            onCancel={handleCancel}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default HRVMeasurementButton;
