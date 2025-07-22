import React, { useState } from "react";
import Header from "../../layout/header/header";

import styles from "./contact.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log (formData)
  }

  return (
    <div>
      <Header />
      <div className={styles.contactMain}>
        <div className={styles.contactHeader}>Contact Us</div>
        <form onSubmit={handleSubmit} className={styles.contactForm}>
          <div>
            <div>Name</div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
            />
          </div>
          <div>
            <div>Email</div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
            />
          </div>
          <div>
            <div>Phone Number</div>
            <input
              type="number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
            />
          </div>
          <div>
            <div>Message</div>
            <textarea
              type="text"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              className={styles.contactMessage}
            />
          </div>
          <div>
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}
