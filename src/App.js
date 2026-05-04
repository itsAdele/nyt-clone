import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Books from './pages/Books';
import './App.css';

function App() {
  return (
    <Router basename="/nyt-clone">
      <div className="container">
        <header className="header">
          <h1>The New York Times</h1>
          <nav className="navbar">
            <ul className="nav-list">
              <li><Link to="/" className="nav-button">Home News</Link></li>
              <li><Link to="/books" className="nav-button">Best Sellers Books</Link></li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
        </Routes>

        <footer className="footer">
          <p>© 2026 Adele's NYT Clone Project</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;