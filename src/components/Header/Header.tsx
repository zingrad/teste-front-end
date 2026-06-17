import { useState } from 'react';
import styles from './Header.module.scss'

import shield from '../../assets/icons/shieldCheck.svg';
import packageIcon from '../../assets/icons/package.svg';
import heart from '../../assets/icons/heart.svg';
import user from '../../assets/icons/user.svg';
import cart from '../../assets/icons/shoppingCart.svg';
import magnifyingGlass from '../../assets/icons/magnifyingGlass.svg';
import logo from '../../assets/images/logo.webp';
import premium from '../../assets/icons/premium.svg';

const HamburgerIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 12H21" stroke="#3F3F40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 6H21" stroke="#3F3F40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 18H21" stroke="#3F3F40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header>
            <div className={styles.headerContainer}>
                <div className={`${styles.topHeader} ${isMenuOpen ? styles.open : ''}`}>
                    <div className={styles.perks}>
                        <img src={shield} alt="Compra 100% segura" title='Compra 100% segura' />
                        <span>Compra <strong>100% segura</strong></span>
                    </div>
                    <div className={styles.perks}>
                        <img src={shield} alt="Compra 100% segura" title='Compra 100% segura' />
                        <span><strong>Frete grátis</strong> acima de R$ 200 </span>
                    </div>
                    <div className={styles.perks}>
                        <img src={shield} alt="Compra 100% segura" title='Compra 100% segura' />
                        <span><strong>Parcele</strong> suas compras</span>
                    </div>
                </div>
                <div className={styles.middleHeader}>
                    <div className={styles.mobileMenuToggle} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <HamburgerIcon />
                    </div>
                    <div>
                        <img src={logo} alt="Econverse" title='Econverse' />
                    </div>
                    <div className={styles.searchWrapper}>
                        <input
                            type="text"
                            placeholder="O que você está procurando?"
                        />
                        <img
                            src={magnifyingGlass}
                            alt="Buscar"
                            title="Buscar"
                        />
                    </div>
                    <nav>
                        <ul>
                            <li><img src={packageIcon} alt="Frete" title="Frete" /></li>
                            <li><img src={heart} alt="Favoritos" title="Favoritos" /></li>
                            <li><img src={user} alt="Conta" title="Conta" /></li>
                            <li><img src={cart} alt="Carrinho" title="Carrinho" /></li>
                        </ul>
                    </nav>
                </div>
                {isMenuOpen && (
                    <div className={styles.overlay} onClick={() => setIsMenuOpen(false)}></div>
                )}
                <nav className={`${styles.navigation} ${isMenuOpen ? styles.open : ''}`}>
                    <div className={styles.closeMenu} onClick={() => setIsMenuOpen(false)}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3F3F40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </div>
                    <ul>
                        <li><a href="#">Todas Categorias</a></li>
                        <li><a href="#">Supermercado</a></li>
                        <li><a href="#">Livros</a></li>
                        <li><a href="#">Moda</a></li>
                        <li><a href="#">Lançamentos</a></li>
                        <li><a href="#">Ofertas do dia</a></li>
                        <li>
                            <a href="#" className={styles.subscription}>
                                <img src={premium} alt="Assinatura Premium" title="Assinatura Premium" />
                                Assinatura Premium
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}