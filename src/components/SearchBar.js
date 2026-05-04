import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (term.trim()) {
      onSearch(term);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        placeholder="Cerca notizie..."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        className="search-input"
      />
      <button type="submit" className="search-button">
        CERCA
      </button>
    </form>
  );
};

export default SearchBar;