import { createContext, useState } from "react";
import Container from "./Container";

export const ThemeContext = createContext();

function Component() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <h1>Component</h1>
      <Container />
    </ThemeContext.Provider>
  );
}

export default Component;