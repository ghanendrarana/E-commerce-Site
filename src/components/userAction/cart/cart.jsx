import React from "react";
import Header from "../../layout/header/header";
import useCartStore from "../../../store/useCartStore";
import styles from "./cart.module.css";

export default function Cart() {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);

  const [quantities, setQuantities] = React.useState(1);

  return (
    <div>
      <Header />
      {cart.length === 0 ? (
        <div className={styles.emptyCart}>
          <h3>Your Cart</h3>
          <p> Your cart is currently empty. </p>
        </div>
      ) : (
        cart.map((item, index) => (
          <div>
            <div key={index} className={styles.mainContainer}>
              <img src={item.image} alt="Armchair" className={styles.image} />
              <div className={styles.nameContainer}>
                <div> {item.name}</div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className={styles.removeButton}
                >
                  Remove
                </button>
              </div>
              <div> $ {item.price}</div>
              <input
                type="number"
                min="1"
                value={quantities}
                onChange={(e) => {
                  setQuantities(e.target.value);
                }}
              />
              <div> $ {parseFloat((item.price * quantities).toFixed(2))}</div>
            </div>
            <div className={styles.amountContainer}>
              <h3>Total</h3>
              <div>Total Amount</div>
            </div>
            <div className={styles.buttonContainer}>
              <button onClick={clearCart}> Clear All</button>
              <button>Update</button>
              <button>Check Out</button>
            </div>
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
