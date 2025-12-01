import { Button } from "@/components/ui/button";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <Toaster richColors />
      <div className="min-h-screen w-full relative">
        {/* Cotton Candy Sky Gradient */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `linear-gradient(45deg, #FFB3D9 0%, #FFD1DC 20%, #FFF0F5 40%, #E6F3FF 60%, #D1E7FF 80%, #C7E9F1 100%)`,
          }}
        />
        {/* Your Content/Components */}
        <div className="z-10 relative w-full max-w-2xl mx-auto">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />

              <Route path="/:abc" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
