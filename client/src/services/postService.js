import axiosClient from './axiosClient'

export const apiFriendsGetAllMyPosts = username =>
    axiosClient.get(`/api/posts/get-all-my-posts?author=${username}`)

export const apiFriendsCreatePost = data =>
    axiosClient.post('/api/posts/create-post', data)