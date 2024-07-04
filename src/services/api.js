import axios from 'axios';

//https://viacep.com.br/ws/63200000/json

const api = axios.create({
    baseURL: 'https://viacep.com.br/ws/'
});

export default api;