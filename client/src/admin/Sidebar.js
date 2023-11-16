import React from 'react'
import { NavLink } from 'react-router-dom'
import { path } from '../utils'

export default function Sidebar() {
    return (
        <main id="sidebar" className="sidebar">

            <ul className="sidebar-nav" id="sidebar-nav">

                <li className="nav-item">
                    <NavLink className="nav-link " to="/admin">
                        <i className="bi bi-grid"></i>
                        <span>Dashboard</span>
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" to="/admin">
                        <i className="bi bi-menu-button-wide"></i><span>Components</span><i className="bi bi-chevron-down ms-auto"></i>
                    </NavLink>
                    <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                        <li>
                            <NavLink to={path.ADMIN_COMPONENTS_ALERTS}>
                                <i className="bi bi-circle"></i><span>Alerts</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={path.ADMIN_COMPONENTS_ACCORDION}>
                                <i className="bi bi-circle"></i><span>Accordion</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={path.ADMIN_COMPONENTS_BADGES}>
                                <i className="bi bi-circle"></i><span>Badges</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={path.ADMIN_COMPONENTS_BREADCRUMBS}>
                                <i className="bi bi-circle"></i><span>Breadcrumbs</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={path.ADMIN_COMPONENTS_BUTTONS}>
                                <i className="bi bi-circle"></i><span>Buttons</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={path.ADMIN_COMPONENTS_CARDS}>
                                <i className="bi bi-circle"></i><span>Cards</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={path.ADMIN_COMPONENTS_CAROUSEL}>
                                <i className="bi bi-circle"></i><span>Carousel</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={path.ADMIN_COMPONENTS_LIST_GROUP}>
                                <i className="bi bi-circle"></i><span>List group</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={path.ADMIN_COMPONENTS_MODAL}>
                                <i className="bi bi-circle"></i><span>Modal</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={path.ADMIN_COMPONENTS_TABS}>
                                <i className="bi bi-circle"></i><span>Tabs</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={path.ADMIN_COMPONENTS_PAGINATION}>
                                <i className="bi bi-circle"></i><span>Pagination</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={path.ADMIN_COMPONENTS_PROGRESS}>
                                <i className="bi bi-circle"></i><span>Progress</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={path.ADMIN_COMPONENTS_SPINNERS}>
                                <i className="bi bi-circle"></i><span>Spinners</span>
                            </NavLink>
                        </li>
                    </ul>
                </li>

                <li className="nav-item">
                    <NavLink className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" to="/admin">
                        <i className="bi bi-journal-text"></i><span>Forms</span><i className="bi bi-chevron-down ms-auto"></i>
                    </NavLink>
                    <ul id="forms-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                        <li>
                            <NavLink to={path.ADMIN_FORMS_ELEMENTS}>
                                <i className="bi bi-circle"></i><span>Form Elements</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={path.ADMIN_FORMS_LAYOUTS}>
                                <i className="bi bi-circle"></i><span>Form Layouts</span>
                            </NavLink>
                        </li>
                        <li>
                            <a href={path.ADMIN_FORMS_EDITORS}>
                                <i className="bi bi-circle"></i><span>Form Editors</span>
                            </a>
                        </li>
                        <li>
                            <NavLink to={path.ADMIN_FORMS_VALIDATION}>
                                <i className="bi bi-circle"></i><span>Form Validation</span>
                            </NavLink>
                        </li>
                    </ul>
                </li>

                <li className="nav-item">
                    <NavLink className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" to="/admin">
                        <i className="bi bi-layout-text-window-reverse"></i><span>Tables</span><i className="bi bi-chevron-down ms-auto"></i>
                    </NavLink>
                    <ul id="tables-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                        <li>
                            <NavLink to={path.ADMIN_TABLES_GENERAL}>
                                <i className="bi bi-circle"></i><span>General Tables</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={path.ADMIN_TABLES_DATA}>
                                <i className="bi bi-circle"></i><span>Data Tables</span>
                            </NavLink>
                        </li>
                    </ul>
                </li>

                <li className="nav-item">
                    <NavLink className="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" to="/admin">
                        <i className="bi bi-bar-chart"></i><span>Charts</span><i className="bi bi-chevron-down ms-auto"></i>
                    </NavLink>
                    <ul id="charts-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                        <li>
                            <NavLink to={path.ADMIN_CHARTS_CHARTS}>
                                <i className="bi bi-circle"></i><span>Chartjs</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={path.ADMIN_CHARTS_APEXCHARTS}>
                                <i className="bi bi-circle"></i><span>ApexCharts</span>
                            </NavLink>
                        </li>
                    </ul>
                </li>

                <li className="nav-item">
                    <NavLink className="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" to="/admin">
                        <i className="bi bi-gem"></i><span>Icons</span><i className="bi bi-chevron-down ms-auto"></i>
                    </NavLink>
                    <ul id="icons-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                        <li>
                            <NavLink to={path.ADMIN_ICONS_BOOTSTRAP}>
                                <i className="bi bi-circle"></i><span>Bootstrap Icons</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={path.ADMIN_ICONS_REMIX}>
                                <i className="bi bi-circle"></i><span>Remix Icons</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={path.ADMIN_ICONS_BOXICONS}>
                                <i className="bi bi-circle"></i><span>Boxicons</span>
                            </NavLink>
                        </li>
                    </ul>
                </li>

                <li className="nav-heading">Pages</li>

                <li className="nav-item">
                    <NavLink className="nav-link collapsed" to="users-profile">
                        <i className="bi bi-person"></i>
                        <span>Profile</span>
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink className="nav-link collapsed" to="pages-faq">
                        <i className="bi bi-question-circle"></i>
                        <span>F.A.Q</span>
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink className="nav-link collapsed" to="pages-contact">
                        <i className="bi bi-envelope"></i>
                        <span>Contact</span>
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink className="nav-link collapsed" to="pages-register">
                        <i className="bi bi-card-list"></i>
                        <span>Register</span>
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink className="nav-link collapsed" to="pages-login">
                        <i className="bi bi-box-arrow-in-right"></i>
                        <span>Login</span>
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink className="nav-link collapsed" to="pages-error-404">
                        <i className="bi bi-dash-circle"></i>
                        <span>Error 404</span>
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink className="nav-link collapsed" to="pages-blank">
                        <i className="bi bi-file-earmark"></i>
                        <span>Blank</span>
                    </NavLink>
                </li>

            </ul>

        </main>
    )
}
