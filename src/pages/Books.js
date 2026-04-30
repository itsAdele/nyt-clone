import React from 'react';
import { useFetch } from '../hooks/useFetch'; 

const Books = () => {
  const { data: books, loading, error } = useFetch('books/v3/lists/current/hardcover-fiction.json');

  return (
    <div className="container">
      <h2 className="books-title">NYT Best Sellers - Fiction</h2>
      
      {loading && <p className="status-message">Caricamento libri...</p>}
      {error && <p className="error-message">{error}</p>}
      
      {!loading && !error && (
        <div className="news-grid">
          {books.map((book) => (
            <div key={book.rank} className="article-card">
              <img src={book.book_image} alt={book.title} className="article-image" />
              <h2 className="article-title">{book.title}</h2>
              <p className="article-abstract">By {book.author}</p>
              <p className="book-description">{book.description}</p>
              
              <a 
                href={book.amazon_product_url} 
                target="_blank" 
                rel="noreferrer" 
                className="nav-button buy-link"
              >
                BUY ON AMAZON
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Books;