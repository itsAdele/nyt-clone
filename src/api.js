import axios from 'axios';


const api = axios.create({
  baseURL: 'https://api.nytimes.com/svc/',
  params: {
    'api-key': process.env.REACT_APP_NYT_API_KEY, 
  },
});

export default api;