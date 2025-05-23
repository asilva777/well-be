import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const HRVChart = () => {
  const data = [
    { day: 'Mon', hrv: 42, trend: 'stable' },
    { day: 'Tue', hrv: 45, trend: 'up' },
    { day: 'Wed', hrv: 38, trend: 'down' },
    { day: 'Thu', hrv: 52, trend: 'up' },
    { day: 'Fri', hrv: 48, trend: 'stable' },
    { day: 'Sat', hrv: 55, trend: 'up' },
    { day: 'Sun', hrv: 51, trend: 'stable' }
  ];

  return (
    <Card className="col-span-1 md:col-span-2">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="w-3 h-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-full"></div>
          HRV Trend (7 Days)
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis 
                dataKey="day" 
                axisLine={false}
                tickLine={false}
                className="text-sm"
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                className="text-sm"
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="hrv" 
                stroke="url(#gradient)" 
                strokeWidth={3}
                dot={{ fill: '#ef4444', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, fill: '#ef4444' }}
              />
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#ef4444" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 flex justify-between text-sm text-muted-foreground">
          <span>Average: 47 ms</span>
          <span className="text-green-600">↗ +8% this week</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default HRVChart;
