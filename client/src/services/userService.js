import axiosClient from './axiosClient'

export const apiUsersRegister = data =>
    axiosClient.post('/api/users/register', data)

export const apiUsersLogin = data =>
    axiosClient.post('/api/users/login', data)

export const apiUsersDelete = data =>
    axiosClient.delete(`/api/users/delete?id=${data.id}&username=${data.username}&password=${data.password}`)

export const apiUsersChangePassword = data =>
    axiosClient.patch(`/api/users/change-password?id=${data.id}`, data)

