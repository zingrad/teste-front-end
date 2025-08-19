import styles from './Footer.module.scss';

import logo from '../../src/assets/images/logo.webp'
import instagran from '../../src/assets/icons/instagram.svg'
import facebook from '../../src/assets/icons/facebook.svg'
import linkedin from '../../src/assets/icons/linkedin.svg'

export default function Footer() {
    return (
        <footer>
            <div className={styles.footerContainer}>
                <div>
                    <img src={logo} alt="Econverse" title='Econverse' loading='lazy' />
                    <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.</p>
                    <div className={styles.social}>
                        <img src={instagran} alt="Instagram" title="Instagram" />
                        <img src={facebook} alt="Facebook" title="Facebook" />
                        <img src={linkedin} alt="LinkedIn" title="LinkedIn" />
                    </div>
                </div>

                <div className={styles.footerNavigation}>
                    <div>
                        <h3>Institucional</h3>
                        <nav>
                            <ul>
                                <li>Sobre Nós</li>
                                <li>Movimento</li>
                                <li>Sobre Nós</li>
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <h3>Ajuda</h3>
                        <nav>
                            <ul>
                                <li>Suporte</li>
                                <li>Fale Conosco</li>
                                <li>Perguntas Frequentes</li>
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <h3>Termos</h3>
                        <nav>
                            <ul>
                                <li>Termos e Condições</li>
                                <li>Política de Privacidade</li>
                                <li>Troca e Devolução</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <div className={styles.copyright}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
        </footer>
    )
}