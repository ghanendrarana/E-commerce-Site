import React, { useState, useEffect } from "react";

import Header from "../../layout/header/header";
import styles from "./login.module.css";
import { Link } from "react-router";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
  }

  return (
    <div>
      <Header />
      <div className={styles.loginMain}>
        <div className={styles.header}>LOGIN</div>
        <form onSubmit={handleSubmit} className={styles.loginForm}>
          <div className={styles.emailContainer}>
            <div>Email</div>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.passwordContainer}>
            <div> Password</div>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={styles.buttonContainer}>
            <button type="submit">Sign In</button>
          </div>
        </form>
        <div className={styles.register}>
          New Here? <Link to="/register">Register</Link>{" "}
        </div>
      </div>
    </div>
  );
}
