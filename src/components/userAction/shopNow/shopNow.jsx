import React from "react";
import Header from "../../layout/header/header";
import useProductStore from "../../../store/useProductStore";

import styles from "./shopNow.module.css";

export default function ShopNow() {
  const product = useProductStore((state) => state.selectedProduct);
  console.log(product);
  if (!product) return <p>No Product Selected</p>;

  return (
    <div>
      <Header />
      <div className={styles.mainContainer}>
        <div className={styles.detailsContainer}>
          <img
            src={product.image}
            alt={product.name}
            className={styles.image}
          />
          <div className={styles.discriptionContainer}>
            <div className={styles.productName}>{product.name}</div>
            <div className={styles.productPrice}>{product.price}</div>
            <div>{product.description}</div>
            <div className={styles.size}>Size</div>
            <div className={styles.color}>Color</div>
            <div className={styles.buttomContainer}>
              <div className={styles.qunatity}>Quantity</div>
              <button className={styles.button}>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
