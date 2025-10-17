import React from "react";
import FurnitureProducts from "../../../../data/products/products";
import styles from "./chairsPages.module.css"

export default function ChairsPages() {

  const chairProducts = FurnitureProducts.filter (
    (product) => product.category === "Chair"
  );

  console.log(chairProducts);

  return (
    <div>
      <div className={styles.header}>Chairs</div>
      <div className={styles.mainContainer}>
        <div>Categories</div>
        <div>
          {chairProducts.map((products) => (
              <div key={products.id}>
                <img src={products.image} alt={products.name} className={styles.image}/>
                <div>{products.name}</div>
                <div>{products.price}</div>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
}
