import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Background from './components/layouts/Background';
import Loader from './components/ui/Loader';
import { ContactModalProvider, useContactModal } from './contexts/ContactModalContext';
import ContactModal from './components/ContactModal';

// Lazy load routes for code splitting
const Home = lazy(() => import('./pages/Home'));
// const Projects = lazy(() => import('./pages/Projects'));
// const OpenSource = lazy(() => import('./pages/OpenSource'));

// Loading fallback component
const LoadingFallback = () => <Loader />;

const AppContent = () => {
  const { isOpen, closeModal } = useContactModal();

  return (
    <div style={{ position: 'relative' }}>
      <Background />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/projects" element={<Projects />} /> */}
            {/* <Route path="/opensource" element={<OpenSource />} /> */}
          </Routes>
        </Suspense>
      </div>
      <ContactModal isOpen={isOpen} onClose={closeModal} />
    </div>
  );
};

function App() {
  return (
    <ContactModalProvider>
      <AppContent />
    </ContactModalProvider>
  );
}

export default App;