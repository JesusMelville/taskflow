import { useCallback, useMemo } from 'react';
import { useLocalStorage } from './useLocalStorage';

const INITIAL_TODOS = [];

export function useTodos() {
    const [todos, setTodos] = useLocalStorage('taskflow-todos', INITIAL_TODOS);

    // Add new todo
    const addTodo = useCallback((text, priority = 'medium') => {
        const newTodo = {
            id: Date.now().toString(36) + Math.random().toString(36).substr(2),
            text,
            priority,
            completed: false,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        setTodos(prev => [newTodo, ...prev]);
    }, [setTodos]);

    // Toggle todo completion
    const toggleTodo = useCallback((id) => {
        setTodos(prev => prev.map(todo =>
            todo.id === id
                ? { ...todo, completed: !todo.completed, updatedAt: new Date().toISOString() }
                : todo
        ));
    }, [setTodos]);

    // Delete todo
    const deleteTodo = useCallback((id) => {
        setTodos(prev => prev.filter(todo => todo.id !== id));
    }, [setTodos]);

    // Edit todo text
    const editTodo = useCallback((id, newText) => {
        setTodos(prev => prev.map(todo =>
            todo.id === id
                ? { ...todo, text: newText, updatedAt: new Date().toISOString() }
                : todo
        ));
    }, [setTodos]);

    // Clear completed todos
    const clearCompleted = useCallback(() => {
        setTodos(prev => prev.filter(todo => !todo.completed));
    }, [setTodos]);

    // Clear all todos
    const clearAll = useCallback(() => {
        setTodos([]);
    }, [setTodos]);

    // Statistics
    const stats = useMemo(() => {
        const total = todos.length;
        const completed = todos.filter(t => t.completed).length;
        const active = total - completed;
        const highPriority = todos.filter(t => t.priority === 'high' && !t.completed).length;
        const mediumPriority = todos.filter(t => t.priority === 'medium' && !t.completed).length;
        const lowPriority = todos.filter(t => t.priority === 'low' && !t.completed).length;
        const progress = total > 0 ? Math.round((completed / total) * 100) : 0;

        return {
            total,
            completed,
            active,
            highPriority,
            mediumPriority,
            lowPriority,
            progress
        };
    }, [todos]);

    return {
        todos,
        stats,
        addTodo,
        toggleTodo,
        deleteTodo,
        editTodo,
        clearCompleted,
        clearAll
    };
}
