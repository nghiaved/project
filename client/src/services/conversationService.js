import axiosClient from './axiosClient'

export const apiConversationsGetConversation = data =>
    axiosClient.get(`/api/conversations/get-conversation?user1=${data.user1}&user2=${data.user2}`)

export const apiConversationsCreateConversation = data =>
    axiosClient.post('/api/conversations/create-conversation', data)
