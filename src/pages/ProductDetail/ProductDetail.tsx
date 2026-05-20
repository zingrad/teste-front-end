import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Product } from "../../types/product";
import styles from "./ProductDetail.module.scss";
import Counter from "../../components/Counter/Counter";
import ProductCarousel from "../../components/ProductCarousel/ProductCarousel";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState<string>("");

  useEffect(() => {
    fetch("/api/products")
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao buscar produtos");
        return res.json();
      })
      .then((data) => {
        const products = Array.isArray(data.products) ? data.products : [];
        const productIndex = parseInt(id || "0");
        const foundProduct = products[productIndex];

        if (foundProduct) {
          setProduct(foundProduct);
          setSelectedImage(foundProduct.photo);
        } else {
          setError("Produto não encontrado.");
        }
      })
      .catch(() => setError("Não foi possível carregar o produto."))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p className={styles.loading}>Carregando produto...</p>;
  if (error) return <p className={styles.error}>{error}</p>;
  if (!product) return <p className={styles.error}>Produto não encontrado.</p>;

  const images = product.photos || [product.photo];

  const handleAddToCart = () => {
    console.log(`Adicionado ${quantity} unidade(s) do produto ao carrinho`);
  };

  return (
    <main className={styles.productDetail}>
      <section className={styles.container}>
        <div className={styles.gallery}>
          <div className={styles.mainImage}>
            <img
              src={selectedImage}
              alt={product.productName}
              title={product.productName}
              loading="lazy"
            />
          </div>
          <div className={styles.thumbnails}>
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.productName} ${index + 1}`}
                title={`${product.productName} ${index + 1}`}
                className={selectedImage === image ? styles.active : ""}
                onClick={() => setSelectedImage(image)}
                loading="lazy"
              />
            ))}
          </div>
        </div>

        <div className={styles.info}>
          <h1>{product.productName}</h1>

          <div className={styles.rating}>
            <span className={styles.stars}>★★★★★</span>
            <span className={styles.reviews}>
              ({product.reviews || 0} avaliações)
            </span>
          </div>

          <div className={styles.priceSection}>
            <p className={styles.oldPrice}>
              R${" "}
              {((product.price / (1 - 10 / 100)) * quantity).toLocaleString(
                "pt-BR",
                {
                  minimumFractionDigits: 2,
                },
              )}
            </p>
            <strong className={styles.price}>
              R${" "}
              {(product.price * quantity).toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
              })}
            </strong>
            <p className={styles.discount}>10% OFF</p>
          </div>

          <p className={styles.installments}>
            ou 2x de R${" "}
            {((product.price * quantity) / 2).toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
            })}{" "}
            sem juros
          </p>

          <p className={styles.shipping}>Frete grátis</p>

          <p className={styles.description}>
            {product.descriptionLong || product.descriptionShort}
          </p>

          <div className={styles.actions}>
            <Counter onChange={setQuantity} />
            <button className={styles.btn} onClick={handleAddToCart}>
              Comprar
            </button>
          </div>

          <div className={styles.details}>
            <div className={styles.detailItem}>
              <span>SKU</span>
              <p>123456</p>
            </div>
            <div className={styles.detailItem}>
              <span>Categoria</span>
              <p>{product.category || "Sem categoria"}</p>
            </div>
            <div className={styles.detailItem}>
              <span>Disponibilidade</span>
              <p>Em Estoque</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.relatedSection}>
        <h2>Produtos Relacionados</h2>
        <ProductCarousel />
      </section>
    </main>
  );
}
