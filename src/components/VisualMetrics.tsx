import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

const VisualMetrics = () => {
  const metrics = [
    {
      title: 'Heart Rate Variability',
      value: 42,
      unit: 'ms',
      change: 8.5,
      trend: 'up',
      color: 'from-red-400 to-red-600',
      bgColor: 'bg-red-50',
      description: 'Excellent recovery state'
    },
    {
      title: 'Stress Level',
      value: 23,
      unit: '%',
      change: -12.3,
      trend: 'down',
      color: 'from-orange-400 to-orange-600',
      bgColor: 'bg-orange-50',
      description: 'Significant improvement'
    },
    {
      title: 'Sleep Quality',
      value: 87,
      unit: '%',
      change: 0,
      trend: 'stable',
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-blue-50',
      description: 'Consistent performance'
    },
    {
      title: 'Activity Score',
      value: 94,
      unit: 'pts',
      change: 15.2,
      trend: 'up',
      color: 'from-green-400 to-green-600',
      bgColor: 'bg-green-50',
      description: 'Outstanding progress'
    }
  ];

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="w-4 h-4 text-green-500" />;
      case 'down': return <TrendingDown className="w-4 h-4 text-red-500" />;
      default: return <Minus className="w-4 h-4 text-gray-500" />;
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up': return 'text-green-600 bg-green-100';
      case 'down': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {metrics.map((metric, index) => (
        <Card key={index} className={`relative overflow-hidden hover:shadow-lg transition-all duration-300 ${metric.bgColor} border-0`}>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-gray-600">{metric.title}</CardTitle>
              <Badge className={`text-xs ${getTrendColor(metric.trend)}`}>
                {getTrendIcon(metric.trend)}
                {metric.change !== 0 && (
                  <span className="ml-1">
                    {metric.change > 0 ? '+' : ''}{metric.change}%
                  </span>
                )}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-baseline">
                <span className="text-3xl font-bold text-gray-900">{metric.value}</span>
                <span className="text-sm text-gray-500 ml-1">{metric.unit}</span>
              </div>
              
              <Progress 
                value={metric.value > 100 ? 100 : metric.value} 
                className="h-2"
              />
              
              <p className="text-xs text-gray-600">{metric.description}</p>
            </div>
          </CardContent>
          
          {/* Animated gradient background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-10 animate-pulse`}></div>
          
          {/* Decorative elements */}
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-white/30 rounded-full animate-bounce" style={{ animationDelay: `${index * 0.2}s` }}></div>
        </Card>
      ))}
    </div>
  );
};

export default VisualMetrics;
