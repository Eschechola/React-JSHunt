import axios from 'axios';

//url base da api
const api = axios.create({baseURL: 'https://rocketseat-node.herokuapp.com/api' });

export default api;