import { useState } from 'react';
import { Input, Button } from '@components/atoms';
import styles from '@styles/components/molecules/TodoForm.module.css';

const MAX_CHARS = 100;

export function TodoForm({ onAdd }) {
    const [text, setText] = useState('');
    const [priority, setPriority] = useState('medium');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            onAdd(text.trim(), priority);
            setText('');
            setPriority('medium');
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            handleSubmit(e);
        }
    };

    const charCountClass = text.length > MAX_CHARS * 0.9 
        ? styles.charCountLimit 
        : '';

    return (
        <form className={styles.todoForm} onSubmit={handleSubmit}>
            <div className={styles.todoFormRow}>
                <div className={styles.todoFormInput}>
                    <Input
                        type="text"
                        placeholder="¿Qué necesitas hacer?"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        onKeyDown={handleKeyDown}
                        maxLength={MAX_CHARS}
                        aria-label="Nueva tarea"
                    />
                </div>
                <Button 
                    type="submit" 
                    className={styles.todoFormSubmit}
                    disabled={!text.trim()}
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                    Agregar
                </Button>
            </div>

            <div className={styles.prioritySelector}>
                <button
                    type="button"
                    className={`${styles.priorityOption} ${styles.priorityOptionLow} ${priority === 'low' ? styles.priorityOptionActive : ''}`}
                    onClick={() => setPriority('low')}
                >
                    Baja
                </button>
                <button
                    type="button"
                    className={`${styles.priorityOption} ${styles.priorityOptionMedium} ${priority === 'medium' ? styles.priorityOptionActive : ''}`}
                    onClick={() => setPriority('medium')}
                >
                    Media
                </button>
                <button
                    type="button"
                    className={`${styles.priorityOption} ${styles.priorityOptionHigh} ${priority === 'high' ? styles.priorityOptionActive : ''}`}
                    onClick={() => setPriority('high')}
                >
                    Alta
                </button>
            </div>

            <div className={`${styles.charCount} ${charCountClass}`}>
                {text.length}/{MAX_CHARS}
            </div>
        </form>
    );
}
