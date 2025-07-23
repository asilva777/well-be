import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Crown, Heart, Zap } from 'lucide-react';

const SubscriptionPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const plans = [
    {
      id: 'free',
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'Basic health tracking',
      features: [
        'Basic HRV monitoring',
        'Daily health insights',
        'Limited breathing exercises',
        'Community support'
      ],
      icon: Heart,
      popular: false
    },
    {
      id: 'premium',
      name: 'Premium',
      price: '$9.99',
      period: 'month',
      description: 'Advanced wellness features',
      features: [
        'Advanced HRV analytics',
        'Personalized recommendations',
        'All breathing exercises',
        'Sleep story library',
        'Workout routines',
        'Priority support'
      ],
      icon: Zap,
      popular: true
    },
    {
      id: 'pro',
      name: 'Pro',
      price: '$19.99',
      period: 'month',
      description: 'Complete health optimization',
      features: [
        'Everything in Premium',
        'AI health coaching',
        'Advanced biometric tracking',
        'Custom workout plans',
        'Nutrition guidance',
        'Health professional consultations'
      ],
      icon: Crown,
      popular: false
    }
  ];

  const handleSubscribe = async (planId: string) => {
    setSelectedPlan(planId);
    setIsLoading(true);
    
    // Simulate subscription process
    setTimeout(() => {
      setIsLoading(false);
      setSelectedPlan(null);
      alert(`Successfully subscribed to ${plans.find(p => p.id === planId)?.name} plan!`);
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Choose Your Wellness Journey</h1>
        <p className="text-muted-foreground">Unlock your full health potential with our premium features</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {plans.map((plan) => {
          const IconComponent = plan.icon;
          const isSelected = selectedPlan === plan.id;
          
          return (
            <Card key={plan.id} className={`relative ${plan.popular ? 'border-2 border-blue-500 shadow-lg' : ''} ${isSelected ? 'ring-2 ring-blue-500' : ''}`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500">
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 w-fit">
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <Button 
                  className="w-full" 
                  variant={plan.id === 'free' ? 'outline' : 'default'}
                  onClick={() => handleSubscribe(plan.id)}
                  disabled={isLoading && isSelected}
                >
                  {isLoading && isSelected ? 'Processing...' : 
                   plan.id === 'free' ? 'Current Plan' : 'Subscribe Now'}
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
      
      <div className="text-center mt-8 text-sm text-muted-foreground">
        <p>All plans include a 7-day free trial. Cancel anytime.</p>
      </div>
    </div>
  );
};

export default SubscriptionPlans;
