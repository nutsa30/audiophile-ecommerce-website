import styles from "./SingleProductCard.module.css";
import "../../App.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Product } from "../../pages/Products";
import YouMayAlsoLike from "../youMakeAlsoLike/YouMayAlsoLike";
import { useCart } from "../../context/CartContext";

export const SingleProductCard = () => {
  const { addToCart } = useCart();
  const [product, setProduct] = useState<null | Product>(null);
  const [quantity, setQuantity] = useState<number>(0);

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

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => quantity > 0 && setQuantity((prev) => prev - 1);

  const addProductToCart = () => {
    if (product && quantity > 0) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: "/" + product.image.desktop.replace("./", ""),
        quantity: quantity,
      });
    }
  };

  if (!product) return <div className="container">Loading...</div>;

  return (
    <>
      <div className="container">
        <button
          onClick={() => navigate("/products/" + product.category)}
          className={styles.btn}
        >
          Go Back
        </button>

        <div className={`container ${styles.card}`}>
          <img
            className={styles.image}
            src={"/" + product.image.desktop.replace("./", "")}
            alt={product.name}
          />

          <div className={styles.infoCard}>
            <h2 className={styles.h2}>{product.name}</h2>
            <p className={styles.p}>{product.description}</p>
            <h5 className={styles.h5}>$ {product.price}</h5>

            <div className={styles.countButton}>
              <div className={styles.spanButton}>
                <button
                  className={`orangeHover ${styles.button1}`}
                  onClick={decreaseQuantity}
                >
                  -
                </button>
                <span className={styles.span}>{quantity}</span>
                <button
                  className={`orangeHover ${styles.button1}`}
                  onClick={increaseQuantity}
                >
                  +
                </button>
              </div>
              <button
                onClick={addProductToCart}
                className={`button ${styles.button3}`}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={`container ${styles.card2}`}>
        <div className={styles.featuresDiv}>
          <h2 className={styles.features}>FEATURES</h2>
          <div className={styles.ps}>
            <p className={styles.featuresP}>{product.features}</p>
          </div>
        </div>

        <div className={styles.inTheBoxDiv}>
          <h2 className={styles.inTheBox}>IN THE BOX</h2>
          <ul className={styles.inTheBoxP}>
            {product.includes.map((item, index) => (
              <li key={index}>
                <strong>{item.quantity}x</strong> {item.item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={`container ${styles.galleryDiv}`}>
        <div className={styles.galleryRight}>
          <img
            className={styles.galleryImg}
            src={"/" + product.gallery.first.desktop.replace("./", "")}
            alt=""
          />
          <img
            className={styles.galleryImg}
            src={"/" + product.gallery.second.desktop.replace("./", "")}
            alt=""
          />
        </div>
        <img
          className={styles.galleryImg}
          src={"/" + product.gallery.third.desktop.replace("./", "")}
          alt=""
        />
      </div>

      <YouMayAlsoLike />
    </>
  );
};
