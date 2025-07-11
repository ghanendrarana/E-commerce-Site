import React, { useState } from "react";

import Header from "../../layout/header/header";
import styles from "./register.module.css";

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
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
    console.log(
      `firsName: ${formData.firstName}, lastName: ${formData.lastName}, email: ${formData.email}, password: ${formData.password}, confirmPassword: ${formData.confirmPassword} `
    );
  }

  return (
    <div>
      <Header />
      <div className={styles.registrationPage}>
        <div>Create Account</div>
        <form onSubmit={handleSubmit} className={styles.registrationForm}>
          <div>
            <div>First Name</div>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter your first name"
            />
          </div>
          <div>
            <div>Last Name</div>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter your last name"
            />
          </div>
          <div>
            <div>Email</div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>
          <div>
            <div>Password</div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </div>
          <div>
            <div>Confirm Password</div>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
            />
          </div>
          <div>
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}
