import axiosInstance from "./Interceptor";

interface User {
    id: string,
    name: string,
    age: number,
    email: string
}

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

export const postLocalUser = async (newUser: User) => {
    const response = await axiosInstance.post('/user', newUser);
    return response?.data;
}

export const deleteLocalUser = async (user_id: string) => {
    const response = await axiosInstance.delete(`/user/${user_id}`);
    console.log(response, "delete_response");
    return response.data;
}