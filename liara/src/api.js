import axios from "axios";

const api = axios.create({
    baseURL: 'https://John6670.pythonanywhere.com/api/'
});

api.interceptors.request.use(
    null,
    (error) => {
        return Promise.reject(error);
    }
);

export default api;