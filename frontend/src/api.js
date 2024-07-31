import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8000/api/'
});

api.interceptors.request.use(
    null,
    (error) => {
        return Promise.reject(error);
    }
);

export default api;