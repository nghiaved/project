import React, { useState, useEffect } from 'react'
import { jwtDecode } from 'jwt-decode'
import { NavLink, Link } from 'react-router-dom'
import { apiFriendsGetListFriends } from '../services'
import { path } from '../utils'

export default function Sidebar() {
    const [listFriends, setListFriends] = useState([])
    const token = JSON.parse(window.localStorage.getItem('token'))
    const userInfo = jwtDecode(token)

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const res = await apiFriendsGetListFriends(userInfo.username)
                setListFriends(res.data.friends)
            } catch (error) {
                console.log(error)
            }
        }

        fetchApi()
    }, [userInfo.username])
    return (
        <main id="sidebar" className="sidebar">

            <ul className="sidebar-nav" id="sidebar-nav">

                <li className="nav-heading">Pages</li>

                <li className="nav-item">
                    <NavLink className="nav-link collapsed" to={path.HOME}>
                        <i className="bi bi-house"></i>
                        <span>Home</span>
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink className="nav-link collapsed" to={path.MY_POSTS}>
                        <i className="bi bi-sticky"></i>
                        <span>My Posts</span>
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink className="nav-link collapsed" to={path.ACCOUNT_SETTINGS}>
                        <i className="bi bi-gear"></i>
                        <span>Account Settings</span>
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink className="nav-link collapsed" to={path.FAQ}>
                        <i className="bi bi-question-circle"></i>
                        <span>F.A.Q</span>
                    </NavLink>
                </li>

                <li className="nav-heading">Friends ({listFriends.length})</li>

                {listFriends.map((item, index) => {
                    return <li key={index} className="nav-item">
                        <Link className="nav-link collapsed" to={`${path.PROFILE}/${item.username}`}>
                            <img src={item.image ? item.image : "/img/no-avatar.png"} alt={item.username} className='rounded-circle img-in-sidebar me-2' />
                            <span>{item.firstName} {item.lastName}</span>
                        </Link>
                    </li>
                })}

            </ul >

        </main >
    )
}
