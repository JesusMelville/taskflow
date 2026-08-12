import { useCallback, useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export function useTheme() {
    const [theme, setTheme] = useLocalStorage('taskflow-theme', 'dark');

    // Apply theme to document
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    // Toggle between light and dark
    const toggleTheme = useCallback(() => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    }, [setTheme]);

    // Set specific theme
    const setSpecificTheme = useCallback((newTheme) => {
        if (newTheme === 'dark' || newTheme === 'light') {
            setTheme(newTheme);
        }
    }, [setTheme]);

    return {
        theme,
        toggleTheme,
        setTheme: setSpecificTheme,
        isDark: theme === 'dark',
        isLight: theme === 'light'
    };
}
