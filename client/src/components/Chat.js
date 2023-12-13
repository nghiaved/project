import React, { useState, useEffect, useCallback, useRef } from 'react'
import { jwtDecode } from 'jwt-decode'
import { useNavigate } from 'react-router-dom'
import { apiUsersGetInfo, apiChatsGetChat, apiMessagesGetAllMessages } from '../services'
import { useGlobalState } from '../hooks'

export default function Chat() {
    const [state, dispatch] = useGlobalState()
    const [hide, setHide] = useState(false)
    const [user, setUser] = useState({})
    const [messages, setMessages] = useState([])
    const token = JSON.parse(window.localStorage.getItem('token'))
    const userInfo = jwtDecode(token)
    const messageInputRef = useRef()
    const navigate = useNavigate()

    const getInfoUser = useCallback(async () => {
        try {
            const res = await apiUsersGetInfo(state.chatUser)
            setUser(res.data.user)
        } catch (error) {
            navigate(state.chatUser)
        }
    }, [state.chatUser, navigate])

    const getChat = useCallback(async () => {
        try {
            const res = await apiChatsGetChat({ user1: state.chatUser, user2: userInfo.username })
            if (res.data.chat) {
                const data = await apiMessagesGetAllMessages(res.data.chat.id)
                if (data.data.messages) {
                    setMessages(data.data.messages)
                }
            } else {
                setMessages([])
            }
        } catch (error) {
            console.log(error)
        }
    }, [state.chatUser, userInfo.username])

    useEffect(() => {
        if (state.chatUser) {
            getInfoUser()
            getChat()
        }

    }, [state.chatUser, getInfoUser, getChat])

    const handleSendMessage = async (e) => {
        e.preventDefault()
        await setMessages(data => [...data, {
            content: messageInputRef.current.value,
            sender: userInfo.username
        }])
        messageInputRef.current.value = ''
    }

    return (
        <div className="chat-wrapper" style={state.chatUser ? hide ? { right: '20px', height: 50, overflow: 'hidden' } : { right: '20px' } : {}}>
            <div className='chat-header bg-secondary text-white'>
                <span>
                    <img src={user.image ? user.image : "/img/no-avatar.png"} alt="Profile" className="rounded-circle" />
                    <span>{user.firstName + ' ' + user.lastName}</span>
                </span>
                <span>
                    <i onClick={() => setHide(!hide)} className={hide ? "bi bi-plus-lg me-3" : "bi bi-dash-lg me-3"}></i>
                    <i onClick={() => {
                        setHide(false)
                        dispatch({ chatUser: null })
                    }} className="bi bi-x-lg nav-icon"></i>
                </span>
            </div>
            <div className='chat-body'>
                {messages.map((item, index) =>
                    <div key={index} className={item.sender === userInfo.username ? 'text-end ms-5' : 'me-5'}>
                        {item.content}
                    </div>
                )}
            </div>
            <form onSubmit={handleSendMessage} className="chat-footer input-group">
                <input ref={messageInputRef} required autoComplete='off' type="text" className="form-control" placeholder='Say something...' />
                <button className="input-group-text">Send</button>
            </form>
        </div>
    )
}
