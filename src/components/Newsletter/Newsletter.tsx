import styles from './Newsletter.module.scss';

export default function Newsletter() {
    return (
        <section className={styles.newsletter}>
            <div className={styles.newsletterContainer}>
                <div>
                    <h2>Inscreva-se na nossa newsletter</h2>
                    <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</p>
                </div>
                <div className={styles.form}>
                    <div className={styles.inputGroup}>
                        <input placeholder='Digite seu nome' type="text" name="name" id="name" />
                        <input placeholder='Digite seu e-mail' type="text" name="email" id="email" />
                        <button type="submit" className={styles.btn}>Inscrever</button>
                    </div>
                    <div className={styles.checkboxContainer}>
                        <input type="checkbox" id="terms" />
                        <label htmlFor="terms">Aceito os termos e condições</label>
                    </div>
                </div>
            </div>
        </section>
    );
}