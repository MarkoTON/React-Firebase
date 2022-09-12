import { createContext } from 'react'

export const ThemeContext = createContext()

export function ThemeProvider({ children,ggg }) {

  return (
    <ThemeContext.Provider value={{ color: 'blue' }}>
      {children}
      {/* {ggg} */}
    </ThemeContext.Provider>
  )
}