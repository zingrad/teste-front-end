import Banner from '../../src/assets/images/banner.webp';
import styles from './Home.module.scss';
import technology from '../../src/assets/icons/technology.svg'
import superMarket from '../../src/assets/icons/superMarket.svg'
import drinks from '../../src/assets/icons/whiskey.svg'
import tools from '../../src/assets/icons/tools.svg'
import health from '../../src/assets/icons/health.svg'
import sports from '../../src/assets/icons/run.svg'
import fashion from '../../src/assets/icons/fashion.svg'
import logo from '../../src/assets/images/logo.webp';

import ProductCarousel from '../../components/ProductCarousel/ProductCarousel';
import Partners from '../../components/Partners/Partners'
import Newsletter from '../../components/Newsletter/Newsletter'

export default function Home() {
    return (
         <>
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
                <h2 className={styles.relatedTitle}>Produtos relacionados</h2>
                <nav>
                    <ul>
                        <li><a href="#">Celular</a></li>
                        <li><a href="#">Acessórios</a></li>
                        <li><a href="#">Tablets</a></li>
                        <li><a href="#">Notebooks</a></li>
                        <li><a href="#">TVs</a></li>
                        <li><a href="#">Ver todos</a></li>
                    </ul>
                </nav>
                <ProductCarousel />
            </section>
            <Partners />
            <section className={styles.relatedProducts}>
                <h2 className={styles.relatedTitle}>Produtos relacionados</h2>
                <span>Ver todos</span>
                <ProductCarousel />
            </section>
            <Partners />
            <section className={styles.brands}>
                <h2>Navegue por marcas</h2>
                <div className={styles.brandsContainer}>
                    <div className={styles.brand}>
                        <img src={logo} alt="Econverse" title="Econverse" loading="lazy" />
                    </div>
                       <div className={styles.brand}>
                        <img src={logo} alt="Econverse" title="Econverse" loading="lazy" />
                    </div>
                       <div className={styles.brand}>
                        <img src={logo} alt="Econverse" title="Econverse" loading="lazy" />
                    </div>
                       <div className={styles.brand}>
                        <img src={logo} alt="Econverse" title="Econverse" loading="lazy" />
                    </div>
                       <div className={styles.brand}>
                        <img src={logo} alt="Econverse" title="Econverse" loading="lazy" />
                    </div>
                </div>
            </section>
             <section className={styles.relatedProducts}>
                <h2 className={styles.relatedTitle}>Produtos relacionados</h2>
                <span>Ver todos</span>
                <ProductCarousel />
            </section>
            <Newsletter />
        </main>
        </>
    );
}
