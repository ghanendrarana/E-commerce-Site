import Header from "../../layout/header/header";

import styles from "./register.module.css";

export default function Register() {
  return (
    <div>
      <Header />
      <div className={styles.registrationPage}>
        <div>Create Account</div>
        <form className={styles.registrationForm}>
          <div>
            <div>First Name</div>
            <input type="text" placeholder="Enter your first name" />
          </div>
          <div>
            <div>Last Name</div>
            <input type="text" placeholder="Enter your last name" />
          </div>
          <div>
            <div>Email</div>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div>
            <div>Password</div>
            <input type="password" placeholder="Enter your password" />
          </div>
          <div>
            <div>Confirm Password</div>
            <input type="password" placeholder="Confirm your password" />
          </div>
          <div>
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}
