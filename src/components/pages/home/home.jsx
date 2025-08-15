import { React, useState } from "react";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom"
import Header from "../../layout/header/header";
import styles from "./home.module.css";
import FurnitureProducts from "../../../data/products/products.js";
import useCartStore from "../../../store/useCartStore.js";

export default function Home() {
  const product = FurnitureProducts[1];
  const { addToCart } = useCartStore();
  const navigate = useNavigate();

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
        <div className={styles.discriptionContainer}>
          <div className={styles.productName}> {product.name} </div>
          <div className={styles.description}> {product.description} </div>
          <span className={styles.buttonContainer}>
            <button to="cart"  onClick={handleShopNow} className={styles.button}>
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
    </div>
  );
}
