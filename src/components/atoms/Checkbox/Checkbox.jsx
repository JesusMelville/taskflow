import styles from '@styles/components/atoms/Checkbox.module.css';

export function Checkbox({ 
    label,
    checked = false,
    onChange,
    size = 'md',
    className = '',
    ...props 
}) {
    const containerClasses = [
        styles.checkboxContainer,
        styles[`checkbox${size.charAt(0).toUpperCase() + size.slice(1)}`],
        className
    ].filter(Boolean).join(' ');

    return (
        <label className={containerClasses}>
            <input
                type="checkbox"
                className={styles.checkboxHidden}
                checked={checked}
                onChange={onChange}
                {...props}
            />
            <span className={styles.checkboxCustom}>
                <svg viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                </svg>
            </span>
            {label && <span className={styles.checkboxLabel}>{label}</span>}
        </label>
    );
}
