// Home.tsx
import { Link } from "react-router-dom";
import Banner from '../../src/assets/images/banner.webp';
import styles from './Home.module.scss';
import technology from '../../src/assets/icons/technology.svg'
import superMarket from '../../src/assets/icons/superMarket.svg'
import drinks from '../../src/assets/icons/whiskey.svg'
import tools from '../../src/assets/icons/tools.svg'
import health from '../../src/assets/icons/health.svg'
import sports from '../../src/assets/icons/run.svg'
import fashion from '../../src/assets/icons/fashion.svg'

export default function Home() {
    return (
        <main>
            <section className={styles.banner}>
                <div className={styles.bannerContainer}>
                    <h1>Venha conhecer nossas <span>promoções</span></h1>
                    <h2><span>50% Off</span> nos produtos</h2>
                    <a href="#" className={styles.btn}>Ver Produto</a>
                </div>
                <img src={Banner} alt="Banner Econverse" title="Banner Econverse" className={styles.bannerImage} />
            </section>

            <section className={styles.categories}>
                <div>
                    <img className={styles.categoriesImg} src={technology} alt="Tecnologia" title="Tecnologia" />
                    <h3>Tecnologia</h3>
                </div>
                <div>
                    <img className={styles.categoriesImg} src={superMarket} alt="Super Mercado" title="Super Mercado" />
                    <h3>Super Mercado</h3>
                </div>
                <div>
                    <img className={styles.categoriesImg} src={drinks} alt="Bebidas" title="Bebidas" />
                    <h3>Bebidas</h3>
                </div>
                <div>
                    <img className={styles.categoriesImg} src={tools} alt="Ferramentas" title="Ferramentas" />
                    <h3>Ferramentas</h3>
                </div>
                <div>
                    <img className={styles.categoriesImg} src={health} alt="Saúde" title="Saúde" />
                    <h3>Saúde</h3>
                </div>
                <div>
                    <img className={styles.categoriesImg} src={sports} alt="Esportes" title="Esportes e Fitness" />
                    <h3>Esportes e Fitness</h3>
                </div>
                <div>
                    <img className={styles.categoriesImg} src={fashion} alt="Moda" title="Moda" />
                    <h3>Moda</h3>
                </div>
            </section>

            <section className={styles.relatedProducts}>
                <h2>Produtos relacionados</h2>
            </section>
        </main>
    );
}
