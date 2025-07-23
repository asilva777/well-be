import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Activity, Heart, Zap, TrendingUp } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#c80ec9] via-[#b425aa] to-[#c80ec9] text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-20 h-20 bg-[#f3e329] rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-[#f3e329] rounded-full animate-ping"></div>
      </div>
      
      <div className="relative container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-[#f3e329] text-[#c80ec9] border-[#f3e329]">
            <Zap className="w-4 h-4 mr-1" />
            AI-Powered Health Insights
          </Badge>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-[#f3e329] bg-clip-text text-transparent font-[Oswald]">
            Your Health,
            <br />Optimized Daily
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto font-[Roboto_Condensed]">
            Track, analyze, and improve your wellness with real-time HRV monitoring, personalized insights, and actionable recommendations.
          </p>
          <Button size="lg" className="bg-[#f3e329] text-[#c80ec9] hover:bg-[#f3e329]/90 font-semibold px-8 py-3 font-[Montserrat]">
            Start Your Journey
          </Button>
        </div>
        
        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <Card className="bg-white/10 border-[#f3e329]/20 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <Heart className="w-12 h-12 mx-auto mb-4 text-[#f3e329]" />
              <h3 className="text-xl font-semibold mb-2 font-[Oswald]">HRV Monitoring</h3>
              <p className="text-white/90 font-[Roboto_Condensed]">Real-time heart rate variability tracking for optimal recovery</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 border-[#f3e329]/20 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <Activity className="w-12 h-12 mx-auto mb-4 text-[#f3e329]" />
              <h3 className="text-xl font-semibold mb-2 font-[Oswald]">Activity Insights</h3>
              <p className="text-white/90 font-[Roboto_Condensed]">Comprehensive analysis of your daily movement patterns</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 border-[#f3e329]/20 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <TrendingUp className="w-12 h-12 mx-auto mb-4 text-[#f3e329]" />
              <h3 className="text-xl font-semibold mb-2 font-[Oswald]">Progress Tracking</h3>
              <p className="text-white/90 font-[Roboto_Condensed]">Visual trends and personalized recommendations</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
