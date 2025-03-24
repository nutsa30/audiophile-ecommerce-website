import { useNavigate } from "react-router-dom";
import { Product } from "../../pages/Products";
import styles from './ProductCard.module.css';
import "../../App.css";

type Props = {
  product: Product;
  flexDirection?: "row" | "row-reverse";
};

const ProductCard = ({ product, flexDirection = "row" }: Props) => {
  const navigate = useNavigate();

  return (
    <div
      key={product.id}
      className={`container ${styles.card}`}
      style={{ flexDirection }}
    >
      <img
        className={styles.image}
        src={"/" + product.image.desktop.replace("./", "")} 
        alt={product.name}
      />
      <div className={styles.infoCard}>
        <h2 className={styles.h2}>{product.name}</h2>
        <p className={styles.p}>{product.description}</p>
        <button
          onClick={() => navigate("/single-product/" + product.slug)} 
          className="button"
        >
          SEE PRODUCT
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
