// src/contexts/ThemeContext.js
import React, { createContext, useState } from 'react';

// Context 생성
const ThemeContext = createContext();

// Provider 컴포넌트 정의
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // 'light' 또는 'dark'

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
