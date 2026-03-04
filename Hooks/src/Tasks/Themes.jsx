import { useState, useEffect, useRef } from "react";
import "./Theme.css";
export default function ThemeToggle() {
  const toggleRef = useRef(null);

  const getSavedTheme = () => {
    const saved = localStorage.getItem("theme");
    return saved ? saved : "light";
  };

  const [theme, setTheme] = useState(getSavedTheme);

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);

    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleToggle = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="container">
      <button ref={toggleRef} onClick={handleToggle}>
        Toggle Theme
      </button>

      <p>Active theme: {theme}</p>
    </div>
  );
}
