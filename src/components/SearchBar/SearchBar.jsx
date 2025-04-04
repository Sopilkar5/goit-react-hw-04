import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; 
import styles from './SearchBar.module.css';

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(query); 
    setQuery('');
  };

  const handleIconClick = () => {
    onSubmit(query); 
    setQuery('');
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
          <FaSearch
            className={styles.searchIcon}
            onClick={handleIconClick}
          />
        </div>
      </form>
    </header>
  );
};

export default SearchBar;
