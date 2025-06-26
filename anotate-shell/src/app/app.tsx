import * as React from 'react';

import { Toaster } from "@bosch-annotate/anotate-controls";
import { Toaster as Sonner } from "@bosch-annotate/anotate-controls";
import { TooltipProvider } from "@bosch-annotate/anotate-controls";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppRoute from './routes/AppRouting';
import { AuthProvider } from './contexts/AuthContext';

const queryClient = new QueryClient();

export function App() {
  return (
    <React.Suspense fallback={null}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <AuthProvider>
            <AppRoute />
          </AuthProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </React.Suspense>
  );
}

export default App;
