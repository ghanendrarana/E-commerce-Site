import React from 'react'
import styles from "./product-menu.module.css";
import { X } from 'lucide-react';


export default function ProductMenu({ setOpenMenu, openMenu }) {
  return (
    <div className={`${styles.container} ${openMenu ? styles.open : styles.closed}`}>
      <div className={styles.header}>
        <span>Product Menu</span>
        <button onClick={() => setOpenMenu(false)} className={styles.closeButton}>
          <X size={12} />
        </button>
      </div>
        <ul>
            <li><a href="/products/product1">Product 1</a></li>
            <li><a href="/products/product2">Product 2</a></li>
            <li><a href="/products/product3">Product 3</a></li>
        </ul>
    </div>
  )
}
