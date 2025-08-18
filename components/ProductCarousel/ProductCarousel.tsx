import { useEffect, useState } from "react";
import type { Product } from "../../src/types/product";
import styles from '../ProductCarousel/ProductCarousel.module.scss'
import close from '../../src/assets/icons/close.svg'

import Counter from '../Counter/Counter';

export default function ProductCarousel() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [modalProduct, setModalProduct] = useState<Product | null>(null);
    const [quantity, setQuantity] = useState(1);

    // Controle do carrossel
    const [currentPage, setCurrentPage] = useState(0);
    const productsPerPageDesktop = 4;
    const productsPerPageTablet = 2;
    const productsPerPageMobile = 1;

    const getProductsPerPage = () => {
        if (window.innerWidth <= 480) return productsPerPageMobile;
        if (window.innerWidth <= 768) return productsPerPageTablet;
        return productsPerPageDesktop;
    };

    const [productsPerPage, setProductsPerPage] = useState(getProductsPerPage());

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

    // Atualiza productsPerPage quando a janela redimensionar
    useEffect(() => {
        const handleResize = () => setProductsPerPage(getProductsPerPage());
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (loading) return <p>Carregando produtos...</p>;
    if (error) return <p>{error}</p>;
    if (products.length === 0) return <p>Nenhum produto encontrado.</p>;

    const closeModal = () => {
        setModalProduct(null);
        setQuantity(1);
    };

    const startIndex = currentPage * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const visibleProducts = products.slice(startIndex, endIndex);

    const nextPage = () => {
        if (endIndex < products.length) setCurrentPage(prev => prev + 1);
    };

    const prevPage = () => {
        if (currentPage > 0) setCurrentPage(prev => prev - 1);
    };

    return (
        <div className={styles.carouselWrapper}>
           <button className={styles.prevBtn} onClick={prevPage}>‹</button>

            <div className={styles.productCarousel}>
                {visibleProducts.map((product, index) => (
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
            </div>

            <button className={styles.nextBtn} onClick={nextPage}>›</button>

            {modalProduct && (
                <div className={styles.modalOverlay} onClick={() => closeModal()}>
                    <div className={styles.modalContent} onClick={event => event.stopPropagation()}>
                        <img src={modalProduct.photo} alt={modalProduct.productName} title={modalProduct.productName} loading="lazy" />
                        <div>
                            <h4>{modalProduct.productName}</h4>
                            <strong>
                                R$ {(modalProduct.price * quantity).toLocaleString("pt-BR")}
                            </strong>
                            <p>Many desktop publishing packages and web page editors now many desktop publishing</p>
                            <a href="#" className={styles.showMore}>Veja mais detalhes do produto  &gt;</a>
                            <img className={styles.closeButton} onClick={() => closeModal()} src={close} alt="Fechar" title="Fechar" />
                            <div className={styles.cart}>
                                <Counter onChange={setQuantity} />
                                <a href="#" className={styles.btn}>Comprar</a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
