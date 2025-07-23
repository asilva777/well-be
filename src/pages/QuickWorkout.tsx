import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Play, Pause, SkipForward, ArrowLeft, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const QuickWorkout = () => {
  const navigate = useNavigate();
  const [selectedWorkout, setSelectedWorkout] = useState<number | null>(null);
  const [isActive, setIsActive] = useState(false);
  const [currentExercise, setCurrentExercise] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isResting, setIsResting] = useState(false);
  
  const workouts = [
    {
      id: 1,
      name: 'Morning Energizer',
      duration: '7 min',
      exercises: 8,
      difficulty: 'Easy',
      color: 'bg-yellow-500',
      exerciseList: ['Jumping Jacks', 'Push-ups', 'Squats', 'Plank', 'Lunges', 'Mountain Climbers', 'Burpees', 'Stretching']
    },
    {
      id: 2,
      name: 'HIIT Blast',
      duration: '12 min',
      exercises: 6,
      difficulty: 'Hard',
      color: 'bg-red-500',
      exerciseList: ['Burpees', 'High Knees', 'Jump Squats', 'Push-ups', 'Mountain Climbers', 'Cool Down']
    },
    {
      id: 3,
      name: 'Core Focus',
      duration: '10 min',
      exercises: 7,
      difficulty: 'Medium',
      color: 'bg-blue-500',
      exerciseList: ['Plank', 'Crunches', 'Russian Twists', 'Leg Raises', 'Dead Bug', 'Side Plank', 'Stretching']
    }
  ];

  const currentWorkout = workouts.find(w => w.id === selectedWorkout);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && currentWorkout) {
      if (isResting) {
        setIsResting(false);
        setTimeLeft(30);
        setCurrentExercise(prev => prev + 1);
      } else if (currentExercise < currentWorkout.exerciseList.length - 1) {
        setIsResting(true);
        setTimeLeft(10);
      } else {
        setIsActive(false);
        setCurrentExercise(0);
        setTimeLeft(30);
      }
    }
    
    return () => clearInterval(interval);
  }, [isActive, timeLeft, currentExercise, isResting, currentWorkout]);

  const startWorkout = (workoutId: number) => {
    setSelectedWorkout(workoutId);
    setCurrentExercise(0);
    setTimeLeft(30);
    setIsResting(false);
    setIsActive(true);
  };

  const toggleWorkout = () => {
    setIsActive(!isActive);
  };

  const skipExercise = () => {
    if (currentWorkout && currentExercise < currentWorkout.exerciseList.length - 1) {
      setCurrentExercise(prev => prev + 1);
      setTimeLeft(30);
      setIsResting(false);
    }
  };

  const resetWorkout = () => {
    setIsActive(false);
    setSelectedWorkout(null);
    setCurrentExercise(0);
    setTimeLeft(30);
    setIsResting(false);
  };

  if (selectedWorkout && currentWorkout) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 p-4">
        <div className="max-w-md mx-auto space-y-6">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={resetWorkout}
              className="p-2"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <h1 className="text-2xl font-bold">{currentWorkout.name}</h1>
          </div>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="mb-4">
                <div className="text-6xl font-bold mb-2">{timeLeft}</div>
                <div className="text-lg text-muted-foreground">
                  {isResting ? 'Rest' : currentWorkout.exerciseList[currentExercise]}
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span>Exercise {currentExercise + 1} of {currentWorkout.exerciseList.length}</span>
                  <span>{Math.round(((currentExercise) / currentWorkout.exerciseList.length) * 100)}%</span>
                </div>
                <Progress 
                  value={((currentExercise) / currentWorkout.exerciseList.length) * 100} 
                  className="w-full" 
                />
              </div>
              
              <div className="flex gap-2 justify-center">
                <Button
                  onClick={toggleWorkout}
                  className="flex-1"
                  variant={isActive ? "secondary" : "default"}
                >
                  {isActive ? (
                    <><Pause className="h-4 w-4 mr-2" />Pause</>
                  ) : (
                    <><Play className="h-4 w-4 mr-2" />Resume</>
                  )}
                </Button>
                <Button onClick={skipExercise} variant="outline">
                  <SkipForward className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Next Exercises</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {currentWorkout.exerciseList.slice(currentExercise + 1, currentExercise + 4).map((exercise, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-xs">
                      {currentExercise + index + 2}
                    </div>
                    <span>{exercise}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 p-4">
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
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Zap className="h-6 w-6" />
            Quick Workouts
          </h1>
        </div>

        <div className="space-y-4">
          {workouts.map((workout) => (
            <Card key={workout.id} className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex">
                  <div className={`w-20 h-20 ${workout.color} flex items-center justify-center`}>
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1 p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold">{workout.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {workout.duration} • {workout.exercises} exercises
                        </p>
                      </div>
                      <Badge 
                        variant={workout.difficulty === 'Easy' ? 'secondary' : 
                                workout.difficulty === 'Medium' ? 'default' : 'destructive'}
                        className="text-xs"
                      >
                        {workout.difficulty}
                      </Badge>
                    </div>
                    <Button
                      size="sm"
                      onClick={() => startWorkout(workout.id)}
                      className="w-full"
                    >
                      <Play className="h-4 w-4 mr-2" />
                      Start Workout
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickWorkout;
