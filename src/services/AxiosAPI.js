import axios from "axios";
import {
    requestErrorHandler,
    requestInterceptor,
    responseErrorHandler,
    responseInterceptor
} from '../helpers/axiosHelperMethods';

// const baseURL = 'https://jsonplaceholder.typicode.com';
const baseURL = 'https://appeclateeback.onrender.com/api';
const axiosAPI = axios.create({
    baseURL: baseURL,
});

axiosAPI.interceptors.request.use(requestInterceptor, requestErrorHandler);
axiosAPI.interceptors.response.use(responseInterceptor, responseErrorHandler);

export default axiosAPI