import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { RefreshCw, TrendingUp, Database, Link } from 'lucide-react';

const DataLinkagePanel = () => {
  const cognitioApps = [
    {
      name: 'Resilience Navigator',
      url: 'https://resilienceone.appimize.app/resilience-navigator',
      status: 'Connected',
      lastSync: '2 hours ago',
      dataPoints: 127
    },
    {
      name: 'SMART Emotion Tracker',
      url: 'https://resilienceone.appimize.app/journal',
      status: 'Connected',
      lastSync: '1 hour ago',
      dataPoints: 89
    },
    {
      name: 'Habit Designer',
      url: 'https://resilienceone.appimize.app/habit-designer',
      status: 'Pending',
      lastSync: 'Never',
      dataPoints: 0
    },
    {
      name: 'Oasis',
      url: 'https://resilienceone.appimize.app/oasis',
      status: 'Connected',
      lastSync: '30 mins ago',
      dataPoints: 45
    }
  ];

  const crossAnalysisData = [
    { metric: 'Stress vs Sleep', correlation: 0.78, trend: 'improving' },
    { metric: 'HRV vs Resilience', correlation: 0.65, trend: 'stable' },
    { metric: 'Habits vs Wellness', correlation: 0.82, trend: 'improving' }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5" />
            Cognitio+ Integration Hub
          </CardTitle>
          <CardDescription>
            Cross-sectional analysis and data linkages across Well-Be features
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="connections" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="connections">Connections</TabsTrigger>
              <TabsTrigger value="analysis">Cross-Analysis</TabsTrigger>
              <TabsTrigger value="insights">Insights</TabsTrigger>
            </TabsList>
            
            <TabsContent value="connections" className="space-y-4">
              {cognitioApps.map((app, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <h4 className="font-medium">{app.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          Last sync: {app.lastSync} • {app.dataPoints} data points
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={app.status === 'Connected' ? 'default' : 'secondary'}>
                          {app.status}
                        </Badge>
                        <Button size="sm" variant="outline">
                          <RefreshCw className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            
            <TabsContent value="analysis" className="space-y-4">
              {crossAnalysisData.map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">{item.metric}</h4>
                        <p className="text-sm text-muted-foreground">
                          Correlation: {item.correlation}
                        </p>
                      </div>
                      <Badge variant={item.trend === 'improving' ? 'default' : 'secondary'}>
                        <TrendingUp className="h-3 w-3 mr-1" />
                        {item.trend}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            
            <TabsContent value="insights">
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-medium mb-2">Key Insights</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Higher resilience scores correlate with better sleep quality</li>
                    <li>• Consistent habit tracking improves overall wellness metrics</li>
                    <li>• Emotional regulation impacts HRV measurements significantly</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default DataLinkagePanel;
