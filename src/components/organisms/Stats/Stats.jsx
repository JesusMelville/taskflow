import styles from '@styles/components/organisms/Stats.module.css';

export function Stats({ todos }) {
    const total = todos.length;
    const completed = todos.filter(t => t.completed).length;
    const active = total - completed;
    const highPriority = todos.filter(t => t.priority === 'high' && !t.completed).length;
    const progress = total > 0 ? Math.round((completed / total) * 100) : 0;

    return (
        <div className={styles.stats}>
            <div className={`${styles.statCard} ${styles.statTotal}`}>
                <span className={styles.statIcon}>📊</span>
                <span className={styles.statValue}>{total}</span>
                <span className={styles.statLabel}>Total</span>
            </div>

            <div className={`${styles.statCard} ${styles.statActive}`}>
                <span className={styles.statIcon}>⏳</span>
                <span className={styles.statValue}>{active}</span>
                <span className={styles.statLabel}>Activas</span>
            </div>

            <div className={`${styles.statCard} ${styles.statCompleted}`}>
                <span className={styles.statIcon}>✅</span>
                <span className={styles.statValue}>{completed}</span>
                <span className={styles.statLabel}>Completadas</span>
            </div>

            <div className={`${styles.statCard} ${styles.statHigh}`}>
                <span className={styles.statIcon}>🔥</span>
                <span className={styles.statValue}>{highPriority}</span>
                <span className={styles.statLabel}>Urgentes</span>
            </div>

            <div className={styles.progressContainer}>
                <div className={styles.progressHeader}>
                    <span className={styles.progressLabel}>Progreso general</span>
                    <span className={styles.progressPercent}>{progress}%</span>
                </div>
                <div className={styles.progressBar}>
                    <div 
                        className={styles.progressFill}
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </div>
        </div>
    );
}
