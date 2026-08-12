import { forwardRef } from 'react';
import styles from '@styles/components/atoms/Input.module.css';

export const Input = forwardRef(({ 
    label,
    error,
    helper,
    size = 'md',
    className = '',
    ...props 
}, ref) => {
    const containerClasses = [
        styles.inputContainer,
        error ? styles.inputError : '',
        className
    ].filter(Boolean).join(' ');

    const inputClasses = [
        styles.input,
        styles[`input${size.charAt(0).toUpperCase() + size.slice(1)}`]
    ].filter(Boolean).join(' ');

    return (
        <div className={containerClasses}>
            {label && <label className={styles.inputLabel}>{label}</label>}
            <input 
                ref={ref}
                className={inputClasses} 
                {...props} 
            />
            {(helper || error) && (
                <span className={styles.inputHelper}>{error || helper}</span>
            )}
        </div>
    );
});

Input.displayName = 'Input';
