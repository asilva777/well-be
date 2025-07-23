import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Bell, Shield, Smartphone, Moon, Heart, Activity } from 'lucide-react';
import { AppLayout } from '@/components/AppLayout';

const Settings = () => {
  const [notifications, setNotifications] = useState({
    push: true,
    email: false,
    hrv: true,
    sleep: true,
    activity: false
  });

  const [privacy, setPrivacy] = useState({
    dataSharing: false,
    analytics: true
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
            <p className="text-gray-600">Manage your preferences and account settings</p>
          </div>

          {/* Notifications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notifications
              </CardTitle>
              <CardDescription>
                Choose what notifications you'd like to receive
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Push Notifications</Label>
                  <p className="text-sm text-gray-500">Receive notifications on your device</p>
                </div>
                <Switch 
                  checked={notifications.push}
                  onCheckedChange={(checked) => setNotifications(prev => ({...prev, push: checked}))}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <Label>Email Notifications</Label>
                  <p className="text-sm text-gray-500">Receive weekly health summaries</p>
                </div>
                <Switch 
                  checked={notifications.email}
                  onCheckedChange={(checked) => setNotifications(prev => ({...prev, email: checked}))}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Heart className="h-4 w-4 text-red-500" />
                  <div>
                    <Label>HRV Alerts</Label>
                    <p className="text-sm text-gray-500">Get notified of significant HRV changes</p>
                  </div>
                </div>
                <Switch 
                  checked={notifications.hrv}
                  onCheckedChange={(checked) => setNotifications(prev => ({...prev, hrv: checked}))}
                />
              </div>
            </CardContent>
          </Card>

          {/* Privacy & Security */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Privacy & Security
              </CardTitle>
              <CardDescription>
                Control how your data is used and shared
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Data Sharing</Label>
                  <p className="text-sm text-gray-500">Share anonymized data for research</p>
                </div>
                <Switch 
                  checked={privacy.dataSharing}
                  onCheckedChange={(checked) => setPrivacy(prev => ({...prev, dataSharing: checked}))}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <Label>Analytics</Label>
                  <p className="text-sm text-gray-500">Help improve the app with usage analytics</p>
                </div>
                <Switch 
                  checked={privacy.analytics}
                  onCheckedChange={(checked) => setPrivacy(prev => ({...prev, analytics: checked}))}
                />
              </div>
            </CardContent>
          </Card>

          {/* Device Connections */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Smartphone className="h-5 w-5" />
                Connected Devices
              </CardTitle>
              <CardDescription>
                Manage your connected health devices
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">Apple Watch Series 8</p>
                    <p className="text-sm text-gray-500">Connected • Last sync: 2 minutes ago</p>
                  </div>
                  <Button variant="outline" size="sm">Disconnect</Button>
                </div>
                <Button className="w-full" variant="outline">
                  + Add New Device
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end pt-6">
            <Button>Save Changes</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
