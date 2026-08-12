import styles from '@styles/components/atoms/Button.module.css';

export function Button({ 
    children, 
    variant = 'primary', 
    size = 'md',
    icon = false,
    className = '',
    ...props 
}) {
    const classes = [
        styles.button,
        styles[`button-${variant}`],
        styles[`button-${size}`],
        icon ? styles.buttonIcon : '',
        className
    ].filter(Boolean).join(' ');

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
}
