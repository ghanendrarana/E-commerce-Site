import React from "react";
import { Link } from "react-router-dom";

import styles from "./header.module.css";

import ProductMenuButton from "../product-menu/product-menu-button";
import SearchField from "../../userAction/search/search";
import Cart from "../../userAction/cart/cart";
import Facebook from "../../../icons/facebook";
import X from "../../../icons/x";
import Instagram from "../../../icons/instagram";
import Tiktok from "../../../icons/tiktok";

import { ShoppingCart } from "lucide-react";
import { CircleUserRound } from "lucide-react";

import useCartStore from "../../../store/useCartStore";

export default function Header() {
  const cart = useCartStore((state) => state.cart);
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerTop}>
        <p>Welcome To My Page</p>

        <div className={styles.logo}>Logo</div>

        <div className={styles.socialMedia}>
          <div>
            {" "}
            <Facebook width={21} height={21} />{" "}
          </div>
          <div>
            {" "}
            <X width={21} height={21} />{" "}
          </div>
          <div>
            {" "}
            <Instagram width={21} height={21} />{" "}
          </div>
          <div>
            {" "}
            <Tiktok width={21} height={21} />{" "}
          </div>
        </div>
      </div>

      <nav className={styles.nav}>
        <span>
          <ProductMenuButton />
        </span>

        <div className={styles.navLinks}>
          <span>
            <Link to="/">Home</Link>
          </span>
          <span>
            <Link to="/about">About</Link>
          </span>
          <span>
            <Link to="/blog">Blog</Link>
          </span>
          <span>
            <Link to="/faqs">FAQs</Link>
          </span>
          <span>
            <Link to="/contact">Contact</Link>
          </span>
        </div>

        <div className={styles.userAction}>
          <SearchField />
          <Link to="/cart" className={styles.cartIconWrapper}>
            <ShoppingCart />
            {cart.length > 0 && (
              <span className={styles.cardBadge}>{cart.length}</span>
            )}
          </Link>

          <Link to="/logIn">
            {" "}
            <CircleUserRound />{" "}
          </Link>
        </div>
      </nav>
    </header>
  );
}
