import React from 'react';
import Header from './Header';
import InteractiveHealthMetrics from './InteractiveHealthMetrics';
import EnhancedHRVChart from './EnhancedHRVChart';
import InteractiveActivitySummary from './InteractiveActivitySummary';
import InsightsPanel from './InsightsPanel';
import QuickActions from './QuickActions';

const AppLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      <main className="container mx-auto px-4 py-6 space-y-6">
        <InteractiveHealthMetrics />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <EnhancedHRVChart />
          <InteractiveActivitySummary />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <InsightsPanel />
          <QuickActions />
        </div>
      </main>
    </div>
  );
};

export default AppLayout;
