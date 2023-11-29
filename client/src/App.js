import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { path } from './utils'

//App route
import Home from './pages'

import HomePage from './pages/HomePage'
import AccountSettings from './pages/AccountSettings'
import FAQ from './pages/FAQ'
import UserProfile from './pages/UserProfile'
import MyPosts from './pages/MyPosts'

import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Error from './pages/Error'

//Admin route
import Admin from './admin'

import Dashboard from './admin/pages/Dashboard'

import Accordion from './admin/components/Accordion'
import Alert from './admin/components/Alerts'
import Badges from './admin/components/Badges'
import Breadcrumbs from './admin/components/Breadcrumbs'
import Buttons from './admin/components/Buttons'
import Cards from './admin/components/Cards'
import Carousel from './admin/components/Carousel'
import ListGroup from './admin/components/ListGroup'
import Modal from './admin/components/Modal'
import Pagination from './admin/components/Pagination'
import Progress from './admin/components/Progress'
import Spinners from './admin/components/Spinners'
import Tabs from './admin/components/Tabs'

import Editors from './admin/forms/Editors'
import Elements from './admin/forms/Elements'
import Layouts from './admin/forms/Layouts'
import Validation from './admin/forms/Validation'

import Data from './admin/tables/Data'
import General from './admin/tables/General'

import Apexcharts from './admin/charts/Apexcharts'
import Charts from './admin/charts/Charts'

import Bootstrap from './admin/icons/Bootstrap'
import Boxicons from './admin/icons/Boxicons'
import Remix from './admin/icons/Remix'

import AdminProfile from './admin/pages/Profile'
import AdminFAQ from './admin/pages/FAQ'
import AdminContact from './admin/pages/Contact'
import AdminBlank from './admin/pages/Blank'

export default function App() {
    return (
        <Routes>
            <Route path={path.HOME} element={JSON.parse(window.localStorage.getItem('token')) ? <Home /> : <LoginPage />} >
                <Route index element={<HomePage />} />
                <Route path={path.ACCOUNT_SETTINGS} element={<AccountSettings />} />
                <Route path={path.FAQ} element={<FAQ />} />
                <Route path={path.MY_POSTS} element={<MyPosts />} />
                <Route path={`${path.PROFILE}/:username`} element={<UserProfile />} />
            </Route>

            <Route path={path.LOGIN} element={<LoginPage />} />
            <Route path={path.REGISTER} element={<RegisterPage />} />
            <Route path={path.ERROR} element={<Error />} />

            <Route path={path.ADMIN} element={JSON.parse(window.localStorage.getItem('token')) ? <Admin /> : <LoginPage />}>
                <Route index element={<Dashboard />} />

                <Route path={path.ADMIN_COMPONENTS_ACCORDION} element={<Accordion />} />
                <Route path={path.ADMIN_COMPONENTS_ALERTS} element={<Alert />} />
                <Route path={path.ADMIN_COMPONENTS_BADGES} element={<Badges />} />
                <Route path={path.ADMIN_COMPONENTS_BREADCRUMBS} element={<Breadcrumbs />} />
                <Route path={path.ADMIN_COMPONENTS_BUTTONS} element={<Buttons />} />
                <Route path={path.ADMIN_COMPONENTS_CARDS} element={<Cards />} />
                <Route path={path.ADMIN_COMPONENTS_CAROUSEL} element={<Carousel />} />
                <Route path={path.ADMIN_COMPONENTS_LIST_GROUP} element={<ListGroup />} />
                <Route path={path.ADMIN_COMPONENTS_MODAL} element={<Modal />} />
                <Route path={path.ADMIN_COMPONENTS_PAGINATION} element={<Pagination />} />
                <Route path={path.ADMIN_COMPONENTS_PROGRESS} element={<Progress />} />
                <Route path={path.ADMIN_COMPONENTS_SPINNERS} element={<Spinners />} />
                <Route path={path.ADMIN_COMPONENTS_TABS} element={<Tabs />} />

                <Route path={path.ADMIN_FORMS_EDITORS} element={<Editors />} />
                <Route path={path.ADMIN_FORMS_ELEMENTS} element={<Elements />} />
                <Route path={path.ADMIN_FORMS_LAYOUTS} element={<Layouts />} />
                <Route path={path.ADMIN_FORMS_VALIDATION} element={<Validation />} />

                <Route path={path.ADMIN_TABLES_DATA} element={<Data />} />
                <Route path={path.ADMIN_TABLES_GENERAL} element={<General />} />

                <Route path={path.ADMIN_CHARTS_APEXCHARTS} element={<Apexcharts />} />
                <Route path={path.ADMIN_CHARTS_CHARTS} element={<Charts />} />

                <Route path={path.ADMIN_ICONS_BOOTSTRAP} element={<Bootstrap />} />
                <Route path={path.ADMIN_ICONS_BOXICONS} element={<Boxicons />} />
                <Route path={path.ADMIN_ICONS_REMIX} element={<Remix />} />

                <Route path={path.ADMIN_PROFILE} element={<AdminProfile />} />
                <Route path={path.ADMIN_FAQ} element={<AdminFAQ />} />
                <Route path={path.ADMIN_CONTACT} element={<AdminContact />} />
                <Route path={path.ADMIN_BLANK} element={<AdminBlank />} />
            </Route>

        </Routes>
    )
}
