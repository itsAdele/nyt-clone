import React from 'react';

const Navbar = ({ onCategoryChange }) => {
  const categories = ['home', 'world', 'politics', 'technology', 'science', 'health', 'sports'];

  return (
    <nav className="navbar">
      <ul>
        {categories.map((cat) => (
          <li key={cat}>
            <button 
              className="nav-button" 
              onClick={() => onCategoryChange(cat)}
            >
              {cat.toUpperCase()}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;