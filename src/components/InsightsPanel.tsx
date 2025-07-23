import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Brain, TrendingUp, AlertCircle, Lightbulb } from 'lucide-react';

const InsightsPanel = () => {
  const insights = [
    {
      type: 'positive',
      title: 'Great Recovery!',
      description: 'Your HRV improved 15% after yesterday\'s meditation session.',
      icon: TrendingUp,
      color: 'text-green-500',
      bgColor: 'bg-green-50',
      action: 'View Details'
    },
    {
      type: 'warning',
      title: 'Stress Alert',
      description: 'Elevated stress detected. Consider a breathing exercise.',
      icon: AlertCircle,
      color: 'text-orange-500',
      bgColor: 'bg-orange-50',
      action: 'Start Exercise'
    },
    {
      type: 'tip',
      title: 'Sleep Optimization',
      description: 'Going to bed 30min earlier could improve your recovery by 12%.',
      icon: Lightbulb,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
      action: 'Learn More'
    }
  ];

  const trends = [
    { metric: 'HRV Trend', change: '+8%', period: '7 days', positive: true },
    { metric: 'Sleep Quality', change: '+12%', period: '30 days', positive: true },
    { metric: 'Stress Level', change: '-5%', period: '14 days', positive: true },
    { metric: 'Activity Score', change: '+3%', period: '7 days', positive: true }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-purple-500" />
            AI Insights
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {insights.map((insight, index) => {
              const Icon = insight.icon;
              return (
                <div key={index} className={`p-4 rounded-lg ${insight.bgColor} border-l-4 border-l-current`}>
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-full bg-white`}>
                      <Icon className={`h-4 w-4 ${insight.color}`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium mb-1">{insight.title}</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        {insight.description}
                      </p>
                      <Button size="sm" variant="outline">
                        {insight.action}
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Health Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            {trends.map((trend, index) => (
              <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-sm text-muted-foreground">{trend.metric}</div>
                <div className={`text-lg font-bold ${trend.positive ? 'text-green-600' : 'text-red-600'}`}>
                  {trend.change}
                </div>
                <div className="text-xs text-muted-foreground">{trend.period}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InsightsPanel;
