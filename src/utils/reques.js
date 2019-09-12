import axios from 'axios';

const service = axios.default.create({
    timeout: 0,
    maxContentLength: 4000,
});


service.interceptors.request.use((config) => {
    return config;
}, (error) => {
    Promise.reject(error);
});

service.interceptors.response.use(
    (response) => {
        if (response.status !== 200) {
            console.log(111);
        } else {
            return response.data;
        }
    },
    (error) => {
        return Promise.reject(error);
    });

export default service;