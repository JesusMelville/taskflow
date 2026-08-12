import { useState } from 'react';
import { TodoItem } from '@components/molecules';
import styles from '@styles/components/organisms/TodoList.module.css';

export function TodoList({ todos, onToggle, onDelete, onEdit, onClearCompleted }) {
    const [filter, setFilter] = useState('all');
    const [sort, setSort] = useState('newest');

    const filteredTodos = todos.filter(todo => {
        if (filter === 'active') return !todo.completed;
        if (filter === 'completed') return todo.completed;
        return true;
    });

    const sortedTodos = [...filteredTodos].sort((a, b) => {
        switch (sort) {
            case 'newest':
                return new Date(b.createdAt) - new Date(a.createdAt);
            case 'oldest':
                return new Date(a.createdAt) - new Date(b.createdAt);
            case 'priority':
                const priorityOrder = { high: 0, medium: 1, low: 2 };
                return priorityOrder[a.priority] - priorityOrder[b.priority];
            case 'alpha':
                return a.text.localeCompare(b.text);
            default:
                return 0;
        }
    });

    const completedCount = todos.filter(t => t.completed).length;
    const activeCount = todos.filter(t => !t.completed).length;

    return (
        <div className={styles.todoList}>
            {/* Filter Tabs */}
            <div className={styles.filterTabs}>
                <button
                    className={`${styles.filterTab} ${filter === 'all' ? styles.filterTabActive : ''}`}
                    onClick={() => setFilter('all')}
                >
                    Todas ({todos.length})
                </button>
                <button
                    className={`${styles.filterTab} ${filter === 'active' ? styles.filterTabActive : ''}`}
                    onClick={() => setFilter('active')}
                >
                    Activas ({activeCount})
                </button>
                <button
                    className={`${styles.filterTab} ${filter === 'completed' ? styles.filterTabActive : ''}`}
                    onClick={() => setFilter('completed')}
                >
                    Completadas ({completedCount})
                </button>
            </div>

            {/* Sort Options */}
            <div className={styles.sortOptions}>
                <span className={styles.sortLabel}>Ordenar por:</span>
                <select 
                    className={styles.sortSelect}
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                >
                    <option value="newest">Más recientes</option>
                    <option value="oldest">Más antiguas</option>
                    <option value="priority">Prioridad</option>
                    <option value="alpha">Alfabético</option>
                </select>
            </div>

            {/* Todo List Header */}
            <div className={styles.todoListHeader}>
                <span className={styles.todoListTitle}>Mis tareas</span>
                <span className={styles.todoListCount}>
                    {filteredTodos.length} {filteredTodos.length === 1 ? 'tarea' : 'tareas'}
                </span>
            </div>

            {/* Todo Items */}
            {sortedTodos.length > 0 ? (
                sortedTodos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onToggle={onToggle}
                        onDelete={onDelete}
                        onEdit={onEdit}
                    />
                ))
            ) : (
                <div className={styles.emptyState}>
                    <span className={styles.emptyIcon}>📝</span>
                    <h3 className={styles.emptyTitle}>
                        {filter === 'all' 
                            ? 'No hay tareas aún' 
                            : filter === 'active' 
                                ? 'No hay tareas activas'
                                : 'No hay tareas completadas'
                        }
                    </h3>
                    <p className={styles.emptySubtitle}>
                        {filter === 'all' 
                            ? 'Agrega una nueva tarea para comenzar'
                            : 'Las tareas aparecerán aquí'
                        }
                    </p>
                </div>
            )}

            {/* Clear Completed */}
            {completedCount > 0 && (
                <button 
                    className={styles.clearCompleted}
                    onClick={onClearCompleted}
                >
                    Limpiar tareas completadas ({completedCount})
                </button>
            )}
        </div>
    );
}
