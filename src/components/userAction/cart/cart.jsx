import React from 'react';
import {ShoppingCart} from 'lucide-react';

import styles from './cart.module.css';

export default function Cart() {
    return (
        <button  className={styles.cart}>
            <ShoppingCart />
        </button>
    );
}