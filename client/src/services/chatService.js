import axiosClient from './axiosClient'

export const apiChatsGetChat = data =>
    axiosClient.get(`/api/chats/get-chat?user1=${data.user1}&user2=${data.user2}`)
