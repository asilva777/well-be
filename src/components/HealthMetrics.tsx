import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Heart, Activity, Moon, Zap } from 'lucide-react';

const HealthMetrics = () => {
  const metrics = [
    {
      title: 'HRV Score',
      value: 45,
      max: 100,
      icon: Heart,
      color: 'text-red-500',
      bgColor: 'bg-red-50',
      description: 'Heart Rate Variability'
    },
    {
      title: 'Stress Level',
      value: 32,
      max: 100,
      icon: Activity,
      color: 'text-orange-500',
      bgColor: 'bg-orange-50',
      description: 'Current stress index'
    },
    {
      title: 'Sleep Quality',
      value: 78,
      max: 100,
      icon: Moon,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
      description: 'Last night recovery'
    },
    {
      title: 'Energy Level',
      value: 65,
      max: 100,
      icon: Zap,
      color: 'text-green-500',
      bgColor: 'bg-green-50',
      description: 'Current energy battery'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        return (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {metric.title}
              </CardTitle>
              <div className={`p-2 rounded-full ${metric.bgColor}`}>
                <Icon className={`h-4 w-4 ${metric.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-2">{metric.value}</div>
              <Progress value={metric.value} className="mb-2" />
              <p className="text-xs text-muted-foreground">
                {metric.description}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default HealthMetrics;
