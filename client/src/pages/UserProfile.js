import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { apiUsersGetInfo } from '../services'
import { path } from '../utils'

export default function UserProfile() {
    const [user, setUser] = useState({})
    const { username } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const res = await apiUsersGetInfo(username)
                setUser(res.data.user)
            } catch (error) {
                navigate(username)
            }
        }

        fetchApi()
    }, [username, navigate])

    return (
        <main id="main" className="main">

            <div className="pagetitle">
                <h1>Profile</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to={path.HOME}>Home</Link></li>
                        <li className="breadcrumb-item">Profile</li>
                        <li className="breadcrumb-item active">{username}</li>
                    </ol>
                </nav>
            </div>

            <section className="section profile">

                <div className="row">
                    <div className="col-xl-4 col-lg-4">

                        <div className="card">
                            <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">

                                <img src={user.image ? user.image : "/img/no-avatar.png"} alt="Profile" className="rounded-circle" />
                                <h2>{user.firstName + ' ' + user.lastName}</h2>
                                <h3>@{user.username}</h3>

                            </div>
                        </div>

                    </div>

                    <div className="col-xl-8 col-lg-8">

                        <div className="card">
                            <div className="card-body pt-3">

                                <div className='d-flex justify-content-end pt-4'>
                                    <button type="button" className="btn btn-outline-primary me-4">Add friend</button>
                                    <button type="button" className="btn btn-outline-success">Send message</button>
                                </div>

                                <div className="tab-content">

                                    <div className="tab-pane fade show active profile-overview">
                                        <h5 className="card-title">About</h5>
                                        <p className="small fst-italic">
                                            {user.about ? user.about : 'No bio yet.'}
                                        </p>

                                        <h5 className="card-title">Profile Details</h5>

                                        <div className="row">
                                            <div className="col-lg-3 col-md-4 label ">Full Name</div>
                                            <div className="col-lg-9 col-md-8">{user.firstName + ' ' + user.lastName}</div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-3 col-md-4 label">Username</div>
                                            <div className="col-lg-9 col-md-8">{user.username}</div>
                                        </div>

                                        {user.email && <div className="row">
                                            <div className="col-lg-3 col-md-4 label">Email</div>
                                            <div className="col-lg-9 col-md-8">{user.email}</div>
                                        </div>}

                                        {user.address && <div className="row">
                                            <div className="col-lg-3 col-md-4 label">Address</div>
                                            <div className="col-lg-9 col-md-8">{user.address}</div>
                                        </div>}

                                        {user.phone && <div className="row">
                                            <div className="col-lg-3 col-md-4 label">Phone</div>
                                            <div className="col-lg-9 col-md-8">{user.phone}</div>
                                        </div>}

                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </main>
    )
}
