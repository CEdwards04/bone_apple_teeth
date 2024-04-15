import { useState } from 'react';

function useDarkMode() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');

  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  };

  return [darkMode, toggleDarkMode];
}

export default useDarkMode;
