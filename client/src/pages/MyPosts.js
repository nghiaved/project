import React, { useEffect, useState, useCallback, useRef } from 'react'
import FileBase64 from 'react-file-base64'
import ReactQuill from 'react-quill'
import moment from 'moment'
import { jwtDecode } from 'jwt-decode'
import { Link } from 'react-router-dom'
import { apiFriendsGetAllMyPosts, apiFriendsCreatePost } from '../services'
import { path, alertMessage } from '../utils'

export default function MyPosts() {
    const [myPosts, setMyPosts] = useState([])
    const [status, setStatus] = useState()
    const [image, setImage] = useState()
    const token = JSON.parse(window.localStorage.getItem('token'))
    const userInfo = jwtDecode(token)
    const createPostRef = useRef()

    const fetchAllMyPosts = useCallback(async () => {
        try {
            const res = await apiFriendsGetAllMyPosts(userInfo.username)
            setMyPosts(res.data.posts)
        } catch (error) {
            console.log(error)
        }
    }, [userInfo.username])

    useEffect(() => {
        fetchAllMyPosts()
    }, [fetchAllMyPosts])

    const handleCreatePost = async () => {
        try {
            const data = { author: userInfo.username, status, image }
            const res = await apiFriendsCreatePost(data)
            if (res.status === 200) {
                alertMessage(createPostRef.current, res.data.message, true)
                fetchAllMyPosts()
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <main id='main'>

            <div className="pagetitle">
                <h1>My Posts</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to={path.HOME}>Home</Link></li>
                        <li className="breadcrumb-item">Pages</li>
                        <li className="breadcrumb-item active">My Posts</li>
                    </ol>
                </nav>
            </div>

            <section className="section">

                <button className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Create Post</button>
                <div className='my-3' ref={createPostRef}></div>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Create Post</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <ReactQuill value={status} onChange={setStatus} theme="snow" placeholder='Status' />
                                <div className="d-flex justify-content-between mt-3">
                                    <div className="text-center">
                                        {image
                                            ? <img className='border img-in-create-post' src={image} alt="Profile" />
                                            : <img className='border img-in-create-post' src="/img/no-image.jpeg" alt="Profile" />}
                                        <div className="pt-2">
                                            <label className='set-upload-img'>
                                                <FileBase64
                                                    multiple={false}
                                                    onDone={({ base64 }) => {
                                                        setImage(base64)
                                                    }}
                                                />
                                                <i className="btn btn-primary btn-sm bi bi-upload"></i>
                                            </label>
                                            <i onClick={() => setImage()} className="ms-2 btn btn-danger btn-sm bi bi-trash"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                <button onClick={handleCreatePost} data-bs-dismiss="modal" type="submit" className="btn btn-primary">Create</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    {myPosts.map((item, index) => {
                        return <div key={index} className="col-lg-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <h5 className="card-title">{item.author}</h5>
                                        <span>{moment(item.createAt).format('YYYY/MM/DD HH:mm')}</span>
                                    </div>
                                    <ReactQuill key={index} value={item.status} theme="bubble" readOnly={true} />
                                    <div style={{ height: '30vh' }} className='mt-3'>
                                        {item.image && <img style={{ height: '100%', objectFit: 'cover' }} src={item.image} className="card-img border" alt="..." />}
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}
                </div>

            </section>
        </main >
    )
}
