import { Button } from '@components/atoms';
import styles from '@styles/components/organisms/Header.module.css';

export function Header({ activeCount, onThemeToggle, theme }) {
    return (
        <header className={styles.header}>
            <div className={styles.headerLogo}>
                <div className={styles.headerLogoIcon}>✓</div>
                <span className={styles.headerLogoText}>TaskFlow</span>
            </div>

            <div className={styles.headerActions}>
                <div className={styles.statsBadge}>
                    <span className={styles.statsBadgeDot}></span>
                    {activeCount} {activeCount === 1 ? 'tarea pendiente' : 'tareas pendientes'}
                </div>

                <Button
                    variant="ghost"
                    icon
                    onClick={onThemeToggle}
                    aria-label="Cambiar tema"
                >
                    <span className={styles.themeToggle}>
                        {theme === 'dark' ? '☀️' : '🌙'}
                    </span>
                </Button>
            </div>
        </header>
    );
}
