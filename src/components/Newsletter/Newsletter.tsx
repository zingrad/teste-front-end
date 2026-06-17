import styles from "./Newsletter.module.scss";

export default function Newsletter() {
  return (
    <section className={styles.newsletter} aria-label="Newsletter">
      <div className={styles.newsletterContainer}>
        <div>
          <h2>Inscreva-se na nossa newsletter</h2>
          <p>
            Assine a nossa newsletter e receba as novidades e conteúdos
            exclusivos da Econverse.
          </p>
        </div>
        <form className={styles.form} onSubmit={(e) => e.preventDefault()} aria-label="Formulário de inscrição na newsletter">
          <div className={styles.inputGroup}>
            <label htmlFor="newsletter-name" className="sr-only" style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', clip: 'rect(0,0,0,0)' }}>
              Nome
            </label>
            <input
              placeholder="Digite seu nome"
              type="text"
              name="name"
              id="newsletter-name"
              autoComplete="given-name"
              required
            />
            <label htmlFor="newsletter-email" className="sr-only" style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', clip: 'rect(0,0,0,0)' }}>
              E-mail
            </label>
            <input
              placeholder="Digite seu e-mail"
              type="email"
              name="email"
              id="newsletter-email"
              autoComplete="email"
              required
            />
            <button type="submit" className={styles.btn}>
              Inscrever
            </button>
          </div>
          <div className={styles.checkboxContainer}>
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">Aceito os termos e condições</label>
          </div>
        </form>
      </div>
    </section>
  );
}
