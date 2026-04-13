import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const API_KEY = "KiTiAWy5M33XQjzG3PFBx3NC0Pij1RLALpSGWF9zpGowVCbs";
    const url = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${API_KEY}`;

    axios.get(url)
      .then(res => setBooks(res.data.results.books))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container">
      <h2 style={{ textAlign: 'center', margin: '30px 0' }}>NYT Best Sellers - Fiction</h2>
      <div className="news-grid">
        {books.map((book) => (
          <div key={book.rank} className="article-card">
            <img src={book.book_image} alt={book.title} className="article-image" />
            <h2 className="article-title">{book.title}</h2>
            <p className="article-abstract">By {book.author}</p>
            <p style={{fontSize: '13px', color: '#666'}}>{book.description}</p>
            <a href={book.amazon_product_url} target="_blank" rel="noreferrer" className="nav-button" style={{marginTop: '10px', display: 'block', color: '#567b95'}}>
              BUY ON AMAZON
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;