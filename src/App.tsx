import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BreathingExercise from "./pages/BreathingExercise";
import SleepStories from "./pages/SleepStories";
import QuickWorkout from "./pages/QuickWorkout";
import DeviceConnections from "./pages/DeviceConnections";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider defaultTheme="light">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/breathing-exercise" element={<BreathingExercise />} />
            <Route path="/sleep-stories" element={<SleepStories />} />
            <Route path="/quick-workout" element={<QuickWorkout />} />
            <Route path="/device-connections" element={<DeviceConnections />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
