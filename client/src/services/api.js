import axios from 'axios';

const API = axios.create({
    baseURL: import.meta.env.VITE_API_URI
});

API.interceptors.request.use(cfg => {
    const token = localStorage.getItem("token");
    if (token) cfg.headers.Authorization = `Bearer ${token}`;
    return cfg;
});

export default API;