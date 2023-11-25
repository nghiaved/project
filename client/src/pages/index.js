import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import BackToTop from '../components/BackToTop'

export default function Home() {
    return (
        <React.Fragment>
            <Header />
            <Sidebar />
            <Outlet />
            <BackToTop />
        </React.Fragment>
    )
}
