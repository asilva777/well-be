import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { ArrowLeft, Smartphone, Watch, Activity, Wifi, WifiOff, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DeviceConnections = () => {
  const navigate = useNavigate();
  const [connectedDevices, setConnectedDevices] = useState<number[]>([1, 3]);
  
  const devices = [
    {
      id: 1,
      name: 'Apple Watch Series 9',
      type: 'Smartwatch',
      icon: Watch,
      status: 'connected',
      lastSync: '2 min ago',
      battery: 78,
      features: ['Heart Rate', 'Activity', 'Sleep', 'Workouts']
    },
    {
      id: 2,
      name: 'Garmin Forerunner 955',
      type: 'GPS Watch',
      icon: Watch,
      status: 'available',
      lastSync: 'Never',
      battery: null,
      features: ['GPS', 'Heart Rate', 'Training Load', 'Recovery']
    },
    {
      id: 3,
      name: 'iPhone 15 Pro',
      type: 'Smartphone',
      icon: Smartphone,
      status: 'connected',
      lastSync: 'Just now',
      battery: 92,
      features: ['Health App', 'Camera HRV', 'Step Counter']
    },
    {
      id: 4,
      name: 'Oura Ring Gen3',
      type: 'Smart Ring',
      icon: Activity,
      status: 'available',
      lastSync: 'Never',
      battery: null,
      features: ['Sleep', 'HRV', 'Temperature', 'Recovery']
    },
    {
      id: 5,
      name: 'Fitbit Charge 6',
      type: 'Fitness Tracker',
      icon: Activity,
      status: 'available',
      lastSync: 'Never',
      battery: null,
      features: ['Heart Rate', 'Sleep', 'Stress', 'GPS']
    }
  ];

  const toggleConnection = (deviceId: number) => {
    setConnectedDevices(prev => 
      prev.includes(deviceId) 
        ? prev.filter(id => id !== deviceId)
        : [...prev, deviceId]
    );
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'connected': return 'bg-green-500';
      case 'available': return 'bg-gray-400';
      default: return 'bg-red-500';
    }
  };

  const getStatusIcon = (deviceId: number) => {
    const isConnected = connectedDevices.includes(deviceId);
    return isConnected ? (
      <CheckCircle className="h-4 w-4 text-green-500" />
    ) : (
      <WifiOff className="h-4 w-4 text-gray-400" />
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-4">
      <div className="max-w-md mx-auto space-y-6">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/')}
            className="p-2"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Wifi className="h-6 w-6" />
            Device Connections
          </h1>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Connected Devices</CardTitle>
            <p className="text-muted-foreground">
              Manage your wearables and health devices
            </p>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <span className="text-sm">Auto-sync enabled</span>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          {devices.map((device) => {
            const Icon = device.icon;
            const isConnected = connectedDevices.includes(device.id);
            
            return (
              <Card key={device.id} className="overflow-hidden">
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-gray-600" />
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold truncate">{device.name}</h3>
                          <p className="text-sm text-muted-foreground">{device.type}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          {getStatusIcon(device.id)}
                          <Switch 
                            checked={isConnected}
                            onCheckedChange={() => toggleConnection(device.id)}
                          />
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <Badge 
                          variant={isConnected ? "default" : "secondary"}
                          className="text-xs"
                        >
                          {isConnected ? 'Connected' : 'Available'}
                        </Badge>
                        {device.battery && (
                          <Badge variant="outline" className="text-xs">
                            {device.battery}% battery
                          </Badge>
                        )}
                      </div>
                      
                      <div className="mb-3">
                        <p className="text-xs text-muted-foreground mb-1">Features:</p>
                        <div className="flex flex-wrap gap-1">
                          {device.features.map((feature, index) => (
                            <span 
                              key={index}
                              className="text-xs bg-gray-100 px-2 py-1 rounded"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>Last sync: {isConnected ? device.lastSync : 'Never'}</span>
                        {isConnected && (
                          <Button size="sm" variant="ghost" className="h-6 px-2 text-xs">
                            Sync Now
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Data Sync Status</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Heart Rate</span>
              <span className="text-green-600">Synced 2 min ago</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Sleep Data</span>
              <span className="text-green-600">Synced 6 hours ago</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Activity</span>
              <span className="text-green-600">Synced just now</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>HRV Measurements</span>
              <span className="text-green-600">Synced 1 hour ago</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DeviceConnections;
