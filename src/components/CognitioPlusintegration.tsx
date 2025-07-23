import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Zap, Target, BookOpen, Waves } from 'lucide-react';

const CognitioPlusIntegration = () => {
  const cognitioServices = [
    {
      name: 'Resilience Navigator',
      url: 'https://resilienceone.appimize.app/resilience-navigator',
      icon: Target,
      description: 'Build mental resilience and stress management skills',
      integration: 'Sync resilience scores with HRV and stress metrics',
      color: 'bg-blue-500'
    },
    {
      name: 'SMART Emotion Tracker',
      url: 'https://resilienceone.appimize.app/journal',
      icon: BookOpen,
      description: 'Track emotions and journal insights',
      integration: 'Correlate emotional patterns with sleep and wellness data',
      color: 'bg-green-500'
    },
    {
      name: 'Habit Designer',
      url: 'https://resilienceone.appimize.app/habit-designer',
      icon: Zap,
      description: 'Design and track healthy habits',
      integration: 'Link habit completion with health metric improvements',
      color: 'bg-purple-500'
    },
    {
      name: 'Oasis',
      url: 'https://resilienceone.appimize.app/oasis',
      icon: Waves,
      description: 'Mindfulness and meditation sessions',
      integration: 'Connect meditation data with HRV and stress reduction',
      color: 'bg-teal-500'
    }
  ];

  const handleLaunchApp = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded" />
            Cognitio+ Ecosystem
          </CardTitle>
          <CardDescription>
            Integrated micro-apps for comprehensive wellness tracking and analysis
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cognitioServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${service.color}`}>
                        <Icon className="h-4 w-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-base">{service.name}</CardTitle>
                        <Badge variant="secondary" className="mt-1">
                          Active
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      {service.description}
                    </p>
                    <div className="bg-muted/50 p-3 rounded-lg mb-3">
                      <p className="text-xs font-medium text-muted-foreground mb-1">
                        Well-Be Integration:
                      </p>
                      <p className="text-xs">{service.integration}</p>
                    </div>
                    <Button 
                      onClick={() => handleLaunchApp(service.url)}
                      className="w-full"
                      size="sm"
                    >
                      <ExternalLink className="h-3 w-3 mr-2" />
                      Launch App
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Cognitio+ Main Platform</CardTitle>
          <CardDescription>
            Access the full Cognitio+ webapp for comprehensive wellness management
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
            <div>
              <h4 className="font-medium">Cognitio+ WebApp</h4>
              <p className="text-sm text-muted-foreground">
                Central hub for all wellness data and advanced analytics
              </p>
            </div>
            <Button 
              onClick={() => handleLaunchApp('https://cognitioplus.github.io/webapp/')}
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Open Platform
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CognitioPlusIntegration;
