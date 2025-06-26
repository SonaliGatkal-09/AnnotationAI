// libs/services/src/lib/api.ts
import axios, {
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosError
} from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3000/api',
  timeout: 10_000,
});

// Attach token on every request
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

// Optional: handle 401s globally
api.interceptors.response.use(
  (res: AxiosResponse) => res,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      // window.location.href = '/signin';
    }
    return Promise.reject(error);
  }
);

export default api;



// // src/libs/services/api.ts
// import axios from 'axios'

// export const api = axios.create({
//   baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3000/api',
// })

// api.interceptors.request.use(config => {
//   const token = localStorage.getItem('token')
//   if (token && config.headers) {
//     config.headers.Authorization = `Bearer ${token}`
//   }
//   return config
// })
