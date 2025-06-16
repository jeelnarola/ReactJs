import logo from './logo.svg';
import './App.css';
import { createContext, useState } from 'react';
import Button from './Components/Button';

export const ThemeContext  = createContext('light')
function App() {
  const [theme, setTheme] = useState('light');
  return (
     <ThemeContext.Provider value={{ theme, setTheme }}>
      <div style={{ background: theme === 'light' ? '#fff' : '#222', color: theme === 'light' ? '#000' : '#fff', height: '100vh',margin:'0px' }}>
        <h1 style={{'margin':'0px','padding':'20px'}}>{theme} mode</h1>
        <Button />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
