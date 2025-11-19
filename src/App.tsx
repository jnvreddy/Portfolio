import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import OpenSource from './pages/OpenSource';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/opensource" element={<OpenSource />} />
    </Routes>
  );
}

export default App;