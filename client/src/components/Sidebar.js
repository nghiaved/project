import React from 'react'
import { NavLink } from 'react-router-dom'
import { path } from '../utils'

export default function Sidebar() {
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
                    <NavLink className="nav-link collapsed" to={path.PROFILE}>
                        <i className="bi bi-person"></i>
                        <span>Profile</span>
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink className="nav-link collapsed" to={path.FAQ}>
                        <i className="bi bi-question-circle"></i>
                        <span>F.A.Q</span>
                    </NavLink>
                </li>

            </ul>

        </main>
    )
}
