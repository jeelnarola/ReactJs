import React, { useContext } from 'react'
import { ThemeContext } from '../App'

function Button() {
   const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };
  return (
    <>
        <button onClick={toggleTheme} style={{ backgroundColor: 'coral', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', margin: '20px', cursor: 'pointer' }}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
    </>
  )
}

export default Button