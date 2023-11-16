import React from 'react'
import { Link } from 'react-router-dom'
import { path } from '../../utils'

export default function Pagination() {
    return (
        <main id="main" className="main">

            <div className="pagetitle">
                <h1>Pagination</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to={path.ADMIN}>Home</Link></li>
                        <li className="breadcrumb-item">Components</li>
                        <li className="breadcrumb-item active">Pagination</li>
                    </ol>
                </nav>
            </div>

            <section className="section">
                <div className="row">
                    <div className="col-lg-6">

                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Basic Pagination</h5>

                                <nav aria-label="Page navigation example">
                                    <ul className="pagination">
                                        <li className="page-item"><Link className="page-link" to="#">Previous</Link></li>
                                        <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                        <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                        <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                        <li className="page-item"><Link className="page-link" to="#">Next</Link></li>
                                    </ul>
                                </nav>

                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Disabled and active states</h5>

                                <nav aria-label="...">
                                    <ul className="pagination">
                                        <li className="page-item disabled">
                                            <Link className="page-link" to="#" tabIndex="-1" aria-disabled="true">Previous</Link>
                                        </li>
                                        <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                        <li className="page-item active" aria-current="page">
                                            <Link className="page-link" to="#">2</Link>
                                        </li>
                                        <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                        <li className="page-item">
                                            <Link className="page-link" to="#">Next</Link>
                                        </li>
                                    </ul>
                                </nav>

                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Alignment</h5>

                                <nav aria-label="Page navigation example">
                                    <ul className="pagination">
                                        <li className="page-item disabled">
                                            <Link className="page-link" to="#" tabIndex="-1" aria-disabled="true">Previous</Link>
                                        </li>
                                        <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                        <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                        <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                        <li className="page-item">
                                            <Link className="page-link" to="#">Next</Link>
                                        </li>
                                    </ul>
                                </nav>

                                <nav aria-label="Page navigation example">
                                    <ul className="pagination justify-content-center">
                                        <li className="page-item disabled">
                                            <Link className="page-link" to="#" tabIndex="-1" aria-disabled="true">Previous</Link>
                                        </li>
                                        <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                        <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                        <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                        <li className="page-item">
                                            <Link className="page-link" to="#">Next</Link>
                                        </li>
                                    </ul>
                                </nav>

                                <nav aria-label="Page navigation example">
                                    <ul className="pagination justify-content-end">
                                        <li className="page-item disabled">
                                            <Link className="page-link" to="#" tabIndex="-1" aria-disabled="true">Previous</Link>
                                        </li>
                                        <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                        <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                        <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                        <li className="page-item">
                                            <Link className="page-link" to="#">Next</Link>
                                        </li>
                                    </ul>
                                </nav>

                            </div>
                        </div>

                    </div>

                    <div className="col-lg-6">

                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Pagination with icon</h5>

                                <nav aria-label="Page navigation example">
                                    <ul className="pagination">
                                        <li className="page-item">
                                            <Link className="page-link" to="#" aria-label="Previous">
                                                <span aria-hidden="true">&laquo;</span>
                                            </Link>
                                        </li>
                                        <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                        <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                        <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                        <li className="page-item">
                                            <Link className="page-link" to="#" aria-label="Next">
                                                <span aria-hidden="true">&raquo;</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>

                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Sizing</h5>

                                <nav aria-label="...">
                                    <ul className="pagination pagination-sm">
                                        <li className="page-item active" aria-current="page">
                                            <span className="page-link">1</span>
                                        </li>
                                        <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                        <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                    </ul>
                                </nav>

                                <nav aria-label="...">
                                    <ul className="pagination">
                                        <li className="page-item active" aria-current="page">
                                            <span className="page-link">1</span>
                                        </li>
                                        <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                        <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                    </ul>
                                </nav>

                                <nav aria-label="...">
                                    <ul className="pagination pagination-lg">
                                        <li className="page-item active" aria-current="page">
                                            <span className="page-link">1</span>
                                        </li>
                                        <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                        <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                    </ul>
                                </nav>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </main>
    )
}
