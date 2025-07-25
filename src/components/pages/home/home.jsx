import React from "react";
import Header from "../../layout/header/header";

import styles from "./home.module.css";

import FurnitureProducts from "../../../data/products/products.jsx";

import opulentBaroqueArmchair from "../../../assets/Furniture Picture/opulent-baroque-armchair.jpg";

export default function Home() {
  const product = FurnitureProducts[1];
  return (
    <div>
      <Header />

      <div className={styles.mainContainer}>
        <div className={styles.discriptionContainer}>
          <div className={styles.productName}> {product.name} </div>
          <div className={styles.description}> {product.description} </div>
          <button className={styles.button}>SHOP NOW</button>
        </div>
        <div>
          <img src={product.image} alt={product.name} className={styles.image} />
        </div>
      </div>
    </div>
  );
}
