import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Smartphone, Brain, Moon, Dumbbell, Heart, Zap } from 'lucide-react';

const FeatureShowcase = () => {
  const features = [
    {
      icon: Heart,
      title: 'HRV Analysis',
      description: 'Advanced heart rate variability monitoring with AI insights',
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-50',
      textColor: 'text-red-600',
      route: '/hrv-analysis'
    },
    {
      icon: Brain,
      title: 'Stress Management',
      description: 'Personalized breathing exercises and meditation guides',
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
      route: '/breathing-exercise'
    },
    {
      icon: Moon,
      title: 'Sleep Optimization',
      description: 'Sleep stories and relaxation techniques for better rest',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      route: '/sleep-stories'
    },
    {
      icon: Dumbbell,
      title: 'Quick Workouts',
      description: 'Efficient exercise routines tailored to your fitness level',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
      route: '/quick-workout'
    },
    {
      icon: Smartphone,
      title: 'Device Sync',
      description: 'Connect with popular fitness trackers and health devices',
      color: 'from-orange-500 to-yellow-500',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600',
      route: '/device-connections'
    },
    {
      icon: Zap,
      title: 'Premium Features',
      description: 'Unlock advanced analytics and personalized coaching',
      color: 'from-yellow-500 to-amber-500',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-600',
      route: '/subscription-plans'
    }
  ];

  return (
    <div className="py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Discover Your Wellness Journey
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our comprehensive suite of health and wellness features designed to optimize your daily life
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Card key={index} className={`relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${feature.bgColor} border-0`}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${feature.color} text-white`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    Explore
                  </Badge>
                </div>
                <CardTitle className={`text-xl ${feature.textColor}`}>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <Button 
                  variant="ghost" 
                  className={`w-full ${feature.textColor} hover:bg-white/50 group`}
                  onClick={() => window.location.href = feature.route}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
              
              {/* Animated background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-5 animate-pulse`}></div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default FeatureShowcase;
