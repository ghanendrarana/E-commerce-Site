import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from "../../layout/header/header";
import styles from "./home.module.css";
import FurnitureProducts from "../../../data/products/products.js";
import useCartStore from "../../../store/useCartStore.js";

import modernNessaChair from "../../../assets/FurniturePicture/modern-nessa-chair.png";
import barStool from "../../../assets/FurniturePicture/stylish-bar-stools-with-gray-upholstery-and-wooden-legs_53133094.png";
import roundTable from "../../../assets/FurniturePicture/modern-round-table-with-wooden-legs-placed-on-a-bright_55450163.png";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { addToCart } = useCartStore();
  const navigate = useNavigate();
  
  const heroProducts = FurnitureProducts.filter(
    (product) => product.id === 1 || product.id === 2
  );
  
  const product = heroProducts[currentIndex];
  
  //auto-slide every 5 seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === heroProducts.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [heroProducts.length]);

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
          {heroProducts.map((_, index) => (
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

      <div className={styles.categoryContainer}>
        <div>
          <div>
            <div className={styles.categoryTitle}>Chairs</div>
            <div className={styles.categoryDiscription}>
              Discover our collection of stylish and comfortable chairs,
              designed to suit every space and occasion.
            </div>
            <Link to="/category/chairs">
              <div className={styles.categoryLink}>View Collection</div>
            </Link>
          </div>
          <img src={modernNessaChair} alt="Chairs" className={styles.img} />
        </div>
        <div>
          <div>
            <div className={styles.categoryTitle}>Stools</div>
            <div className={styles.categoryDiscription}>
              Discover versatile stools that combine comfort, durability, and
              design — the perfect seating solution for any space.
            </div>
            <div className={styles.categoryLink}>View Collection</div>
          </div>
          <img src={barStool} alt="Stools" className={styles.img} />
        </div>
        <div>
          <div>
            <div className={styles.categoryTitle}>Tables</div>
            <div className={styles.categoryDiscription}>
              Explore a wide range of tables that combine durability, function,
              and timeless design — perfect for dining, working, or relaxing.
            </div>
            <div className={styles.categoryLink}>View Collection</div>
          </div>
          <img src={roundTable} alt="Tables" className={styles.img} />
        </div>
      </div>
    </div>
  );
}
