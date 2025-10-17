import React from "react";
import Header from "../../layout/header/header";
import useCartStore from "../../../store/useCartStore";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./cart.module.css";

export default function Cart() {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);
  const setCheckoutData = useCartStore((state) => state.setCheckoutData);
  const navigate = useNavigate();

  const [quantities, setQuantities] = React.useState(1);

  //to update quantity change in input
  const handleQuantityChange = (id, value) => {
    setQuantities({
      ...quantities,
      [id]: Number(value) || 1,
    });
  };

  //calculate total dinamically
  const totalAmount = cart.reduce((total, item) => {
    const qty = quantities[item.id] || 1;
    return total + item.price * qty;
  }, 0);

  //continue shopping, navigating to home page

  function handleContinueShopping() {
    navigate("/");
  }

  const handleCheckout = () => {
    const checkoutItems = cart.map((item) => ({
      id: item.id,
      name: item.name,
      image: item.image,
      price: item.price,
      quantity: quantities[item.id] || 1,
      total: item.price * (quantities[item.id] || 1),
    }));

    const totalAmount = checkoutItems.reduce((sum, i) => sum + i.total, 0);

    setCheckoutData({ checkoutItems, totalAmount });

    navigate("/checkout");
  };

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
          <div key={index}>
            <div className={styles.mainContainer}>
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
                value={quantities[item.id] || 1}
                onChange={(e) => handleQuantityChange(item.id, e.target.value)}
              />
              <div>
                {" "}
                ${" "}
                {parseFloat(
                  (item.price * (quantities[item.id] || 1)).toFixed(2)
                )}
              </div>
            </div>
          </div>
        ))
      )}
      <div className={styles.amountContainer}>
        <div> Sub Total </div>
        <div>$ {parseFloat(totalAmount).toFixed(2)}</div>
      </div>
      <div className={styles.buttonContainer}>
        <button onClick={clearCart}> Clear All</button>
        <button onClick={handleContinueShopping}>Continue Shopping</button>

        <button to="/checkout" onClick={handleCheckout}>
          Check Out
        </button>
      </div>
    </div>
  );
}
