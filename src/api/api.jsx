import axios from "axios"
import axiosInstance from "./Interceptor"

// export const getAllUsers = async () => {
//     return (await axios.get('https://jsonplaceholder.typicode.com/users')).data.map(result => result)
// }

// export const addUser = async (user) => {
//     return (await axios.post('https://jsonplaceholder.typicode.com/posts', user))
// }

// export const fetchAllPosts = async () => {
//     const data = await axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
//         return response
//     })
//     return data;
// }


export const fetchAllUsersFromLocalServer = async () => {
    const response = await axiosInstance.get('/user')
    return response.data;
}

export const postLocalUser = async (newUser) => {
    const response = await axiosInstance.post('/user', newUser);
    return response?.data;
}

export const deleteLocalUser = async (user_id) => {
    const response = await axiosInstance.delete(`/user/${user_id}`);
    console.log(response, "delete_response");
    return response.data;
}