import React from 'react'
import { Link } from 'react-router-dom'
import { path } from '../../utils'

export default function Breadcrumbs() {
    return (
        <main id="main" className="main">

            <div className="pagetitle">
                <h1>Breadcrumbs</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to={path.ADMIN}>Home</Link></li>
                        <li className="breadcrumb-item">Components</li>
                        <li className="breadcrumb-item active">Breadcrumbs</li>
                    </ol>
                </nav>
            </div>

            <section className="section">
                <div className="row">
                    <div className="col-lg-6">

                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Default Breadcrumbs</h5>

                                <nav>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="#">Home</Link></li>
                                        <li className="breadcrumb-item"><Link to="#">Library</Link></li>
                                        <li className="breadcrumb-item active">Default</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Centered</h5>

                                <nav className="d-flex justify-content-center">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="#">Home</Link></li>
                                        <li className="breadcrumb-item"><Link to="#">Library</Link></li>
                                        <li className="breadcrumb-item active">Centered Position</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Right Positioned</h5>

                                <nav className="d-flex justify-content-end">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="#">Home</Link></li>
                                        <li className="breadcrumb-item"><Link to="#">Library</Link></li>
                                        <li className="breadcrumb-item active">Right Position</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">With Home Icon</h5>

                                <nav>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="#"><i className="bi bi-house-door"></i></Link></li>
                                        <li className="breadcrumb-item"><Link to="#">Library</Link></li>
                                        <li className="breadcrumb-item active">Default</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>

                    </div>

                    <div className="col-lg-6">

                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Breadcrumbs with a page title</h5>

                                <div className="pagetitle">
                                    <h1>Page Title</h1>
                                    <nav>
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><Link to="#">Home</Link></li>
                                            <li className="breadcrumb-item">Components</li>
                                            <li className="breadcrumb-item active">Breadcrumbs</li>
                                        </ol>
                                    </nav>
                                </div>

                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Breadcrumbs with different dividers</h5>

                                <nav style={{ '--bs-breadcrumb-divider': '>' }}>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="#">Home</Link></li>
                                        <li className="breadcrumb-item"><Link to="#">Library</Link></li>
                                        <li className="breadcrumb-item active">Data</li>
                                    </ol>
                                </nav>

                                <nav style={{ '--bs-breadcrumb-divider': '|' }}>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="#">Home</Link></li>
                                        <li className="breadcrumb-item"><Link to="#">Library</Link></li>
                                        <li className="breadcrumb-item active">Data</li>
                                    </ol>
                                </nav>

                                <nav style={{ '--bs-breadcrumb-divider': '-' }}>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="#">Home</Link></li>
                                        <li className="breadcrumb-item"><Link to="#">Library</Link></li>
                                        <li className="breadcrumb-item active">Data</li>
                                    </ol>
                                </nav>

                                <nav style={{ '--bs-breadcrumb-divider': '•' }}>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="#">Home</Link></li>
                                        <li className="breadcrumb-item"><Link to="#">Library</Link></li>
                                        <li className="breadcrumb-item active">Data</li>
                                    </ol>
                                </nav>

                                <nav style={{ '--bs-breadcrumb-divider': ';' }}>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="#">Home</Link></li>
                                        <li className="breadcrumb-item"><Link to="#">Library</Link></li>
                                        <li className="breadcrumb-item active">Data</li>
                                    </ol>
                                </nav>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </main>
    )
}
