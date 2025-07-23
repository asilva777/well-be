import React, { createContext, useContext, useState, ReactNode } from 'react';

interface HealthData {
  hrv: number;
  stress: number;
  sleep: number;
  energy: number;
  steps: number;
  calories: number;
  activeTime: number;
}

interface AppContextType {
  healthData: HealthData;
  updateHealthData: (data: Partial<HealthData>) => void;
  isConnected: boolean;
  setIsConnected: (connected: boolean) => void;
  notifications: number;
  setNotifications: (count: number) => void;
}

const defaultHealthData: HealthData = {
  hrv: 45,
  stress: 32,
  sleep: 78,
  energy: 65,
  steps: 8420,
  calories: 1850,
  activeTime: 45
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [healthData, setHealthData] = useState<HealthData>(defaultHealthData);
  const [isConnected, setIsConnected] = useState(true);
  const [notifications, setNotifications] = useState(3);

  const updateHealthData = (data: Partial<HealthData>) => {
    setHealthData(prev => ({ ...prev, ...data }));
  };

  const value = {
    healthData,
    updateHealthData,
    isConnected,
    setIsConnected,
    notifications,
    setNotifications
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
