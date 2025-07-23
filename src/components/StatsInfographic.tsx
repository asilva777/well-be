import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Target, Award, Flame } from 'lucide-react';

const StatsInfographic = () => {
  const stats = [
    { label: 'Weekly Goal', value: 85, icon: Target, color: 'text-blue-600', bg: 'bg-blue-100' },
    { label: 'Recovery Score', value: 92, icon: TrendingUp, color: 'text-green-600', bg: 'bg-green-100' },
    { label: 'Streak Days', value: 78, icon: Flame, color: 'text-orange-600', bg: 'bg-orange-100' },
    { label: 'Achievements', value: 67, icon: Award, color: 'text-purple-600', bg: 'bg-purple-100' }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div className={`p-2 rounded-lg ${stat.bg}`}>
                  <Icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <Badge variant="secondary" className="text-xs">
                  {stat.value > 80 ? 'Excellent' : stat.value > 60 ? 'Good' : 'Needs Work'}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-gray-600">{stat.label}</CardTitle>
                  <span className="text-2xl font-bold">{stat.value}%</span>
                </div>
                <Progress value={stat.value} className="h-2" />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>0%</span>
                  <span>100%</span>
                </div>
              </div>
            </CardContent>
            
            {/* Animated background element */}
            <div className={`absolute -top-4 -right-4 w-16 h-16 ${stat.bg} rounded-full opacity-20 animate-pulse`}></div>
          </Card>
        );
      })}
    </div>
  );
};

export default StatsInfographic;
