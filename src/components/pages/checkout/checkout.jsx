import React, { use } from "react";
import { useState, useEffect } from "react";
import useCartStore from "../../../store/useCartStore";
import useCountryStore from "../../../store/useCountryStore";

import styles from "./checkout.module.css";
import { data } from "react-router";

export default function CheckOut() {
  const [shippingCharge, setShippingCharge] = useState("");
  const { countries, fetchCountries } = useCountryStore();
  const checkoutData = useCartStore((state) => state.checkoutData);

  const [formData, setFormData] = useState({
    contact: "",
    country: "",
    fullName: "",
    address: "",
    apartment: "",
    city: "",
    postalode: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    totalAmount: "",
  });

  if (!checkoutData) {
    return <p>No checkout data found. Please add items to cart.</p>;
  }

  useEffect(() => {
    if (countries.length === 0) {
      console.log("Countries not fetch yet");
      fetchCountries();
    } else {
      console.log("countries already fetched");
      console.log(countries);
    }
  }, [countries, fetchCountries]);

  return (
    <form className={styles.mainContainer}>
      <div className={styles.header}>Header Part</div>
      <div className={styles.body}>
        <div>
          <div className={styles.contactDetails}>
            <h4>Contact</h4>
            <input
              type="text"
              placeholder="Email or Phone Number"
              // onChange={(e) => {
              //   setContact(e.target.value);
              //   console.log(e.target.value);
              // }}
            />
          </div>
          <div className={styles.deliveryAddress}>
            <div>Delivery Address</div>
            <select>
              <option>Country/Region</option>
              {countries.map((c, index) => (
                <option key={index} value={c.country}>
                  {c.country}
                </option>
              ))}
            </select>
            <input type="text" placeholder="Full Name" />
            <input type="text" placeholder="Address" />
            <input
              type="text"
              placeholder="Apartment, suite, etc. (optional)"
            />
            <input type="text" placeholder="City" />
            <input type="text" placeholder="Postal Code (Optional)" />
            <div className={styles.labelContainer}>
              <input type="checkbox" />
              <label>Save this information for next time</label>
            </div>
          </div>
          <div>Shipping Method</div>
          <div className={styles.paymentDetails}>
            <div className=" styles.paymentHeader">
              <div>Payment</div>
              <div className={styles.notice}>
                All transaction are secure and encrypted
              </div>
            </div>
            <div className={styles.cardDetails}>
              <div>Credit Card</div>
              <label>
                <input type="text" placeholder="Card Number" />
                <input type="month" placeholder="Expiration Date (MM/YY)" />
                <input type="password" placeholder="CVV Code" />
              </label>
            </div>
            <button className={styles.payNow}>Pay Now</button>
          </div>
        </div>
        <div>
          {checkoutData?.checkoutItems?.map((item) => (
            <div key={item.id} className={styles.paymentDetails}>
              <div className={styles.itemDetails}>
                <img
                  src={item.image}
                  alt={item.name}
                  className={styles.image}
                />
                <div>{item.name}</div>
                <div>${item.price}</div>
                <div>{item.quantity}</div>
                <div>${item.total}</div>
              </div>
              <div className={styles.paymentSummary}>
                <div className={styles.row}>
                  <span>Sub total:</span>
                  <span>$ {item.total}</span>
                </div>
                <div className={styles.row}>
                  <span>Shipping Charge:</span>
                  <span>
                    ${" "}
                    <input
                      type="number"
                      onChange={(e) => setShippingCharge(e.target.value)}
                      placeholder="Shipping charge"
                    />
                  </span>
                </div>
                <div className={styles.row}>
                  <span className={styles.grandTotal}>Grand Total:</span>
                  <span>
                    USD ${" "}
                    {(Number(checkoutData?.totalAmount) || 0) +
                      (Number(shippingCharge) || 0)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </form>
  );
}
