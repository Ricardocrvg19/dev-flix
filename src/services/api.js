import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '512ef9b2c207d5d7796986d7b257d0b3',
    language: 'pt-BR',
    page: 1
  }
});

export default api;
