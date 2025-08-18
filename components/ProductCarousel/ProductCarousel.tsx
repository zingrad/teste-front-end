import { useEffect, useState } from "react";
import type { Product } from "../../src/types/product";
import styles from '../ProductCarousel/ProductCarousel.module.scss'
import close from '../../src/assets/icons/close.svg'

export default function ProductCarousel() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [modalProduct, setModalProduct] = useState<Product | null>(null); // produto do modal

    useEffect(() => {
        fetch("/api/products")
            .then(res => {
                if (!res.ok) throw new Error("Erro ao buscar produtos");
                return res.json();
            })
            .then(data => {
                setProducts(Array.isArray(data.products) ? data.products : []);
            })
            .catch(() => setError("Não foi possível carregar os produtos."))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <p>Carregando produtos...</p>;
    if (error) return <p>{error}</p>;
    if (products.length === 0) return <p>Nenhum produto encontrado.</p>;

    return (
        <div className={styles.productCarousel}>
            {products.map((product, index) => (
                <div key={index} className={styles.productCard}>
                    <img src={product.photo} alt={product.productName} title={product.productName} loading="lazy" />
                    <h3>{product.productName}</h3>
                    <p className={styles.productDescription}>{product.descriptionShort}</p>
                    <p className={styles.oldPrice}>
                        R$ {(product.price / (1 - 10 / 100)).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                    </p>
                    <strong className={styles.price}>R$ {product.price.toLocaleString("pt-BR")}</strong>
                    <p className={styles.installments}>ou 2x de R$ {product.price / 2} sem juros</p>
                    <p className={styles.shipping}>Frete grátis</p>
                    <button className={styles.btn} onClick={() => setModalProduct(product)}>Comprar</button>
                </div>
            ))}

            {modalProduct && (
                <div className={styles.modalOverlay} onClick={() => setModalProduct(null)}>
                    <div className={styles.modalContent} onClick={event => event.stopPropagation()}>
                        <img src={modalProduct.photo} alt={modalProduct.productName} title={modalProduct.productName} loading="lazy" />
                        <div>
                            <h4>{modalProduct.productName}</h4>
                            <strong>R$ {modalProduct.price.toLocaleString("pt-BR")}</strong>
                            <p>Many desktop publishing packages and web page editors now many desktop publishing</p>
                            <a href="#" className={styles.showMore}>Veja mais detalhes do produto  &gt;</a>
                            <img className={styles.closeButton} onClick={() => setModalProduct(null)} src={close} alt="Fechar" title="Fechar" />
                            <div>
                                <a href="#" className={styles.btn}>Comprar</a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
