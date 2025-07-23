import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, TrendingUp, TrendingDown } from 'lucide-react';

const InteractiveHRVChart = () => {
  const [selectedPoint, setSelectedPoint] = useState(null);
  const [timeRange, setTimeRange] = useState('7d');
  
  const data = [
    { day: 'Mon', hrv: 42, date: '2024-01-15', stress: 65, sleep: 7.2, recovery: 'Good' },
    { day: 'Tue', hrv: 45, date: '2024-01-16', stress: 58, sleep: 8.1, recovery: 'Excellent' },
    { day: 'Wed', hrv: 38, date: '2024-01-17', stress: 72, sleep: 6.5, recovery: 'Poor' },
    { day: 'Thu', hrv: 52, date: '2024-01-18', stress: 45, sleep: 8.5, recovery: 'Excellent' },
    { day: 'Fri', hrv: 48, date: '2024-01-19', stress: 55, sleep: 7.8, recovery: 'Good' },
    { day: 'Sat', hrv: 55, date: '2024-01-20', stress: 40, sleep: 9.0, recovery: 'Excellent' },
    { day: 'Sun', hrv: 51, date: '2024-01-21', stress: 48, sleep: 8.2, recovery: 'Good' }
  ];

  const handlePointClick = (data) => {
    setSelectedPoint(data.payload);
  };

  const getRecoveryColor = (recovery) => {
    switch(recovery) {
      case 'Excellent': return 'bg-green-100 text-green-800';
      case 'Good': return 'bg-blue-100 text-blue-800';
      case 'Poor': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="col-span-1 md:col-span-2">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-full"></div>
            Interactive HRV Trend
          </CardTitle>
          <div className="flex gap-2">
            <Button 
              variant={timeRange === '7d' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => setTimeRange('7d')}
            >
              7D
            </Button>
            <Button 
              variant={timeRange === '30d' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => setTimeRange('30d')}
            >
              30D
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-64 mb-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} onClick={handlePointClick}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis dataKey="day" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip 
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload;
                    return (
                      <div className="bg-white p-3 border rounded-lg shadow-lg">
                        <p className="font-semibold">{label} - {data.date}</p>
                        <p className="text-red-600">HRV: {data.hrv} ms</p>
                        <p className="text-orange-600">Stress: {data.stress}%</p>
                        <p className="text-blue-600">Sleep: {data.sleep}h</p>
                        <Badge className={getRecoveryColor(data.recovery)}>
                          {data.recovery}
                        </Badge>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Line 
                type="monotone" 
                dataKey="hrv" 
                stroke="#ef4444" 
                strokeWidth={3}
                dot={{ fill: '#ef4444', strokeWidth: 2, r: 4, cursor: 'pointer' }}
                activeDot={{ r: 6, fill: '#ef4444', cursor: 'pointer' }}
              />
              {selectedPoint && (
                <ReferenceLine x={selectedPoint.day} stroke="#ef4444" strokeDasharray="2 2" />
              )}
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        {selectedPoint && (
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="h-4 w-4" />
              <span className="font-semibold">{selectedPoint.day} - {selectedPoint.date}</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">HRV Score</span>
                <p className="font-semibold text-red-600">{selectedPoint.hrv} ms</p>
              </div>
              <div>
                <span className="text-muted-foreground">Stress Level</span>
                <p className="font-semibold text-orange-600">{selectedPoint.stress}%</p>
              </div>
              <div>
                <span className="text-muted-foreground">Sleep Duration</span>
                <p className="font-semibold text-blue-600">{selectedPoint.sleep}h</p>
              </div>
              <div>
                <span className="text-muted-foreground">Recovery</span>
                <Badge className={getRecoveryColor(selectedPoint.recovery)}>
                  {selectedPoint.recovery}
                </Badge>
              </div>
            </div>
          </div>
        )}
        
        <div className="mt-4 flex justify-between text-sm text-muted-foreground">
          <span>Average: 47 ms</span>
          <div className="flex items-center gap-1">
            <TrendingUp className="h-4 w-4 text-green-600" />
            <span className="text-green-600">+8% this week</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InteractiveHRVChart;
