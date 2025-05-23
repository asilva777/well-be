import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Camera, CameraOff, Activity, CheckCircle } from 'lucide-react';

interface HRVMeasurementProps {
  onComplete: (result: { hrv: number; heartRate: number }) => void;
  onCancel: () => void;
}

const HRVMeasurement: React.FC<HRVMeasurementProps> = ({ onComplete, onCancel }) => {
  const [isActive, setIsActive] = useState(false);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState<'idle' | 'starting' | 'measuring' | 'complete'>('idle');
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const startMeasurement = async () => {
    try {
      setStatus('starting');
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'environment' } 
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        streamRef.current = stream;
      }
      
      setIsActive(true);
      setStatus('measuring');
      
      // Simulate measurement progress
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setStatus('complete');
            setTimeout(() => {
              onComplete({ hrv: Math.floor(Math.random() * 50) + 30, heartRate: Math.floor(Math.random() * 40) + 60 });
            }, 1000);
            return 100;
          }
          return prev + 2;
        });
      }, 150);
    } catch (error) {
      console.error('Camera access denied:', error);
      setStatus('idle');
    }
  };

  const stopMeasurement = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
    }
    setIsActive(false);
    setProgress(0);
    setStatus('idle');
    onCancel();
  };

  useEffect(() => {
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Activity className="h-5 w-5" />
          HRV Measurement
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
          {isActive ? (
            <video
              ref={videoRef}
              autoPlay
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Camera className="h-12 w-12 text-gray-400" />
            </div>
          )}
          
          {status === 'measuring' && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="animate-pulse mb-2">
                  <div className="w-16 h-16 border-4 border-white rounded-full mx-auto mb-2" />
                </div>
                <p className="text-sm">Place finger over camera</p>
              </div>
            </div>
          )}
          
          {status === 'complete' && (
            <div className="absolute inset-0 bg-green-500 bg-opacity-90 flex items-center justify-center">
              <CheckCircle className="h-16 w-16 text-white" />
            </div>
          )}
        </div>
        
        {status === 'measuring' && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="w-full" />
          </div>
        )}
        
        <div className="text-sm text-center text-muted-foreground">
          {status === 'idle' && 'Tap start to begin HRV measurement'}
          {status === 'starting' && 'Accessing camera...'}
          {status === 'measuring' && 'Keep finger steady on camera lens'}
          {status === 'complete' && 'Measurement complete!'}
        </div>
        
        <div className="flex gap-2">
          {!isActive ? (
            <>
              <Button onClick={startMeasurement} className="flex-1">
                <Camera className="h-4 w-4 mr-2" />
                Start Measurement
              </Button>
              <Button onClick={onCancel} variant="outline">
                Cancel
              </Button>
            </>
          ) : (
            <Button onClick={stopMeasurement} variant="destructive" className="flex-1">
              <CameraOff className="h-4 w-4 mr-2" />
              Stop
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default HRVMeasurement;
