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
    <form onSubmit={handleSubmit} style={{ textAlign: 'center', margin: '20px 0' }}>
      <input
        type="text"
        placeholder="Cerca notizie..."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        style={{
          padding: '10px',
          width: '60%',
          border: '1px solid #ccc',
          fontFamily: 'Georgia'
        }}
      />
      <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer', background: '#000', color: '#fff', border: 'none', marginLeft: '5px' }}>
        CERCA
      </button>
    </form>
  );
};

export default SearchBar;