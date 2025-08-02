import React from "react" 
import Header from "../../layout/header/header";
import useProductStore from "../../../store/useProductStore";

import styles from "./shopNow.module.css";

export default function ShopNow () {
    const product = useProductStore((state) => state.selectedProduct);
     console.log(product);
    if (!product) return <p>No Product Selected</p>

    return (
        <div>
            <Header />
            <div className={styles.mainContainer}>
                <div className={styles.detailsContainer}>
                    <img src={product.image} />
                    <div>
                        <div className={styles.productName}>{product.name}</div>
                        <div className={styles.productPrice}>{product.price}</div>
                        <div>{product.description}</div>
                        <div>Size</div>
                        <div>Color</div>
                        <div>Quantity</div>
                        <div>Add to Cart</div>
                    </div>
                </div>
            </div>
        </div>
    );
}