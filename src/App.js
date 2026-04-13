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
            <ul style={{display: 'flex', justifyContent: 'center', gap: '20px', listStyle: 'none'}}>
              
              <li><Link to="/" className="nav-button" style={{textDecoration: 'none'}}>Home News</Link></li>
              <li><Link to="/books" className="nav-button" style={{textDecoration: 'none'}}>Best Sellers Books</Link></li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
        </Routes>

        <footer style={{ marginTop: '50px', padding: '30px', borderTop: '2px solid black', textAlign: 'center', fontSize: '14px' }}>
          <p>© 2026 Adele's NYT Clone Project</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;