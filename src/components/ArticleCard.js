import React from 'react';

const ArticleCard = ({ article }) => {
  
  const imageUrl = article.multimedia && article.multimedia.length > 0 
    ? article.multimedia[0].url 
    : null; 

  return (
    <article className="article-card">
      
      {imageUrl && (
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          <img 
            src={imageUrl} 
            alt={article.title} 
            className="article-image"
            
            onError={(e) => { e.target.style.display = 'none'; }} 
          />
        </a>
      )}
      
      <div className="article-content">
        <h2 className="article-title">
          <a href={article.url} target="_blank" rel="noopener noreferrer" className="article-link">
            {article.title}
          </a>
        </h2>
        <p className="article-abstract">{article.abstract}</p>
      </div>
    </article>
  );
};

export default ArticleCard;