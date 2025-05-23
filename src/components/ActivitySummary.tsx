import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Footprints, Flame, Clock, Target } from 'lucide-react';

const ActivitySummary = () => {
  const activities = [
    {
      name: 'Steps',
      current: 8420,
      goal: 10000,
      icon: Footprints,
      color: 'text-blue-500',
      unit: 'steps'
    },
    {
      name: 'Calories',
      current: 1850,
      goal: 2200,
      icon: Flame,
      color: 'text-orange-500',
      unit: 'kcal'
    },
    {
      name: 'Active Time',
      current: 45,
      goal: 60,
      icon: Clock,
      color: 'text-green-500',
      unit: 'min'
    }
  ];

  const workouts = [
    { name: 'Morning Run', duration: '32 min', intensity: 'Moderate', zone: 'Zone 3' },
    { name: 'Yoga Session', duration: '20 min', intensity: 'Light', zone: 'Zone 1' },
    { name: 'Strength Training', duration: '45 min', intensity: 'High', zone: 'Zone 4' }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-green-500" />
            Today's Goals
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {activities.map((activity, index) => {
              const Icon = activity.icon;
              const percentage = (activity.current / activity.goal) * 100;
              return (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Icon className={`h-4 w-4 ${activity.color}`} />
                      <span className="font-medium">{activity.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {activity.current.toLocaleString()} / {activity.goal.toLocaleString()} {activity.unit}
                    </span>
                  </div>
                  <Progress value={percentage} className="h-2" />
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Workouts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {workouts.map((workout, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium">{workout.name}</div>
                  <div className="text-sm text-muted-foreground">{workout.duration}</div>
                </div>
                <div className="flex gap-2">
                  <Badge variant={workout.intensity === 'High' ? 'destructive' : workout.intensity === 'Moderate' ? 'default' : 'secondary'}>
                    {workout.intensity}
                  </Badge>
                  <Badge variant="outline">{workout.zone}</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ActivitySummary;
