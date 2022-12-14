import axios from "axios";
import {
    requestErrorHandler,
    requestInterceptor,
    responseErrorHandler,
    responseInterceptor
} from '../helpers/axiosHelperMethods'
import envs from '../config/env';

let headers = {};
const axiosInstance = axios.create({
    baseURL: envs.BACKEND_URL,
    headers,
})

axiosInstance.interceptors.request.use(requestInterceptor, requestErrorHandler);
axiosInstance.interceptors.response.use(responseInterceptor, responseErrorHandler);

export default axiosInstance;