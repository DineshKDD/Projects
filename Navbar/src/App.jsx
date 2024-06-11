import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { useEffect } from "react";

function App() {
  const current_theme = localStorage.getItem("current_theme");
  const [theme, setTheme] = useState(current_theme ? current_theme : "light");
  useEffect(() => {
    localStorage.setItem("current_theme", theme);
  }, [theme]);
  return (
    <>
      <div className={`container ${theme}`}>
        <Navbar theme={theme} setTheme={setTheme} />
      </div>
    </>
  );
}

export default App;
