import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import OpenSource from './pages/OpenSource';

function App() {
  return (
    <div style={{ position: 'relative' }}>
      {/* Fixed Dot Pattern Background - stays in place while content scrolls */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none',
          backgroundColor: '#000000',
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.25) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
          backgroundPosition: '0 0'
        }}
      />

      {/* Content Layer - scrolls normally */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/opensource" element={<OpenSource />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;