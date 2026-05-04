/**
 * Normalizza un articolo proveniente dalle diverse API NYT
 * (Top Stories e Article Search) in un formato uniforme.
 * @param {Object} article - L'articolo grezzo restituito dall'API
 * @returns {Object} - Articolo con campi title, abstract, url, multimedia
 */
export const normalizeArticle = (article) => ({
  title: article.title || article.headline?.main,
  abstract: article.abstract || article.snippet,
  url: article.url || article.web_url,
  multimedia: article.multimedia,
});
 