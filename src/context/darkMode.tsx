'use client'

import { ReactNode, createContext, useState } from "react";

export type Props = {
    darkMode: boolean,
    setDarkMode: (n: boolean)=> void
}

export const DarkMode = createContext<Props | null>(null)

export const DarkModeProvider = ({children}: {children: ReactNode})=> {
    const [darkMode, setDarkMode] = useState(false)

    
    return (
        <DarkMode.Provider value={{darkMode, setDarkMode}}>
            {children}
        </DarkMode.Provider>
    )
}