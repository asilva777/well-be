import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Play, Pause, RotateCcw, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BreathingExercise = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale');
  const [progress, setProgress] = useState(0);
  const [cycle, setCycle] = useState(0);
  const [totalCycles] = useState(10);
  
  const phases = {
    inhale: { duration: 4000, label: 'Breathe In' },
    hold: { duration: 4000, label: 'Hold' },
    exhale: { duration: 6000, label: 'Breathe Out' }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isActive) {
      const currentPhase = phases[phase];
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            // Move to next phase
            if (phase === 'inhale') {
              setPhase('hold');
            } else if (phase === 'hold') {
              setPhase('exhale');
            } else {
              setPhase('inhale');
              setCycle(prev => prev + 1);
            }
            return 0;
          }
          return prev + (100 / (currentPhase.duration / 100));
        });
      }, 100);
    }
    
    return () => clearInterval(interval);
  }, [isActive, phase]);

  useEffect(() => {
    if (cycle >= totalCycles) {
      setIsActive(false);
      setProgress(0);
      setCycle(0);
    }
  }, [cycle, totalCycles]);

  const toggleExercise = () => {
    setIsActive(!isActive);
    if (!isActive) {
      setProgress(0);
      setPhase('inhale');
    }
  };

  const resetExercise = () => {
    setIsActive(false);
    setProgress(0);
    setCycle(0);
    setPhase('inhale');
  };

  const getCircleScale = () => {
    if (phase === 'inhale') return 1 + (progress / 100) * 0.5;
    if (phase === 'exhale') return 1.5 - (progress / 100) * 0.5;
    return 1.5;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 p-4">
      <div className="max-w-md mx-auto space-y-6">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/')}
            className="p-2"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-2xl font-bold">Breathing Exercise</h1>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-center">4-4-6 Breathing</CardTitle>
            <p className="text-center text-muted-foreground">
              Cycle {cycle} of {totalCycles}
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="relative flex items-center justify-center h-64">
              <div 
                className={`w-32 h-32 rounded-full transition-all duration-1000 ease-in-out ${
                  phase === 'inhale' ? 'bg-blue-400' : 
                  phase === 'hold' ? 'bg-purple-400' : 'bg-green-400'
                }`}
                style={{ transform: `scale(${getCircleScale()})` }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white font-semibold">
                  <div className="text-lg">{phases[phase].label}</div>
                  <div className="text-sm opacity-90">
                    {Math.ceil((100 - progress) / 25)} sec
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>{phases[phase].label}</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="w-full" />
            </div>
            
            <div className="flex gap-2 justify-center">
              <Button
                onClick={toggleExercise}
                className="flex-1"
                variant={isActive ? "secondary" : "default"}
              >
                {isActive ? (
                  <><Pause className="h-4 w-4 mr-2" />Pause</>
                ) : (
                  <><Play className="h-4 w-4 mr-2" />Start</>
                )}
              </Button>
              <Button onClick={resetExercise} variant="outline">
                <RotateCcw className="h-4 w-4" />
              </Button>
            </div>
            
            {cycle >= totalCycles && (
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <p className="text-green-700 font-medium">Exercise Complete!</p>
                <p className="text-green-600 text-sm">Great job on completing your breathing session.</p>
              </div>
            )}
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold mb-2">Benefits</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Reduces stress and anxiety</li>
              <li>• Improves focus and concentration</li>
              <li>• Lowers heart rate and blood pressure</li>
              <li>• Enhances sleep quality</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BreathingExercise;
