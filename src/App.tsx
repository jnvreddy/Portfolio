import { useTheme } from "./hooks/useTheme";
import  {Home}  from "./components/Home";
import Header from "./components/Header";

function App() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen font-inter bg-white dark:bg-gray-950 transition-colors duration-300">
      <Header theme={theme} setTheme={setTheme} />
      <Home />
    </div>
  );
}

export default App;
