import { useState } from 'react';

function useDarkMode() {
   
    const [darkMode, setDarkMode] = useState(false);

   
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return [darkMode, toggleDarkMode];
}

export default useDarkMode;