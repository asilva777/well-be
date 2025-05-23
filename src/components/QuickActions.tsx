import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Play, RotateCcw, Zap, Moon, Activity, Wifi } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import HRVMeasurement from './HRVMeasurement';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';

const QuickActions = () => {
  const navigate = useNavigate();
  const [showHRVModal, setShowHRVModal] = useState(false);
  
  const actions = [
    {
      title: 'Start HRV Measurement',
      description: 'Measure your heart rate variability',
      icon: Activity,
      color: 'bg-gradient-to-r from-red-500 to-pink-500',
      textColor: 'text-white',
      onClick: () => setShowHRVModal(true)
    },
    {
      title: 'Breathing Exercise',
      description: '5-minute stress relief session',
      icon: RotateCcw,
      color: 'bg-gradient-to-r from-blue-500 to-cyan-500',
      textColor: 'text-white',
      onClick: () => navigate('/breathing-exercise')
    },
    {
      title: 'Sleep Stories',
      description: 'Relax with Sleep Flow',
      icon: Moon,
      color: 'bg-gradient-to-r from-purple-500 to-indigo-500',
      textColor: 'text-white',
      onClick: () => navigate('/sleep-stories')
    },
    {
      title: 'Quick Workout',
      description: 'Start activity tracking',
      icon: Zap,
      color: 'bg-gradient-to-r from-green-500 to-emerald-500',
      textColor: 'text-white',
      onClick: () => navigate('/quick-workout')
    }
  ];

  const handleHRVComplete = (result: { hrv: number; heartRate: number }) => {
    setShowHRVModal(false);
    console.log('HRV Measurement Result:', result);
  };

  const handleHRVCancel = () => {
    setShowHRVModal(false);
  };

  return (
    <>
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            {actions.map((action, index) => {
              const Icon = action.icon;
              return (
                <Button
                  key={index}
                  variant="outline"
                  className={`h-auto p-4 flex flex-col items-center gap-2 hover:scale-105 transition-transform ${action.color} border-0 ${action.textColor}`}
                  onClick={action.onClick}
                >
                  <Icon className="h-6 w-6" />
                  <div className="text-center">
                    <div className="font-medium text-sm">{action.title}</div>
                    <div className="text-xs opacity-90">{action.description}</div>
                  </div>
                </Button>
              );
            })}
          </div>
          
          <div className="mt-4 pt-4 border-t">
            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">
                Last measurement: 2 hours ago
              </div>
              <Button 
                size="sm" 
                variant="ghost"
                onClick={() => navigate('/device-connections')}
                className="flex items-center gap-1"
              >
                <Wifi className="h-3 w-3" />
                Devices
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Dialog open={showHRVModal} onOpenChange={setShowHRVModal}>
        <DialogContent className="p-0 max-w-sm">
          <VisuallyHidden.Root>
            <DialogTitle>HRV Measurement</DialogTitle>
          </VisuallyHidden.Root>
          <HRVMeasurement 
            onComplete={handleHRVComplete}
            onCancel={handleHRVCancel}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default QuickActions;
