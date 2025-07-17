import React, { useState } from "react";
import { Search } from "lucide-react";

import styles from "./search.module.css";

export default function SearchField() {
  const [showInput, setShowInput] = useState(false);
  const [query, setQuery] = useState("");

  //it stops refreshing of websit each time when clicked
  function handleSearch(e) {
    e.preventDefault();
    console.log(query);
  }

  // to change showInput states from true and false
  function toggleInput() {
    setShowInput((prev) => !prev);
  }

  return (
    <form onSubmit={handleSearch} className={styles.searchContainer}>
      <div  className={styles.searchWrapper}>
        {showInput && (
          <input
            type="text"
            name="searchQuery"
            value={query}
            placeholder="Search Products"
            onChange={(e) => setQuery(e.target.value)}
            className={styles.searchInput}
          />
         )}
        <button
          type={showInput ? "Submit" : "button"}
          onClick={showInput ? null : toggleInput}
          className={styles.searchBtn}
        >
          <Search />
        </button>
      </div>
    </form>
  );
}
