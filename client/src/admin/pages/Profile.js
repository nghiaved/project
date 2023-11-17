import React, { useRef } from 'react'
import { jwtDecode } from 'jwt-decode'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { path, alertMessage } from '../../utils'
import { apiUsersDelete, apiUsersChangePassword } from '../../services'

export default function Profile() {
    const { register, handleSubmit } = useForm()
    const token = JSON.parse(window.localStorage.getItem('token'))
    const userInfo = jwtDecode(token)
    const navigate = useNavigate()
    const toastDeleteRef = useRef()
    const toastChangePasswordRef = useRef()

    const handleChangePassword = async (data) => {
        try {
            const res = await apiUsersChangePassword({ ...data, id: userInfo.id })
            if (res.status === 200) {
                alertMessage(toastChangePasswordRef.current, res.data.message, true)
            }
        } catch (e) {
            alertMessage(toastChangePasswordRef.current, e.data.message, false)
        }
    }

    const handleDeleteAccount = async (data) => {
        try {
            const res = await apiUsersDelete({ ...data, id: userInfo.id })
            if (res.status === 200) {
                window.localStorage.removeItem('token')
                navigate(0)
            }
        } catch (e) {
            alertMessage(toastDeleteRef.current, e.data.message, false)
        }
    }

    return (
        <main id="main" className="main">

            <div className="pagetitle">
                <h1>Profile</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to={path.ADMIN}>Home</Link></li>
                        <li className="breadcrumb-item">Users</li>
                        <li className="breadcrumb-item active">Profile</li>
                    </ol>
                </nav>
            </div>

            <section className="section profile">
                <div className="row">
                    <div className="col-xl-4 col-lg-4">

                        <div className="card">
                            <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">

                                <img src={userInfo.image ? userInfo.image : "/img/profile-img.jpg"} alt="Profile" className="rounded-circle" />
                                <h2>{userInfo.firstName + ' ' + userInfo.lastName}</h2>
                                <h3>@{userInfo.username}</h3>

                            </div>
                        </div>

                    </div>

                    <div className="col-xl-8 col-lg-8">

                        <div className="card">
                            <div className="card-body pt-3">
                                <ul className="nav nav-tabs nav-tabs-bordered">

                                    <li className="nav-item">
                                        <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-overview">Overview</button>
                                    </li>

                                    <li className="nav-item">
                                        <button className="nav-link" data-bs-toggle="tab" data-bs-target="#profile-edit">Edit Profile</button>
                                    </li>

                                    <li className="nav-item">
                                        <button className="nav-link" data-bs-toggle="tab" data-bs-target="#profile-change-password">Change Password</button>
                                    </li>

                                    <li className="nav-item">
                                        <button className="nav-link" data-bs-toggle="tab" data-bs-target="#profile-delete-account">Delete Account</button>
                                    </li>

                                </ul>
                                <div className="tab-content pt-2">

                                    <div className="tab-pane fade show active profile-overview" id="profile-overview">
                                        <h5 className="card-title">About</h5>
                                        <p className="small fst-italic">
                                            {userInfo.about ? userInfo.about : 'No bio yet.'}
                                        </p>

                                        <h5 className="card-title">Profile Details</h5>

                                        <div className="row">
                                            <div className="col-lg-3 col-md-4 label ">Full Name</div>
                                            <div className="col-lg-9 col-md-8">{userInfo.firstName + ' ' + userInfo.lastName}</div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-3 col-md-4 label">Username</div>
                                            <div className="col-lg-9 col-md-8">{userInfo.username}</div>
                                        </div>

                                        {userInfo.email && <div className="row">
                                            <div className="col-lg-3 col-md-4 label">Email</div>
                                            <div className="col-lg-9 col-md-8">{userInfo.email}</div>
                                        </div>}

                                        {userInfo.address && <div className="row">
                                            <div className="col-lg-3 col-md-4 label">Address</div>
                                            <div className="col-lg-9 col-md-8">{userInfo.address}</div>
                                        </div>}

                                        {userInfo.phone && <div className="row">
                                            <div className="col-lg-3 col-md-4 label">Phone</div>
                                            <div className="col-lg-9 col-md-8">{userInfo.phone}</div>
                                        </div>}

                                    </div>

                                    <div className="tab-pane fade profile-edit pt-3" id="profile-edit">

                                        <form>
                                            <div className="row mb-3">
                                                <label htmlFor="profileImage" className="col-md-4 col-lg-3 col-form-label">Profile Image</label>
                                                <div className="col-md-8 col-lg-9">
                                                    <img src={userInfo.image ? userInfo.image : "/img/profile-img.jpg"} alt="Profile" />
                                                    <div className="pt-2">
                                                        <Link href="#" className="btn btn-primary btn-sm" title="Upload new profile image"><i className="bi bi-upload"></i></Link>
                                                        <Link href="#" className="btn btn-danger btn-sm" title="Remove my profile image"><i className="bi bi-trash"></i></Link>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <label htmlFor="firstName" className="col-md-4 col-lg-3 col-form-label">First Name</label>
                                                <div className="col-md-8 col-lg-9">
                                                    <input name="fullName" type="text" className="form-control" id="firstName" defaultValue={userInfo.firstName} />
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <label htmlFor="lastName" className="col-md-4 col-lg-3 col-form-label">Last Name</label>
                                                <div className="col-md-8 col-lg-9">
                                                    <input name="fullName" type="text" className="form-control" id="lastName" defaultValue={userInfo.lastName} />
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <label htmlFor="about" className="col-md-4 col-lg-3 col-form-label">About</label>
                                                <div className="col-md-8 col-lg-9">
                                                    <textarea name="about" className="form-control" id="about" style={{ height: '100px' }} defaultValue={userInfo.about && userInfo.about}></textarea>
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <label htmlFor="Address" className="col-md-4 col-lg-3 col-form-label">Address</label>
                                                <div className="col-md-8 col-lg-9">
                                                    <input name="address" type="text" className="form-control" id="Address" defaultValue={userInfo.address && userInfo.address} />
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <label htmlFor="Phone" className="col-md-4 col-lg-3 col-form-label">Phone</label>
                                                <div className="col-md-8 col-lg-9">
                                                    <input name="phone" type="text" className="form-control" id="Phone" defaultValue={userInfo.phone && userInfo.phone} />
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <label htmlFor="Email" className="col-md-4 col-lg-3 col-form-label">Email</label>
                                                <div className="col-md-8 col-lg-9">
                                                    <input name="email" type="email" className="form-control" id="Email" defaultValue={userInfo.email && userInfo.email} />
                                                </div>
                                            </div>

                                            <div className="text-center">
                                                <button type="submit" className="btn btn-primary">Save Changes</button>
                                            </div>
                                        </form>

                                    </div>

                                    <div className="tab-pane fade pt-3" id="profile-change-password">
                                        <form onSubmit={handleSubmit(handleChangePassword)}>

                                            <div className="row mb-3">
                                                <label htmlFor="currentPassword" className="col-md-4 col-lg-3 col-form-label">Current Password</label>
                                                <div className="col-md-8 col-lg-9">
                                                    <input {...register('oldPassword')} required maxLength={30} minLength={6} autoComplete='off'
                                                        type="password" className="form-control" id="currentPassword" />
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <label htmlFor="newPassword" className="col-md-4 col-lg-3 col-form-label">New Password</label>
                                                <div className="col-md-8 col-lg-9">
                                                    <input {...register('newPassword')} required maxLength={30} minLength={6} autoComplete='off'
                                                        type="password" className="form-control" id="newPassword" />
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <label htmlFor="renewPassword" className="col-md-4 col-lg-3 col-form-label">Re-enter New Password</label>
                                                <div className="col-md-8 col-lg-9">
                                                    <input {...register('renewPassword')} required maxLength={30} minLength={6} autoComplete='off'
                                                        type="password" className="form-control" id="renewPassword" />
                                                </div>
                                            </div>

                                            <div className="text-center">
                                                <button type="submit" className="btn btn-primary">Change Password</button>
                                            </div>

                                            <div ref={toastChangePasswordRef} className='mt-2'></div>
                                        </form>

                                    </div>

                                    <div className="tab-pane fade pt-3" id="profile-delete-account">
                                        <form onSubmit={handleSubmit(handleDeleteAccount)}>

                                            <div className="row mb-3">
                                                <label htmlFor="deleteUsername" className="col-md-4 col-lg-3 col-form-label">Username</label>
                                                <div className="col-md-8 col-lg-9">
                                                    <input {...register('username')} required maxLength={30} minLength={6} autoComplete='off'
                                                        type="text" className="form-control" id="deleteUsername" />
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <label htmlFor="deletePassword" className="col-md-4 col-lg-3 col-form-label">Password</label>
                                                <div className="col-md-8 col-lg-9">
                                                    <input {...register('password')} required maxLength={30} minLength={6} autoComplete='off'
                                                        type="password" className="form-control" id="deletePassword" />
                                                </div>
                                            </div>

                                            <div className="text-center">
                                                <button type="submit" className="btn btn-danger">Delete Account</button>
                                            </div>

                                            <div ref={toastDeleteRef} className='mt-2'></div>
                                        </form>

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
