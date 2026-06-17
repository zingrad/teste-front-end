import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { Product } from "../../types/product";
import styles from "./ProductCarousel.module.scss";

export default function ProductCarousel() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPageDesktop = 4;
  const productsPerPageTablet = 3;
  const productsPerPageMobile = 1;

  const getProductsPerPage = () => {
    if (window.innerWidth <= 600) return productsPerPageMobile;
    if (window.innerWidth <= 900) return productsPerPageTablet;
    return productsPerPageDesktop;
  };

  const [productsPerPage, setProductsPerPage] = useState(getProductsPerPage());

  useEffect(() => {
    fetch("/api/products")
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao buscar produtos");
        return res.json();
      })
      .then((data) => {
        setProducts(Array.isArray(data.products) ? data.products : []);
      })
      .catch(() => setError("Não foi possível carregar os produtos."))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const handleResize = () => setProductsPerPage(getProductsPerPage());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (loading) return <p role="status" aria-live="polite">Carregando produtos...</p>;
  if (error) return <p role="alert">{error}</p>;
  if (products.length === 0) return <p>Nenhum produto encontrado.</p>;

  const startIndex = currentPage * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const visibleProducts = products.slice(startIndex, endIndex);
  const totalPages = Math.ceil(products.length / productsPerPage);

  const nextPage = () => {
    if (endIndex < products.length) setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (currentPage > 0) setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className={styles.carouselWrapper} role="region" aria-label="Carrossel de produtos">
      <button
        className={styles.prevBtn}
        onClick={prevPage}
        aria-label="Página anterior de produtos"
        type="button"
        disabled={currentPage === 0}
      >
        ‹
      </button>

      <div className={styles.productCarousel} aria-live="polite">
        {visibleProducts.map((product, index) => (
          <article key={startIndex + index} className={styles.productCard}>
            <Link
              to={`/product/${product.id || startIndex + index}`}
              className={styles.productLink}
            >
              <img
                src={product.photo}
                alt={product.productName}
                title={product.productName}
                loading="lazy"
                width="200"
                height="200"
              />
              <h3>{product.productName}</h3>
            </Link>
            <p className={styles.productDescription}>
              {product.descriptionShort}
            </p>
            <p className={styles.oldPrice}>
              R${" "}
              {(product.price / (1 - 10 / 100)).toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
              })}
            </p>
            <strong className={styles.price}>
              R$ {product.price.toLocaleString("pt-BR")}
            </strong>
            <p className={styles.installments}>
              ou 2x de R$ {(product.price / 2).toLocaleString("pt-BR", { minimumFractionDigits: 2 })} sem juros
            </p>
            <p className={styles.shipping}>Frete grátis</p>
            <Link to={`/product/${product.id || startIndex + index}`} className={styles.btn}>
              Comprar
            </Link>
          </article>
        ))}
      </div>

      <button
        className={styles.nextBtn}
        onClick={nextPage}
        aria-label="Próxima página de produtos"
        type="button"
        disabled={currentPage >= totalPages - 1}
      >
        ›
      </button>
    </div>
  );
}
