import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import ArticleCard from '../components/ArticleCard';
import SearchBar from '../components/SearchBar';

const Home = () => {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState('home');
  const API_KEY = "KiTiAWy5M33XQjzG3PFBx3NC0Pij1RLALpSGWF9zpGowVCbs";

  // Caricamento top stories
  useEffect(() => {
    if (category.includes("Risultati")) return;

    const url = `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=${API_KEY}`;
    axios.get(url)
      .then(res => setNews(res.data.results))
      .catch(err => console.error("Errore Top Stories:", err));
  }, [category]); 

   

  // Ricerca  degli articoli
  const handleSearch = (term) => {
    const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=${API_KEY}`;
    
    axios.get(url)
      .then(res => {
        const docs = res.data.response.docs;
        const formattedNews = docs.map(doc => {
          
          let imagePath = "https://via.placeholder.com/300x200?text=No+Image";

          if (doc.multimedia && doc.multimedia.length > 0) {
            
            const image = doc.multimedia[0];
            const url = image.url;
            
            imagePath = url.startsWith('http') 
              ? url 
            : `https://static01.nyt.com/${url}`;
          }

          return {
            title: doc.headline.main,
            abstract: doc.abstract,
            url: doc.web_url,
            multimedia: [{ url: imagePath }] 
          };
        });

        setNews(formattedNews);
        setCategory(`Risultati per: ${term}`);
      })
      .catch(err => console.error("Errore Ricerca:", err));
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <Navbar onCategoryChange={setCategory} />
      <h2 style={{ textAlign: 'center', textTransform: 'uppercase', margin: '20px 0' }}>{category}</h2>
      <main className="news-grid">
        {news && news.length > 0 ? (
          news.map((article, index) => (
            <ArticleCard key={index} article={article} />
          ))
        ) : (
          <p style={{ textAlign: 'center' }}>Caricamento in corso...</p>
        )}
      </main>
    </>
  );
};

export default Home;