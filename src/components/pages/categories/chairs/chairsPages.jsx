import React from "react";
import FurnitureProducts from "../../../../data/products/products";
import styles from "./chairsPages.module.css";
import useCartStore from "../../../../store/useCartStore";

export default function ChairsPages() {

  const {addToCart} = useCartStore();

  const chairProducts = FurnitureProducts.filter(
    (product) => product.category === "Chair"
  );

  console.log(chairProducts);

  function handleAddToCart (product) {
    console.log(product);
    addToCart(product);
  }

  return (
    <div>
      <div className={styles.header}>Chairs</div>
      <div className={styles.mainContainer}>
        <div>Categories</div>
        <div className={styles.productsGrid}>
          {chairProducts.map((products) => (
            <div key={products.id} className={styles.productCard}>
              <div className={styles.imageContainer}>
                <img
                  src={products.image}
                  alt={products.name}
                  className={styles.image}
                />
              </div>
              <div className={styles.detailContainer}>
                <div className={styles.name}>{products.name}</div>
                <div className={styles.price}> $ {products.price}</div>
                <button
                  className={styles.addtoCartButton}
                  onClick={()=>handleAddToCart(products)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
