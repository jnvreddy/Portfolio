import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import OpenSource from './pages/OpenSource';
import Background from './components/layouts/Background';

function App() {
  return (
    <div style={{ position: 'relative' }}>
      <Background />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/opensource" element={<OpenSource />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;