import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar, Edit, Save, X } from 'lucide-react';
import { useState } from 'react';

interface DataPoint {
  day: string;
  date: string;
  hrv: number;
  stress: number;
  sleep: number;
  recovery: string;
  notes?: string;
}

interface DataPointModalProps {
  dataPoint: DataPoint | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedPoint: DataPoint) => void;
}

const DataPointModal: React.FC<DataPointModalProps> = ({ 
  dataPoint, 
  isOpen, 
  onClose, 
  onSave 
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedPoint, setEditedPoint] = useState<DataPoint | null>(null);

  React.useEffect(() => {
    if (dataPoint) {
      setEditedPoint({ ...dataPoint });
    }
  }, [dataPoint]);

  if (!dataPoint || !editedPoint) return null;

  const handleSave = () => {
    onSave(editedPoint);
    setIsEditing(false);
  };

  const getRecoveryColor = (recovery: string) => {
    switch(recovery) {
      case 'Excellent': return 'bg-green-100 text-green-800';
      case 'Good': return 'bg-blue-100 text-blue-800';
      case 'Poor': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              {dataPoint.day} - {dataPoint.date}
            </DialogTitle>
            <div className="flex gap-2">
              {isEditing ? (
                <>
                  <Button size="sm" onClick={handleSave}>
                    <Save className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => setIsEditing(false)}>
                    <X className="h-4 w-4" />
                  </Button>
                </>
              ) : (
                <Button size="sm" variant="outline" onClick={() => setIsEditing(true)}>
                  <Edit className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>HRV Score (ms)</Label>
              {isEditing ? (
                <Input 
                  type="number" 
                  value={editedPoint.hrv}
                  onChange={(e) => setEditedPoint({...editedPoint, hrv: parseInt(e.target.value)})}
                />
              ) : (
                <div className="text-2xl font-bold text-red-600">{dataPoint.hrv} ms</div>
              )}
            </div>
            
            <div className="space-y-2">
              <Label>Stress Level (%)</Label>
              {isEditing ? (
                <Input 
                  type="number" 
                  value={editedPoint.stress}
                  onChange={(e) => setEditedPoint({...editedPoint, stress: parseInt(e.target.value)})}
                />
              ) : (
                <div className="text-2xl font-bold text-orange-600">{dataPoint.stress}%</div>
              )}
            </div>
            
            <div className="space-y-2">
              <Label>Sleep Duration (hours)</Label>
              {isEditing ? (
                <Input 
                  type="number" 
                  step="0.1"
                  value={editedPoint.sleep}
                  onChange={(e) => setEditedPoint({...editedPoint, sleep: parseFloat(e.target.value)})}
                />
              ) : (
                <div className="text-2xl font-bold text-blue-600">{dataPoint.sleep}h</div>
              )}
            </div>
            
            <div className="space-y-2">
              <Label>Recovery Status</Label>
              {isEditing ? (
                <select 
                  className="w-full p-2 border rounded"
                  value={editedPoint.recovery}
                  onChange={(e) => setEditedPoint({...editedPoint, recovery: e.target.value})}
                >
                  <option value="Poor">Poor</option>
                  <option value="Good">Good</option>
                  <option value="Excellent">Excellent</option>
                </select>
              ) : (
                <Badge className={getRecoveryColor(dataPoint.recovery)}>
                  {dataPoint.recovery}
                </Badge>
              )}
            </div>
          </div>
          
          <div className="space-y-2">
            <Label>Personal Notes</Label>
            {isEditing ? (
              <Textarea 
                placeholder="Add notes about this day..."
                value={editedPoint.notes || ''}
                onChange={(e) => setEditedPoint({...editedPoint, notes: e.target.value})}
                rows={3}
              />
            ) : (
              <div className="min-h-[60px] p-3 bg-gray-50 rounded border text-sm">
                {dataPoint.notes || 'No notes added for this day.'}
              </div>
            )}
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-blue-800">Health Insights</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• HRV of {dataPoint.hrv}ms indicates {dataPoint.hrv > 45 ? 'good' : 'moderate'} recovery</li>
              <li>• Stress level is {dataPoint.stress < 40 ? 'low' : dataPoint.stress < 70 ? 'moderate' : 'high'}</li>
              <li>• Sleep duration is {dataPoint.sleep >= 7 ? 'adequate' : 'below recommended'}</li>
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DataPointModal;
