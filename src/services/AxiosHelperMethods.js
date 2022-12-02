export const requestInterceptor = config => {

    let accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwibmFtZSI6InJlbXlAYy5mciIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY2OTc1NTI0NSwiZXhwIjoxNjY5NzU4ODQ1fQ.Hx09bJ3gq4gfmMxWFTKJvGW92Aj4Hoc-qWJRDnARzYc';

    if (accessToken != null) {
        config.headers['x-auth'] = `Bearer ${accessToken}`;
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
