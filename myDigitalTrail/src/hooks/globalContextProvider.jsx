import React, { useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export const GlobalContextProvider = ({ children }) => {
    const [theme, setTheme] = useState("teste");


    return (
        <ThemeContext.Provider value={{

            theme,



        }}>
            {children}
        </ThemeContext.Provider>
    );
};
