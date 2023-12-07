import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'
import BackToTop from '../components/BackToTop'

export default function Admin() {
    return (
        <React.Fragment>
            <Header />
            <Sidebar />
            <Outlet />
            <BackToTop />
        </React.Fragment>
    )
}
