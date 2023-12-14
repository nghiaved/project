import React, { useState, useEffect, useCallback, useRef } from 'react'
import { jwtDecode } from 'jwt-decode'
import { useNavigate } from 'react-router-dom'
import {
    apiUsersGetInfo, apiConversationsGetConversation, apiConversationsCreateConversation,
    apiMessagesGetAllMessages, apiMessagesSendMessage
} from '../services'
import { useGlobalState } from '../hooks'

export default function Conversation() {
    const [state, dispatch] = useGlobalState()
    const [hide, setHide] = useState(false)
    const [user, setUser] = useState({})
    const [idConversation, setIdConversation] = useState()
    const [messages, setMessages] = useState([])
    const token = JSON.parse(window.localStorage.getItem('token'))
    const userInfo = jwtDecode(token)
    const messageInputRef = useRef()
    const navigate = useNavigate()

    const getInfoUser = useCallback(async () => {
        try {
            const res = await apiUsersGetInfo(state.userConversation.username)
            setUser(res.data.user)
        } catch (error) {
            navigate(state.userConversation.username)
        }
    }, [state.userConversation?.username, navigate])

    const getConversation = useCallback(async () => {
        try {
            const res = await apiConversationsGetConversation({ user1: userInfo.id, user2: state.userConversation.id })
            if (res.data.conversation) {
                setIdConversation(res.data.conversation.id)
            } else {
                await apiConversationsCreateConversation({ user1: userInfo.id, user2: state.userConversation.id })
                getConversation()
            }
        } catch (error) {
            console.log(error)
        }
    }, [state.userConversation?.id, userInfo.id])

    const getAllMessages = useCallback(async () => {
        try {
            const res = await apiMessagesGetAllMessages(idConversation)
            if (res.data.messages) {
                setMessages(res.data.messages)
            }
        } catch (error) {
            console.log(error)
        }
    }, [idConversation])

    useEffect(() => {
        if (state.userConversation) {
            getInfoUser()
            getConversation()
            getAllMessages()
        }

    }, [state.userConversation, getInfoUser, getConversation, getAllMessages])

    const handleSendMessage = async (e) => {
        e.preventDefault()
        await apiMessagesSendMessage({
            id: idConversation,
            content: messageInputRef.current.value,
            sender: userInfo.id,
            receiver: state.userConversation.id
        })
        await getAllMessages()
        messageInputRef.current.value = ''
    }

    return (
        <div className="conversation-wrapper" style={state.userConversation ? hide ? { right: '20px', height: 50, overflow: 'hidden' } : { right: '20px' } : {}}>
            <div className='conversation-header bg-secondary text-white'>
                <span>
                    <img src={user.image ? user.image : "/img/no-avatar.png"} alt="Profile" className="rounded-circle" />
                    <span>{user.firstName + ' ' + user.lastName}</span>
                </span>
                <span>
                    <i onClick={() => setHide(!hide)} className={hide ? "bi bi-plus-lg me-3" : "bi bi-dash-lg me-3"}></i>
                    <i onClick={() => {
                        setHide(false)
                        dispatch({ userConversation: null })
                    }} className="bi bi-x-lg nav-icon"></i>
                </span>
            </div>
            <div className='conversation-body'>
                {messages.map((item, index) =>
                    <div key={index} style={{ fontSize: 15 }} className={item.sender === userInfo.username ? 'text-end ms-5' : 'me-5'}>
                        {item.content}
                    </div>
                )}
            </div>
            <form onSubmit={handleSendMessage} className="conversation-footer input-group">
                <input ref={messageInputRef} required autoComplete='off' type="text" className="form-control" placeholder='Say something...' />
                <button className="input-group-text">Send</button>
            </form>
        </div>
    )
}
