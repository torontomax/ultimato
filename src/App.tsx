import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";

const Index = lazy(() => import("./pages/Index"));
const basePath = import.meta.env.VITE_BASE_PATH || "/";

function App() {
  return (
    <BrowserRouter basename={basePath}>
      <Toaster position="top-right" />
      <Suspense fallback={<div className="min-h-screen bg-background" />}>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
