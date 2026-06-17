import styles from "./Partners.module.scss"

export default function Partners() {
    return (
        <section className={styles.partners} aria-label="Parceiros">
            <article className={styles.card}>
                <div className={styles.cardContent}>
                    <h2>Parceiros</h2>
                    <p>Lorem ipsum dolor sit <br /> amet, consectetur</p>
                    <a href="#" className={styles.btn} role="button">CONFIRA</a>
                </div>
            </article>
             <article className={styles.card}>
                <div className={styles.cardContent}>
                    <h2>Parceiros</h2>
                    <p>Lorem ipsum dolor sit <br /> amet, consectetur</p>
                    <a href="#" className={styles.btn} role="button">CONFIRA</a>
                </div>
            </article>
        </section>
    )
}