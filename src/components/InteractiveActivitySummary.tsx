import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Target, Flame, Clock, Trophy, Plus, Edit } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const InteractiveActivitySummary = () => {
  const [goals, setGoals] = useState({
    steps: { current: 8247, target: 10000 },
    calories: { current: 420, target: 500 },
    activeTime: { current: 45, target: 60 },
    workouts: { current: 4, target: 5 }
  });
  
  const [editingGoal, setEditingGoal] = useState(null);
  const [newTarget, setNewTarget] = useState('');

  const activities = [
    { name: 'Steps', icon: Target, key: 'steps', unit: 'steps', color: 'text-blue-600' },
    { name: 'Calories', icon: Flame, key: 'calories', unit: 'cal', color: 'text-red-600' },
    { name: 'Active Time', icon: Clock, key: 'activeTime', unit: 'min', color: 'text-green-600' },
    { name: 'Workouts', icon: Trophy, key: 'workouts', unit: 'sessions', color: 'text-purple-600' }
  ];

  const updateGoal = (key, newTargetValue) => {
    setGoals(prev => ({
      ...prev,
      [key]: { ...prev[key], target: parseInt(newTargetValue) }
    }));
    setEditingGoal(null);
    setNewTarget('');
  };

  const getProgressColor = (percentage) => {
    if (percentage >= 100) return 'bg-green-500';
    if (percentage >= 75) return 'bg-blue-500';
    if (percentage >= 50) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getAchievementBadge = (percentage) => {
    if (percentage >= 100) return { text: 'Goal Achieved!', color: 'bg-green-100 text-green-800' };
    if (percentage >= 75) return { text: 'Almost There', color: 'bg-blue-100 text-blue-800' };
    if (percentage >= 50) return { text: 'Good Progress', color: 'bg-yellow-100 text-yellow-800' };
    return { text: 'Keep Going', color: 'bg-red-100 text-red-800' };
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Today's Activity Goals</span>
          <Badge variant="outline" className="text-xs">
            {activities.filter(a => (goals[a.key].current / goals[a.key].target) >= 1).length}/{activities.length} Complete
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {activities.map((activity) => {
            const Icon = activity.icon;
            const goal = goals[activity.key];
            const percentage = Math.min((goal.current / goal.target) * 100, 100);
            const achievement = getAchievementBadge(percentage);
            
            return (
              <Dialog key={activity.key}>
                <DialogTrigger asChild>
                  <div className="p-4 border rounded-lg hover:shadow-md transition-all cursor-pointer hover:scale-105">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Icon className={`h-5 w-5 ${activity.color}`} />
                        <span className="font-medium">{activity.name}</span>
                      </div>
                      <Badge className={achievement.color}>
                        {achievement.text}
                      </Badge>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{goal.current.toLocaleString()} {activity.unit}</span>
                        <span className="text-muted-foreground">
                          {goal.target.toLocaleString()} {activity.unit}
                        </span>
                      </div>
                      <Progress 
                        value={percentage} 
                        className="h-2"
                      />
                      <div className="text-right text-xs text-muted-foreground">
                        {percentage.toFixed(0)}% complete
                      </div>
                    </div>
                  </div>
                </DialogTrigger>
                
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                      <Icon className={`h-5 w-5 ${activity.color}`} />
                      {activity.name} Details
                    </DialogTitle>
                  </DialogHeader>
                  
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">
                        {goal.current.toLocaleString()}
                      </div>
                      <div className="text-muted-foreground">
                        of {goal.target.toLocaleString()} {activity.unit}
                      </div>
                      <Progress value={percentage} className="mt-4 h-3" />
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Goal Management</h4>
                      <div className="flex items-center gap-2">
                        <Label>Target:</Label>
                        {editingGoal === activity.key ? (
                          <div className="flex gap-2">
                            <Input 
                              type="number" 
                              value={newTarget}
                              onChange={(e) => setNewTarget(e.target.value)}
                              placeholder={goal.target.toString()}
                              className="w-24"
                            />
                            <Button 
                              size="sm" 
                              onClick={() => updateGoal(activity.key, newTarget)}
                            >
                              Save
                            </Button>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <span>{goal.target} {activity.unit}</span>
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => {
                                setEditingGoal(activity.key);
                                setNewTarget(goal.target.toString());
                              }}
                            >
                              <Edit className="h-3 w-3" />
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-blue-800">Progress Insights</h4>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• {percentage >= 100 ? 'Congratulations! Goal achieved!' : `${(goal.target - goal.current).toLocaleString()} ${activity.unit} remaining`}</li>
                        <li>• {percentage >= 75 ? 'Excellent progress today!' : 'Keep pushing towards your goal!'}</li>
                        {activity.key === 'steps' && (
                          <li>• Average pace: {Math.round(goal.current / 16)} steps/hour</li>
                        )}
                      </ul>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            );
          })}
        </div>
        
        <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">Weekly Challenge</h3>
              <p className="text-sm text-muted-foreground">Complete all daily goals 5 times this week</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">3/5</div>
              <div className="text-xs text-muted-foreground">days completed</div>
            </div>
          </div>
          <Progress value={60} className="mt-3" />
        </div>
      </CardContent>
    </Card>
  );
};

export default InteractiveActivitySummary;
