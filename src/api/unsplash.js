import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID anVsBIL9ypaXe828ZraM26qyf2tmWF7Objy7bjIIzXk'
  }
});