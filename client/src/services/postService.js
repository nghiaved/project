import axiosClient from './axiosClient'

export const apiPostsGetAllMyPosts = username =>
    axiosClient.get(`/api/posts/get-all-my-posts?author=${username}`)

export const apiPostsCreatePost = data =>
    axiosClient.post('/api/posts/create-post', data)

export const apiPostsUpdatePost = data =>
    axiosClient.put(`/api/posts/update-post?id=${data.id}`, data)

export const apiPostsDeleteFriend = id =>
    axiosClient.delete('/api/posts/delete-post?id=' + id)