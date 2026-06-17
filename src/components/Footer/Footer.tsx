import styles from './Footer.module.scss';

import logo from '../../assets/images/logo.webp'
import instagram from '../../assets/icons/instagram.svg'
import facebook from '../../assets/icons/facebook.svg'
import linkedin from '../../assets/icons/linkedin.svg'

export default function Footer() {
    return (
        <footer>
            <div className={styles.footerContainer}>
                <div>
                    <img src={logo} alt="Econverse" title='Econverse' loading='lazy' />
                    <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.</p>
                    <ul className={styles.social} aria-label="Redes sociais">
                        <li>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <img src={instagram} alt="" aria-hidden="true" width="24" height="24" />
                            </a>
                        </li>
                        <li>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <img src={facebook} alt="" aria-hidden="true" width="24" height="24" />
                            </a>
                        </li>
                        <li>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <img src={linkedin} alt="" aria-hidden="true" width="24" height="24" />
                            </a>
                        </li>
                    </ul>
                </div>

                <div className={styles.footerNavigation}>
                    <div>
                        <h3>Institucional</h3>
                        <nav aria-label="Links institucionais">
                            <ul>
                                <li><a href="#">Sobre Nós</a></li>
                                <li><a href="#">Movimento</a></li>
                                <li><a href="#">Sobre Nós</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <h3>Ajuda</h3>
                        <nav aria-label="Links de ajuda">
                            <ul>
                                <li><a href="#">Suporte</a></li>
                                <li><a href="#">Fale Conosco</a></li>
                                <li><a href="#">Perguntas Frequentes</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <h3>Termos</h3>
                        <nav aria-label="Links de termos e políticas">
                            <ul>
                                <li><a href="#">Termos e Condições</a></li>
                                <li><a href="#">Política de Privacidade</a></li>
                                <li><a href="#">Troca e Devolução</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <div className={styles.copyright}>
                <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</small>
            </div>
        </footer>
    )
}