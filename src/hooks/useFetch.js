import { useState, useEffect } from 'react';
import api from '../api';

export const useFetch = (endpoint) => {
  const [data, setData] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    
    api.get(endpoint)
      .then(res => {
        
        let results = [];
        
        if (res.data.results && Array.isArray(res.data.results)) {
            // Top Stories
            results = res.data.results;
        } else if (res.data.response && res.data.response.docs) {
            // Search
            results = res.data.response.docs;
        } else if (res.data.results && res.data.results.books) {
            // Books
            results = res.data.results.books;
        }

        setData(results);
        setLoading(false);
      })
      .catch(err => {
        console.error("Errore API:", err);
        setError("Errore nel caricamento.");
        setData([]); 
        setLoading(false);
      });
  }, [endpoint]);

  return { data, loading, error };
};