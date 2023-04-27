import { useState } from "react";

export default function DarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className={`page ${darkMode && "dark-mode"}`}>
      <button className="dark-mode-button" onClick={toggleDarkMode}>
        Dark Mode
      </button>
      <button className="light-mode-button" onClick={toggleDarkMode}>
        Light Mode
      </button>
    </div>
  );
}
