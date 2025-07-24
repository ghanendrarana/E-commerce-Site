import React from "react";
import Header from "../../layout/header/header";
import styles from "./home.module.css";

import opulentBaroqueArmchair from "../../../assets/Furniture Picture/opulent-baroque-armchair.jpg";

export default function Home() {
  return (
    <div>
      <Header />

      <div className={styles.mainContainer}>
        <div className={styles.discriptionContainer}>
          <div className={styles.itemName}>Opulent Baroque Armchair</div>
          <text>
            This is a luxurious vintage armchair with a high tufted backrest and
            rolled armrests, upholstered in soft beige fabric. It features
            ornate gold-toned wooden carvings and comes with two decorative
            pillows, giving it an elegant and classic look.
          </text>
          <div>Shop Now</div>
        </div>
        <img src={opulentBaroqueArmchair} alt="opulent-baroque-armchair" className={styles.image}/>
      </div>
    </div>
  );
}
