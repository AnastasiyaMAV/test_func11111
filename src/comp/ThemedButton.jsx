
import React, { useContext } from 'react';
import {ThemeContext} from '../App'

export function ThemedButton() {
    const [theme, toggleTheme] = useContext(ThemeContext);
    return (
      <div style={{ background: theme.background, color: theme.foreground }}>
        <button onClick={toggleTheme}>Toggle theme</button>
      </div>
      
    );
  }