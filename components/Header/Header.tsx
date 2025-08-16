import styles from './Header.module.scss'

import Shield from '../../src/assets/icons/shieldCheck.svg';
import packageIcon from '../../src/assets/icons/package.svg';
import heart from '../../src/assets/icons/heart.svg';
import user from '../../src/assets/icons/user.svg';
import cart from '../../src/assets/icons/shoppingCart.svg';
import magnifyingGlass from '../../src/assets/icons/magnifyingGlass.svg';
import logo from '../../src/assets/images/logo.png';
import premium from '../../src/assets/icons/premium.svg';

export function Header() {
    return (
        <header>
            <div className={styles.headerContainer}>
                <div className={styles.topHeader}>
                    <div className={styles.perks}>
                        <img src={Shield} alt="Compra 100% segura" title='Compra 100% segura' />
                        <span>Compra <strong>100% segura</strong></span>
                    </div>
                    <div className={styles.perks}>
                        <img src={Shield} alt="Compra 100% segura" title='Compra 100% segura' />
                        <span><strong>Frete grátis</strong> acima de R$ 200 </span>
                    </div>
                    <div className={styles.perks}>
                        <img src={Shield} alt="Compra 100% segura" title='Compra 100% segura' />
                        <span><strong>Parcele</strong> suas compras</span>
                    </div>
                </div>
                <div className={styles.middleHeader}>
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
                            {
                                // Ícones do topo, seguindo o layout.
                                // O carrinho tá aqui só visualmente — não implementei a lógica porque não foi pedida no teste.
                                // Se fosse pra ter funcionalidade, daria pra usar Context + localStorage.
                            }
                            <li><img src={packageIcon} alt="Frete" title="Frete" /></li>
                            <li><img src={heart} alt="Favoritos" title="Favoritos" /></li>
                            <li><img src={user} alt="Conta" title="Conta" /></li>
                            <li><img src={cart} alt="Carrinho" title="Carrinho" /></li>
                        </ul>
                    </nav>
                </div>
                <nav className={styles.navigation}>
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