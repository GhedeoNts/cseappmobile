import AsyncStorage from "@react-native-async-storage/async-storage";

export const requestInterceptor = async (config) => {

    const token = await AsyncStorage.getItem('accessToken');

    if (token != null) {
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
//     return new instance of axios.post().then;
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
