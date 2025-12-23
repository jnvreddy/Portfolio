import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Background from './components/layouts/Background';

// Lazy load routes for code splitting
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const OpenSource = lazy(() => import('./pages/OpenSource'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-black">
    <div className="text-white text-xl">Loading...</div>
  </div>
);

function App() {
  return (
    <div style={{ position: 'relative' }}>
      <Background />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/opensource" element={<OpenSource />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;