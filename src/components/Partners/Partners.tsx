import styles from "./Partners.module.scss"

export default function Partners() {
    return (
        <section className={styles.partners}>
            <div className={styles.card}>
                <div className={styles.cardContent}>
                    <h2>Parceiros</h2>
                    <p>Lorem ipsum dolor sit <br /> amet, consectetur</p>
                    <a className={styles.btn}>CONFIRA</a>
                </div>
            </div>
             <div className={styles.card}>
                <div className={styles.cardContent}>
                    <h2>Parceiros</h2>
                    <p>Lorem ipsum dolor sit <br /> amet, consectetur</p>
                    <a className={styles.btn}>CONFIRA</a>
                </div>
            </div>
        </section>
    )
}