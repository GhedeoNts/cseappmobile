import AsyncStorage from "@react-native-async-storage/async-storage";
import axiosInstance from "../helpers/axiosInterceptor";

export const requestInterceptor = (config) => {

    // if (accessToken != null) {
    //     config.headers['x-auth'] = `Bearer ${accessToken}`;
    // }

    const token = AsyncStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    console.log('Headers: ', config.headers);
    console.log('Method: ', config.method);
    console.log('URL: ', config.baseURL + config.url);

    return config;
}

export const requestErrorHandler = error => {

    return Promise.reject(error);

}

export const responseInterceptor = config => {
    console.log('REQUEST...');
    console.log('Headers: ', config.config.headers);
    console.log('Method: ', config.config.method);
    console.log('URL: ', config.config.baseURL + config.config.url);

    console.log('RESPONSE...');
    console.log('Status: ', config.status);
    console.log('Response: ', config.data)

    return config
}

// function refreshTokenAPICall() {
//     return axiosInstance.post().then;
// }

export const responseErrorHandler = error => {

    const originConfig = error.config;

    if (error?.response?.status === 401 && !originConfig._retry) {
        console.log('User is unauthorized...')

        // return refreshTokenAPICall();
    }

    alert(error);

    return Promise.reject(error)
}
