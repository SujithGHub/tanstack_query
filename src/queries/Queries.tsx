import { QueryClient, useInfiniteQuery, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteLocalUser, fetchAllUsersFromLocalServer, fetchProducts, postLocalUser } from "../api/api";
import { Pagination, Product } from "../components/Products";

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
interface User {
    id: string,
    name: string,
    age: number,
    email: string
}


export const fetchLocalUserQuery = () => {
    return useQuery<User[]>({
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

export const deleteLocalUserQuery = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationKey: ['delete-user'],
        mutationFn: (id: string) => deleteLocalUser(id),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['local-user'] })
    })
}

export const fetchProductQuery = (pagination: Pagination) => {
    return useQuery<Product>({
        queryKey: ['products'],
        queryFn: () => fetchProducts(pagination),
        refetchOnWindowFocus: false
    })
}

// export const fetchProductInfiniteQuery = (pagination: Pagination) => {
//     return useInfiniteQuery({
//         queryKey: ['products'],
//         queryFn: () => fetchProducts(pagination),
//         initialPageParam: 0,
//         getNextPageParam: (lastPage, allPages) => lastPage.nextCursor,
//         getPreviousPageParam: (firstPage, allPages) => firstPage.prevCursor
//     })
// }