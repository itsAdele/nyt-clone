import React, { useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import Navbar from '../components/Navbar';
import ArticleCard from '../components/ArticleCard';
import SearchBar from '../components/SearchBar';

const Home = () => {
  const [category, setCategory] = useState('home');
  const [searchTerm, setSearchTerm] = useState('');

  const endpoint = searchTerm 
    ? `search/v2/articlesearch.json?q=${searchTerm}` 
    : `topstories/v2/${category}.json`;

  const { data: news, loading, error } = useFetch(endpoint);

  return (
    <>
      <Navbar onCategoryChange={(cat) => {
        setCategory(cat);
        setSearchTerm(''); 
      }} />
      
      <SearchBar onSearch={(term) => setSearchTerm(term)} />

      <main className="news-grid">
        {loading && <p>Caricamento in corso...</p>}
        {error && <p style={{color: 'red'}}>{error}</p>}
        
        {!loading && !error && news.map((article) => {

          const normalizedArticle = {
            title: article.title || article.headline?.main, 
            abstract: article.abstract || article.snippet,  
            url: article.url || article.web_url,            
            multimedia: article.multimedia
          };

          return (
            <ArticleCard 
              key={normalizedArticle.url || article.uri} 
              article={normalizedArticle} 
            />
          );
        })}
      </main>
    </>
  );
};

export default Home;