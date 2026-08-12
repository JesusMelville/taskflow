import { useState } from 'react';
import { Checkbox } from '@components/atoms';
import styles from '@styles/components/molecules/TodoItem.module.css';

export function TodoItem({ todo, onToggle, onDelete, onEdit }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);

    const handleEdit = () => {
        if (editText.trim() && editText !== todo.text) {
            onEdit(todo.id, editText.trim());
        }
        setIsEditing(false);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleEdit();
        } else if (e.key === 'Escape') {
            setEditText(todo.text);
            setIsEditing(false);
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('es-ES', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });
    };

    const priorityClass = {
        low: styles.todoPriorityLow,
        medium: styles.todoPriorityMedium,
        high: styles.todoPriorityHigh
    }[todo.priority];

    return (
        <div className={`${styles.todoItem} ${todo.completed ? styles.todoCompleted : ''}`}>
            <Checkbox
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
            />
            
            <div className={styles.todoContent}>
                {isEditing ? (
                    <input
                        type="text"
                        className={styles.editInput}
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        onBlur={handleEdit}
                        onKeyDown={handleKeyDown}
                        autoFocus
                    />
                ) : (
                    <>
                        <span className={styles.todoText}>{todo.text}</span>
                        <div className={styles.todoMeta}>
                            <span className={styles.todoDate}>{formatDate(todo.createdAt)}</span>
                            {todo.priority && (
                                <span className={`${styles.todoPriority} ${priorityClass}`}>
                                    {todo.priority}
                                </span>
                            )}
                        </div>
                    </>
                )}
            </div>

            <div className={styles.todoActions}>
                {!todo.completed && (
                    <button
                        className={styles.todoEdit}
                        onClick={() => setIsEditing(true)}
                        aria-label="Editar tarea"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                        </svg>
                    </button>
                )}
                <button
                    className={styles.todoDelete}
                    onClick={() => onDelete(todo.id)}
                    aria-label="Eliminar tarea"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="3 6 5 6 21 6" />
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                        <line x1="10" y1="11" x2="10" y2="17" />
                        <line x1="14" y1="11" x2="14" y2="17" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
