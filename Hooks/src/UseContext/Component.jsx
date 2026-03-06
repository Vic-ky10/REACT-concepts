import { createContext, useState } from "react";
import Container from "./Container";

export const hemeContext = createContext();
 
function Component() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <>
      <themeContext.Provider value={theme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <h1>Component</h1>
        <Container />
      </themeContext.Provider>
    </>
  );
}

export default Component;
