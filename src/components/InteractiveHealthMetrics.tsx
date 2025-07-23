import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Heart, Activity, Moon, Zap, TrendingUp, TrendingDown, Info } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import HRVMeasurementButton from './HRVMeasurementButton';

const InteractiveHealthMetrics = () => {
  const [hrvValue, setHrvValue] = useState(45);
  
  const handleHRVComplete = (result: { hrv: number; heartRate: number }) => {
    setHrvValue(result.hrv);
    console.log('New HRV measurement:', result);
  };
  
  const metrics = [
    {
      title: 'HRV Score',
      value: hrvValue,
      max: 100,
      icon: Heart,
      color: 'text-red-500',
      bgColor: 'bg-red-50',
      description: 'Heart Rate Variability',
      trend: '+5%',
      trendDirection: 'up',
      details: {
        range: 'Normal (40-60 ms)',
        lastWeek: [42, 38, 45, 48, 44, 46, hrvValue],
        insights: 'Your HRV is improving. Consider maintaining current sleep schedule.',
        recommendations: ['Keep consistent sleep times', 'Continue meditation practice']
      },
      hasAction: true
    },
    {
      title: 'Stress Level',
      value: 32,
      max: 100,
      icon: Activity,
      color: 'text-orange-500',
      bgColor: 'bg-orange-50',
      description: 'Current stress index',
      trend: '-12%',
      trendDirection: 'down',
      details: {
        range: 'Low (0-40)',
        lastWeek: [45, 38, 42, 35, 30, 28, 32],
        insights: 'Stress levels are decreasing. Great progress this week!',
        recommendations: ['Continue breathing exercises', 'Maintain work-life balance']
      }
    },
    {
      title: 'Sleep Quality',
      value: 78,
      max: 100,
      icon: Moon,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
      description: 'Last night recovery',
      trend: '+3%',
      trendDirection: 'up',
      details: {
        range: 'Good (70-85)',
        lastWeek: [75, 72, 80, 76, 78, 82, 78],
        insights: 'Sleep quality is consistent. Room temperature may be affecting deep sleep.',
        recommendations: ['Lower room temperature to 65-68°F', 'Avoid screens 1h before bed']
      }
    },
    {
      title: 'Energy Level',
      value: 65,
      max: 100,
      icon: Zap,
      color: 'text-green-500',
      bgColor: 'bg-green-50',
      description: 'Current energy battery',
      trend: '+8%',
      trendDirection: 'up',
      details: {
        range: 'Moderate (60-75)',
        lastWeek: [58, 62, 60, 68, 70, 67, 65],
        insights: 'Energy levels are stable. Consider adding light exercise.',
        recommendations: ['Take 10-min walks after meals', 'Stay hydrated throughout day']
      }
    }
  ];

  const getTrendIcon = (direction) => {
    return direction === 'up' ? 
      <TrendingUp className="h-3 w-3 text-green-600" /> : 
      <TrendingDown className="h-3 w-3 text-red-600" />;
  };

  const getTrendColor = (direction) => {
    return direction === 'up' ? 'text-green-600' : 'text-red-600';
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        return (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <Card className="hover:shadow-lg transition-all cursor-pointer hover:scale-105">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {metric.title}
                  </CardTitle>
                  <div className={`p-2 rounded-full ${metric.bgColor}`}>
                    <Icon className={`h-4 w-4 ${metric.color}`} />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-2xl font-bold">{metric.value}</div>
                    <div className={`flex items-center gap-1 text-xs ${getTrendColor(metric.trendDirection)}`}>
                      {getTrendIcon(metric.trendDirection)}
                      {metric.trend}
                    </div>
                  </div>
                  <Progress value={metric.value} className="mb-2" />
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-muted-foreground">
                      {metric.description}
                    </p>
                    <Info className="h-3 w-3 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <div className={`p-2 rounded-full ${metric.bgColor}`}>
                    <Icon className={`h-4 w-4 ${metric.color}`} />
                  </div>
                  {metric.title} Details
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold">{metric.value}</span>
                  <Badge variant="outline">{metric.details.range}</Badge>
                </div>
                
                {metric.hasAction && (
                  <div className="flex justify-center">
                    <HRVMeasurementButton 
                      onComplete={handleHRVComplete}
                      variant="outline"
                      size="sm"
                    />
                  </div>
                )}
                
                <div>
                  <h4 className="font-semibold mb-2">7-Day Trend</h4>
                  <div className="flex items-end gap-1 h-16">
                    {metric.details.lastWeek.map((value, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center">
                        <div 
                          className={`w-full ${metric.bgColor} rounded-t`}
                          style={{ height: `${(value / metric.max) * 100}%` }}
                        ></div>
                        <span className="text-xs mt-1">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">AI Insights</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    {metric.details.insights}
                  </p>
                  
                  <h4 className="font-semibold mb-2">Recommendations</h4>
                  <ul className="space-y-1">
                    {metric.details.recommendations.map((rec, i) => (
                      <li key={i} className="text-sm flex items-start gap-2">
                        <span className="text-green-600 mt-1">•</span>
                        {rec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        );
      })}
    </div>
  );
};

export default InteractiveHealthMetrics;
