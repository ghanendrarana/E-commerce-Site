import { React, useState } from "react";
import { Link } from "react-router";
import Header from "../../layout/header/header";
import styles from "./home.module.css";
import FurnitureProducts from "../../../data/products/products.jsx";
import useProductStore from "../../../store/useProductStore.js";

export default function Home() {
  const product = FurnitureProducts[1];
  const setSelectedProduct = useProductStore(
    (state) => state.setSelectedProduct
  );

  function handleClick() {
    setSelectedProduct(product);
  }

  return (
    <div>
      <Header />

      <div className={styles.mainContainer}>
        <div className={styles.discriptionContainer}>
          <div className={styles.productName}> {product.name} </div>
          <div className={styles.description}> {product.description} </div>
          <span>
            <Link to="/shopNow" onClick={handleClick} className={styles.button}>
              SHOP NOW
            </Link>
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
    </div>
  );
}
