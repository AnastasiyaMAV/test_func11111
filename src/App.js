
import React, {useState} from "react";
import {Toolbar} from './comp/Toolbar'

export const themes = {
    light: {
      foreground: '#000000',
      background: '#eeeeee',
    },
    dark: {
      foreground: '#ffffff',
      background: '#222222',
    },
  };
  
  export const ThemeContext = React.createContext(themes.light);

  const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(themes.light);
    const [activeTheme, setActiveTheme] = useState("light");
  
    const toggleTheme = () => {
      const nextTheme = activeTheme === "light" ? "dark" : "light";
      setTheme(themes[nextTheme]);
      setActiveTheme(nextTheme);
    };
    
    return (
      <ThemeContext.Provider value={[theme, toggleTheme]}>
        {children}
      </ThemeContext.Provider>
    );
  };

export default function App() {
  return (
    <ThemeContextProvider>
      <Toolbar />
    </ThemeContextProvider>
  );
}
