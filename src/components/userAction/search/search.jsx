import React from 'react';
import { Search } from 'lucide-react';

import styles from './search.module.css';

export default function SearchField() {
    return (
        <button  className={styles.search}>
            <Search  />
        </button>
    );
}