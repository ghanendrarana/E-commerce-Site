import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from "../../layout/header/header";
import styles from "./home.module.css";
import FurnitureProducts from "../../../data/products/products.js";
import useCartStore from "../../../store/useCartStore.js";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const product = FurnitureProducts[currentIndex];
  const { addToCart } = useCartStore();
  const navigate = useNavigate();

  //auto-slide every 5 seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === FurnitureProducts.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  function handleShopNow() {
    addToCart(product);
    navigate("/cart");
  }

  function handleAddToCart() {
    addToCart(product);
  }

  return (
    <div>
      <Header />

      <div className={styles.mainContainer}>
        <div className={styles.childContainer}>
          <div className={styles.discriptionContainer}>
            <div className={styles.productName}> {product.name} </div>
            <div className={styles.description}> {product.description} </div>
            <span className={styles.buttonContainer}>
              <button
                to="cart"
                onClick={handleShopNow}
                className={styles.button}
              >
                Shop Now
              </button>
              <button onClick={handleAddToCart} className={styles.button}>
                Add To Cart
              </button>
            </span>
          </div>
          <div>
            <img
              src={product.image}
              alt={product.name}
              className={styles.image}
            />
          </div>
        </div>
        <div className={styles.dotsWrapper}>
          {FurnitureProducts.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${
                index === currentIndex ? styles.activeDot : ""
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
