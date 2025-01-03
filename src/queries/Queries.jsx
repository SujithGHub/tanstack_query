import { QueryClient, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteLocalUser, fetchAllUsersFromLocalServer, postLocalUser } from "../api/api";

// export const GetUserQuery = () => {
//     return useQuery({
//         queryKey: ['users'],
//         queryFn: getAllUsers,
//         refetchOnWindowFocus: false,
//     })
// }

// export const updateUserQuery = () => {
//     return useMutation({
//         mutationFn: (user) => addUser(user)
//     })
// }

// export const getAllPosts = () => {
//     return useQuery({
//         queryKey: ['posts'],
//         queryFn: fetchAllPosts,
//     })
// }


export const fetchLocalUserQuery = () => {
    return useQuery({
        queryKey: ['local-user'],
        queryFn: fetchAllUsersFromLocalServer,
        staleTime: 3000,
        refetchOnWindowFocus: false,
    })
}

export const postLocalUserQuery = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: postLocalUser,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['local-user'] })
    })
}

export const deleteLocalUserQuery = (user_id) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationKey: ['delete-user', user_id],
        mutationFn: deleteLocalUser,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['local-user'] })
    })
}