// import { useState, useEffect } from 'react';
// import api from '../api';

// export const useFetch = (endpoint) => {
//   const [data, setData] = useState([]); 
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     setLoading(true);
//     setError(null);
    
//     api.get(endpoint)
//       .then(res => {
        
//         let results = [];
        
//         if (res.data.results && Array.isArray(res.data.results)) {
//             // Top Stories
//             results = res.data.results;
//         } else if (res.data.response && res.data.response.docs) {
//             // Search
//             results = res.data.response.docs;
//         } else if (res.data.results && res.data.results.books) {
//             // Books
//             results = res.data.results.books;
//         }

//         setData(results);
//         setLoading(false);
//       })
//       .catch(err => {
//         console.error("Errore API:", err);
//         setError("Errore nel caricamento.");
//         setData([]); 
//         setLoading(false);
//       });
//   }, [endpoint]);

//   return { data, loading, error };
// };


import { useState, useEffect } from 'react';
import api from '../api';

export const useFetch = (endpoint, normalizer) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    
    api.get(endpoint)
      .then(res => {
        let rawResults = [];
        if (res.data.results && Array.isArray(res.data.results)) rawResults = res.data.results;
        else if (res.data.response?.docs) rawResults = res.data.response.docs;
        else if (res.data.results?.books) rawResults = res.data.results.books;

        setData(normalizer ? rawResults.map(normalizer) : rawResults);
        setLoading(false);
      })
      .catch(() => {
        setError("Errore nel caricamento.");
        setLoading(false);
      });
  }, [endpoint, normalizer]); // Importante aggiungere normalizer tra le dipendenze

  return { data, loading, error };
};