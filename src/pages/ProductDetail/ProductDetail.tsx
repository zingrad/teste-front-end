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

  if (loading) return <p className={styles.loading} role="status" aria-live="polite">Carregando produto...</p>;
  if (error) return <p className={styles.error} role="alert">{error}</p>;
  if (!product) return <p className={styles.error} role="alert">Produto não encontrado.</p>;

  const images = product.photos || [product.photo];

  const handleAddToCart = () => {
    console.log(`Adicionado ${quantity} unidade(s) do produto ao carrinho`);
  };

  return (
    <main className={styles.productDetail}>
      <section className={styles.container} aria-label="Detalhes do produto">
        <figure className={styles.gallery}>
          <div className={styles.mainImage}>
            <img
              src={selectedImage}
              alt={product.productName}
              title={product.productName}
              width="400"
              height="400"
            />
          </div>
          <figcaption className="sr-only" style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', clip: 'rect(0,0,0,0)' }}>
            Galeria de imagens de {product.productName}
          </figcaption>
          <div className={styles.thumbnails} role="group" aria-label="Miniaturas do produto">
            {images.map((image, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setSelectedImage(image)}
                aria-label={`Ver imagem ${index + 1} de ${product.productName}`}
                aria-pressed={selectedImage === image}
                style={{ padding: 0, border: 'none', background: 'none', cursor: 'pointer' }}
              >
                <img
                  src={image}
                  alt={`${product.productName} ${index + 1}`}
                  title={`${product.productName} ${index + 1}`}
                  className={selectedImage === image ? styles.active : ""}
                  loading="lazy"
                  width="100"
                  height="100"
                />
              </button>
            ))}
          </div>
        </figure>

        <div className={styles.info}>
          <h1>{product.productName}</h1>

          <div className={styles.rating} aria-label={`Avaliação: 5 de 5 estrelas, ${product.reviews || 0} avaliações`}>
            <span className={styles.stars} aria-hidden="true">★★★★★</span>
            <span className={styles.reviews}>
              ({product.reviews || 0} avaliações)
            </span>
          </div>

          <div className={styles.priceSection}>
            <p className={styles.oldPrice}>
              <span className="sr-only" style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', clip: 'rect(0,0,0,0)' }}>Preço anterior:</span>
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
            <button className={styles.btn} onClick={handleAddToCart} type="button">
              Comprar
            </button>
          </div>

          <dl className={styles.details}>
            <div className={styles.detailItem}>
              <dt>SKU</dt>
              <dd>123456</dd>
            </div>
            <div className={styles.detailItem}>
              <dt>Categoria</dt>
              <dd>{product.category || "Sem categoria"}</dd>
            </div>
            <div className={styles.detailItem}>
              <dt>Disponibilidade</dt>
              <dd>Em Estoque</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className={styles.relatedSection} aria-label="Produtos relacionados">
        <h2>Produtos Relacionados</h2>
        <ProductCarousel />
      </section>
    </main>
  );
}
