import axiosAPI from "../AxiosAPI";

// export const user_login = async data => {

//     try {
//         const result = await axiosAPI('/auth/login', {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json',

//             },
//             data: data,
//         });

//         return result

//     } catch (error) {
//         return error.message.data
//     }
// }

export const getUsersList = () => {
    return axiosAPI.get('/users');
}

export const getUsersByID = userID => {
    return axiosAPI.get(`/candidates/${userID}`)
}

export const addNewUser = params => {
    return axiosAPI.post(`/candidates`, params)
}