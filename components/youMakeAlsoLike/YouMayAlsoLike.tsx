import styles from "./YouMayAlsoLike.module.css";
import { Product } from "../../pages/Products";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const YouMayAlsoLike = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getProduct = async () => {
      const res = await fetch(`http://localhost:3000/products?slug=${slug}`);
      const data = await res.json();
      setProduct(data[0]); 
    };

    if (slug) getProduct();
  }, [slug]);

  if (!product) return null;

  return (
    <div className="container">
      <h2 className={styles.heading}>YOU MAY ALSO LIKE</h2>

      <div className={styles.alsoItems}>
        {product.others?.map((otherProduct) => (
          <div key={otherProduct.slug} className={styles.alsoItem}>
            <img
              className={styles.alsoImg}
              src={"/" + otherProduct.image.desktop.replace("./", "")}
              alt={otherProduct.name}
            />
            <h2 className={styles.alsoName}>{otherProduct.name}</h2>
            <button
  onClick={() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(`/single-product/${otherProduct.slug}`);
  }}
  className={`button ${styles.button}`}
>
  SEE PRODUCT
</button>

          </div>
        ))}
      </div>
    </div>
  );
};

export default YouMayAlsoLike;
