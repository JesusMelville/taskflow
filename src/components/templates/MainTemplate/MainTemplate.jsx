import { Header, Stats, TodoList, TodoForm } from '@components/organisms';
import { useApp } from '@context';
import styles from '@styles/components/templates/MainTemplate.module.css';

export function MainTemplate() {
    const { 
        todos, 
        stats, 
        addTodo, 
        toggleTodo, 
        deleteTodo, 
        editTodo, 
        clearCompleted,
        theme,
        toggleTheme 
    } = useApp();

    return (
        <div className={styles.template}>
            <div className={styles.templateHeader}>
                <Header 
                    activeCount={stats.active}
                    onThemeToggle={toggleTheme}
                    theme={theme}
                />
            </div>

            <main className={styles.templateMain}>
                <Stats todos={todos} />
                
                <TodoForm onAdd={addTodo} />
                
                <TodoList 
                    todos={todos}
                    onToggle={toggleTodo}
                    onDelete={deleteTodo}
                    onEdit={editTodo}
                    onClearCompleted={clearCompleted}
                />
            </main>

            <footer className={styles.templateFooter}>
                <p>TaskFlow v1.0 - Hecho con React + Atomic Design</p>
            </footer>
        </div>
    );
}
