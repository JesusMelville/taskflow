import { createContext, useContext } from 'react';
import { useTodos, useTheme } from '@hooks';

export const AppContext = createContext(null);

export function AppProvider({ children }) {
    const todos = useTodos();
    const theme = useTheme();

    const value = {
        ...todos,
        ...theme
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}

export function useApp() {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useApp must be used within an AppProvider');
    }
    return context;
}
