import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import toast from "react-hot-toast";
import styles from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const isEnglish = (text) => /^[a-zA-Z\s]+$/.test(text);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query.trim() === "") {
      toast.error("Please enter a search term!");
      return;
    }
    if (!isEnglish(query)) {
      toast.error("Sorry, but our search engine only speaks English! Try again, mate!");
      return;
    }
    onSubmit(query);
    setQuery("");
  };

  const handleIconClick = () => {
    if (query.trim() === "") {
      toast.error("Please enter a search term!");
      return;
    }
    if (!isEnglish(query)) {
      toast.error("Sorry, but our search engine only speaks English! Try again, mate!");
      return;
    }
    onSubmit(query);
    setQuery("");
  };

  return (
    <header className={styles.header}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Search images and photos"
          />
          <FaSearch className={styles.searchIcon} onClick={handleIconClick} />
        </div>
      </form>
    </header>
  );
};

export default SearchBar;
