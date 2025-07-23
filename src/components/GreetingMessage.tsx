import React from 'react';

const GreetingMessage = () => {
  const getTimeBasedGreeting = () => {
    const hour = new Date().getHours();
    
    if (hour < 6) {
      return {
        greeting: "Good night",
        message: "Rest is crucial for recovery. Consider winding down for better sleep.",
        icon: "🌙"
      };
    } else if (hour < 12) {
      return {
        greeting: "Good morning",
        message: "Start your day with mindful breathing and stay hydrated.",
        icon: "🌅"
      };
    } else if (hour < 17) {
      return {
        greeting: "Good afternoon",
        message: "Take a moment to check your posture and stretch your body.",
        icon: "☀️"
      };
    } else if (hour < 21) {
      return {
        greeting: "Good evening",
        message: "Wind down gently and prepare your mind for restful sleep.",
        icon: "🌆"
      };
    } else {
      return {
        greeting: "Good night",
        message: "Your body needs rest to heal and recharge. Sweet dreams!",
        icon: "🌙"
      };
    }
  };

  const { greeting, message, icon } = getTimeBasedGreeting();

  return (
    <div className="mt-4">
      <div className="flex items-center gap-2 mb-2">
        <h2 className="text-2xl font-bold">{greeting}! {icon}</h2>
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
      </div>
      <p className="text-muted-foreground">
        {message}
      </p>
    </div>
  );
};

export default GreetingMessage;
