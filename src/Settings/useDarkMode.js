/*********************************************
 * @author Adel Ismail
 * @contibution Entire file
 * 
 * @brief This file implements dark mode allowing switching between light and
 *        dark mode
 *********************************************/

import { useState } from 'react';

function useDarkMode() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');

  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  };

  return [darkMode, toggleDarkMode];
}

export default useDarkMode;
