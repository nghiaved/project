import React from 'react'
import ReactQuill from 'react-quill'
import { Editor } from "@tinymce/tinymce-react"
import { Link } from 'react-router-dom'
import { path } from '../../utils'

export default function Editors() {
    return (
        <main id="main" className="main">

            <div className="pagetitle">
                <h1>Form Editors</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to={path.ADMIN}>Home</Link></li>
                        <li className="breadcrumb-item">Forms</li>
                        <li className="breadcrumb-item active">Editors</li>
                    </ol>
                </nav>
            </div>

            <section className="section">
                <div className="row">
                    <div className="col-lg-6">

                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Quill Editor Default</h5>

                                <ReactQuill theme="snow" defaultValue="Hello World! <br/> This is Quill <strong>default</strong> editor" />

                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Quill Editor Bubble</h5>

                                <p>Select some text to display options in poppovers</p>

                                <ReactQuill theme="bubble" defaultValue="Hello World! <br/> This is Quill <strong>bubble</strong> editor" />

                            </div>
                        </div>

                    </div>

                    <div className="col-lg-6">

                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">TinyMCE Editor</h5>

                                <Editor initialValue='Hello World! <br/> This is Quill <strong>TinyMCE</strong> editor' />

                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </main>
    )
}
