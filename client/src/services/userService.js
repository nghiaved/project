import axiosClient from './axiosClient'

export const apiUsersRegister = data =>
    axiosClient.post('/api/users/register', data)

export const apiUsersLogin = data =>
    axiosClient.post('/api/users/login', data)