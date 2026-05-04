import React, { useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import Navbar from '../components/Navbar';
import ArticleCard from '../components/ArticleCard';
import SearchBar from '../components/SearchBar';
import { normalizeArticle } from '../utils/normalizeArticle';

const Home = () => {
  const [category, setCategory] = useState('home');
  const [searchTerm, setSearchTerm] = useState('');

  const endpoint = searchTerm
    ? `search/v2/articlesearch.json?q=${searchTerm}`
    : `topstories/v2/${category}.json`;

  const { data: news, loading, error } = useFetch(endpoint, normalizeArticle);

  return (
    <>
      <Navbar onCategoryChange={(cat) => {
        setCategory(cat);
        setSearchTerm('');
      }} />

      <SearchBar onSearch={(term) => setSearchTerm(term)} />

      <main className="news-grid">
        {loading && <p>Caricamento in corso...</p>}
        {error && <p className="error-message">{error}</p>}

        {!loading && !error && news.map((article) => (
          <ArticleCard
            key={article.url}
            article={article}
          />
        ))}
      </main>
    </>
  );
};

export default Home;