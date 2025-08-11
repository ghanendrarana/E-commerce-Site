import React from "react";
import Header from "../../layout/header/header";
import useCartStore from "../../../store/useCartStore";
import styles from "./cart.module.css";

export default function Cart() {
  const cart = useCartStore((state) => state.cart);

  const [quantities, setQuantities] = React.useState(1);

  return (
    <div>
      <Header />
      {cart.length === 0 ? (
        <p> No items in Cart </p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className={styles.mainContainer}>
            <img src={item.image} alt="Armchair" className={styles.image} />
            <div> {item.name}</div>
            <div> $ {item.price}</div>
            <input
              type="number"
              min="1"
              value={quantities}
              onChange={(e) => {
                setQuantities(e.target.value);
                console.log(e.target.value);
              }}
            />
            <div> $ {item.price * quantities}</div>
          </div>
        ))
      )}
    </div>
  );
}

// select indivudial item quantity

// const handleQuantityChange = (id, value) => {
//     setQuantities((prev) => ({
//       ...prev,
//       [id]: value
//     }));
//   };

//   return (
//     <div>
//       <Header />
//       {cart.length === 0 ? (
//         <p>No items in Cart</p>
//       ) : (
//         cart.map((item) => (
//           <div key={item.id} className={styles.mainContainer}>
//             <img src={item.image} alt={item.name} className={styles.image} />
//             <div>{item.name}</div>
//             <div>{item.price}</div>
//             <input
//               type="number"
//               min="1"
//               value={quantities[item.id] || 1}
//               onChange={(e) => handleQuantityChange(item.id, e.target.value)}
//             />
//             <div>
//               Total Amount:{" "}
//               {item.price * (quantities[item.id] || 1)}
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }