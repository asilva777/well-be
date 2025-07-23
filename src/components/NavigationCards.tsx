import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Star, Clock, Users } from 'lucide-react';

const NavigationCards = () => {
  const quickLinks = [
    {
      title: 'Breathing Exercise',
      description: 'Guided breathing sessions for stress relief',
      icon: '🧘‍♀️',
      route: '/breathing-exercise',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      stats: '5 min sessions',
      rating: 4.8
    },
    {
      title: 'Quick Workout',
      description: 'High-intensity interval training routines',
      icon: '💪',
      route: '/quick-workout',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      stats: '15-30 min',
      rating: 4.9
    },
    {
      title: 'Sleep Stories',
      description: 'Relaxing bedtime stories for better sleep',
      icon: '🌙',
      route: '/sleep-stories',
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'bg-purple-50',
      stats: '20+ stories',
      rating: 4.7
    },
    {
      title: 'Device Sync',
      description: 'Connect your fitness trackers and devices',
      icon: '📱',
      route: '/device-connections',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      stats: '10+ devices',
      rating: 4.6
    }
  ];

  return (
    <div className="py-6">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2 text-gray-800">Quick Access</h3>
        <p className="text-gray-600">Jump into your favorite wellness activities</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {quickLinks.map((link, index) => (
          <Card key={index} className={`relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${link.bgColor} border-0 cursor-pointer group`}>
            <CardContent className="p-6">
              <div className="text-center space-y-4">
                <div className="text-4xl mb-2">{link.icon}</div>
                <h4 className="font-semibold text-gray-800">{link.title}</h4>
                <p className="text-sm text-gray-600 mb-3">{link.description}</p>
                
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {link.stats}
                  </div>
                  <div className="flex items-center">
                    <Star className="w-3 h-3 mr-1 text-yellow-500" />
                    {link.rating}
                  </div>
                </div>
                
                <Button 
                  size="sm" 
                  className={`w-full bg-gradient-to-r ${link.color} text-white hover:shadow-lg group-hover:scale-105 transition-all`}
                  onClick={() => window.location.href = link.route}
                >
                  Start Now
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </CardContent>
            
            {/* Animated background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default NavigationCards;
