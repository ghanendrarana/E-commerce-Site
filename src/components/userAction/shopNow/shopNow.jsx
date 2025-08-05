import React from "react";
import Header from "../../layout/header/header";
import useProductStore from "../../../store/useProductStore";

import styles from "./shopNow.module.css";

export default function ShopNow() {
  const product = useProductStore((state) => state.selectedProduct);
  const [selectedSize, setSelectedSize] = React.useState("");
  const [selectedColor, setSelectedColor] = React.useState("");
  const [quantity, setQuantity] = React.useState(1);

  console.log(product);

  if (!product) return <p>No Product Selected</p>;

  function handleAddToCart() {
    const cartItem ={
      productId: product.id,
      name: product.name,
      price: product.price,
      size: selectedSize,
      color: selectedColor,
      quantity: quantity,
    }
    console.log(cartItem);
  }

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
            <div>
              <label htmlFor="sizeSelect" className={styles.size}>
                Size{" "}
              </label>
              <select
                id="sizeSelect"
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
              >
                <option value="">Choose Size</option>
                {product.sizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="colorSelect" className={styles.color}>
                Color{" "}
              </label>
              <select
                id="colorSelect"
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
              >
                <option value="">Choose Color</option>
                {product.colors?.map((color) => (
                  <option key={color} value={color}>
                    {color}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.buttomContainer}>
              <label htmlFor="quantityInput" className={styles.qunatity}>
                Quantity
              </label>
              <input
                type="number"
                id="quantityInput"
                min="1"
                value={quantity}
                onChange={(e)=> setQuantity(e.target.value)}
              />
              <button onClick={handleAddToCart} className={styles.button}>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
