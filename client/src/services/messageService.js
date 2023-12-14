import axiosClient from './axiosClient'

export const apiMessagesGetAllMessages = id =>
    axiosClient.get(`/api/messages/get-all-messages?id=${id}`)

export const apiMessagesSendMessage = data =>
    axiosClient.post('/api/messages/send-message', data)

