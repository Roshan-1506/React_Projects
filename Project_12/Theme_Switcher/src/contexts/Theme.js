import { createContext , useContext } from "react";

export const ThemeContext =  createContext({
    themeMode : "light",                // variables
    darkTheme : () => {} ,              // methods
    lightTheme : () => {} ,
}) 

export const ThemeProvider = ThemeContext.Provider

// Custom hook 
export default function useTheme(){
    return useContext(ThemeContext)
}

