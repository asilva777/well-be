import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import StatsInfographic from './StatsInfographic';
import VisualMetrics from './VisualMetrics';
import NavigationCards from './NavigationCards';
import FeatureShowcase from './FeatureShowcase';
import InteractiveHealthMetrics from './InteractiveHealthMetrics';
import EnhancedHRVChart from './EnhancedHRVChart';
import InteractiveActivitySummary from './InteractiveActivitySummary';
import InsightsPanel from './InsightsPanel';
import QuickActions from './QuickActions';
import DataLinkagePanel from './DataLinkagePanel';
import CrossSectionalAnalysis from './CrossSectionalAnalysis';
import CognitioPlusIntegration from './CognitioPlusIntegration';

const AppLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#c80ec9] via-[#b425aa] to-[#c80ec9]">
      <Header />
      
      {/* Hero Section with compelling visuals */}
      <HeroSection />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Visual Stats and Metrics */}
        <StatsInfographic />
        <VisualMetrics />
        
        {/* Cognitio+ Integration Hub */}
        <CognitioPlusIntegration />
        <DataLinkagePanel />
        <CrossSectionalAnalysis />
        
        {/* Quick Navigation Cards */}
        <NavigationCards />
        
        {/* Feature Showcase for Navigation */}
        <FeatureShowcase />
        
        {/* Existing Interactive Components */}
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

export { AppLayout };
export default AppLayout;
