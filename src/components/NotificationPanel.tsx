import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Bell, Heart, Activity, Moon, Zap, X } from 'lucide-react';

interface NotificationPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const NotificationPanel = ({ isOpen, onClose }: NotificationPanelProps) => {
  const notifications = [
    {
      id: 1,
      type: 'health',
      icon: Heart,
      title: 'HRV Reading Available',
      message: 'Your morning HRV measurement is ready for review.',
      time: '5 min ago',
      unread: true
    },
    {
      id: 2,
      type: 'reminder',
      icon: Activity,
      title: 'Time for Movement',
      message: 'You\'ve been sitting for 2 hours. Take a quick walk!',
      time: '15 min ago',
      unread: true
    },
    {
      id: 3,
      type: 'sleep',
      icon: Moon,
      title: 'Sleep Goal Achieved',
      message: 'Great job! You got 8 hours of quality sleep last night.',
      time: '2 hours ago',
      unread: false
    },
    {
      id: 4,
      type: 'wellness',
      icon: Zap,
      title: 'Weekly Progress',
      message: 'Your wellness score improved by 12% this week!',
      time: '1 day ago',
      unread: false
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'health': return 'text-red-500';
      case 'reminder': return 'text-blue-500';
      case 'sleep': return 'text-purple-500';
      case 'wellness': return 'text-green-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            Notifications
          </DialogTitle>
        </DialogHeader>
        
        <ScrollArea className="h-96">
          <div className="space-y-3">
            {notifications.map((notification) => {
              const IconComponent = notification.icon;
              return (
                <div key={notification.id} className={`p-3 rounded-lg border ${notification.unread ? 'bg-blue-50 border-blue-200' : 'bg-gray-50 border-gray-200'}`}>
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-full bg-white ${getTypeColor(notification.type)}`}>
                      <IconComponent className="h-4 w-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium text-sm">{notification.title}</h4>
                        {notification.unread && (
                          <Badge variant="secondary" className="text-xs px-1 py-0">New</Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{notification.message}</p>
                      <p className="text-xs text-muted-foreground mt-2">{notification.time}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollArea>
        
        <div className="flex gap-2">
          <Button variant="outline" className="flex-1" onClick={onClose}>
            Mark All Read
          </Button>
          <Button className="flex-1" onClick={onClose}>
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NotificationPanel;
