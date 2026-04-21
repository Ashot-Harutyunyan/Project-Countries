import { createContext, use, useState, useEffect } from "react"

const ThemeContextCTX = createContext(null)

export default function ThemeContext({ children }) {

    const [theme, setTheme] = useState('dark')

    const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light')

    useEffect(() => {
        document.documentElement.classList.remove('dark', 'light')
        document.documentElement.classList.add(theme)
    }, [theme])

    return <ThemeContextCTX value={[theme, toggleTheme]}>{children}</ThemeContextCTX>
}

export const useTheme = () => use(ThemeContextCTX)