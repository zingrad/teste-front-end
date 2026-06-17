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
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
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
                <div className={`${styles.topHeader} ${isMenuOpen ? styles.open : ''}`} role="banner">
                    <div className={styles.perks}>
                        <img src={shield} alt="" aria-hidden="true" width="16" height="16" />
                        <span>Compra <strong>100% segura</strong></span>
                    </div>
                    <div className={styles.perks}>
                        <img src={shield} alt="" aria-hidden="true" width="16" height="16" />
                        <span><strong>Frete grátis</strong> acima de R$ 200 </span>
                    </div>
                    <div className={styles.perks}>
                        <img src={shield} alt="" aria-hidden="true" width="16" height="16" />
                        <span><strong>Parcele</strong> suas compras</span>
                    </div>
                </div>
                <div className={styles.middleHeader}>
                    <button
                        className={styles.mobileMenuToggle}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
                        aria-expanded={isMenuOpen}
                        type="button"
                    >
                        <HamburgerIcon />
                    </button>
                    <div>
                        <a href="/" aria-label="Econverse - Página inicial">
                            <img src={logo} alt="Econverse" title='Econverse' />
                        </a>
                    </div>
                    <search className={styles.searchWrapper} role="search">
                        <label htmlFor="search-input" className="sr-only" style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', clip: 'rect(0,0,0,0)' }}>
                            Buscar produtos
                        </label>
                        <input
                            id="search-input"
                            type="search"
                            placeholder="O que você está procurando?"
                            aria-label="Buscar produtos"
                        />
                        <img
                            src={magnifyingGlass}
                            alt="Buscar"
                            title="Buscar"
                            width="28"
                            height="28"
                            role="button"
                            tabIndex={0}
                        />
                    </search>
                    <nav aria-label="Ações do usuário">
                        <ul>
                            <li><a href="#" aria-label="Rastrear pedidos"><img src={packageIcon} alt="" aria-hidden="true" width="24" height="24" /></a></li>
                            <li><a href="#" aria-label="Favoritos"><img src={heart} alt="" aria-hidden="true" width="24" height="24" /></a></li>
                            <li><a href="#" aria-label="Minha conta"><img src={user} alt="" aria-hidden="true" width="24" height="24" /></a></li>
                            <li><a href="#" aria-label="Carrinho de compras"><img src={cart} alt="" aria-hidden="true" width="24" height="24" /></a></li>
                        </ul>
                    </nav>
                </div>
                {isMenuOpen && (
                    <div className={styles.overlay} onClick={() => setIsMenuOpen(false)} aria-hidden="true"></div>
                )}
                <nav className={`${styles.navigation} ${isMenuOpen ? styles.open : ''}`} aria-label="Navegação principal">
                    <button
                        className={styles.closeMenu}
                        onClick={() => setIsMenuOpen(false)}
                        aria-label="Fechar menu"
                        type="button"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3F3F40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                    <ul>
                        <li><a href="#">Todas Categorias</a></li>
                        <li><a href="#">Supermercado</a></li>
                        <li><a href="#">Livros</a></li>
                        <li><a href="#">Moda</a></li>
                        <li><a href="#">Lançamentos</a></li>
                        <li><a href="#">Ofertas do dia</a></li>
                        <li>
                            <a href="#" className={styles.subscription}>
                                <img src={premium} alt="" aria-hidden="true" width="20" height="20" />
                                Assinatura Premium
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}