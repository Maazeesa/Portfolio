import { Switch, Route } from "wouter";
import { queryClient } from "@queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/toaster";
import { TooltipProvider } from "@/tooltip";
import Portfolio from "@/pages/portfolio";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" {Portfolio} />
      <Route ={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider ={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
