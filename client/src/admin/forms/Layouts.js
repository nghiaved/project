import React from 'react'
import { Link } from 'react-router-dom'
import { path } from '../../utils'

export default function Layouts() {
    return (
        <main id="main" className="main">

            <div className="pagetitle">
                <h1>Form Layouts</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to={path.ADMIN}>Home</Link></li>
                        <li className="breadcrumb-item">Forms</li>
                        <li className="breadcrumb-item active">Layouts</li>
                    </ol>
                </nav>
            </div>
            <section className="section">
                <div className="row">
                    <div className="col-lg-6">

                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Horizontal Form</h5>

                                <form>
                                    <div className="row mb-3">
                                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Your Name</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" id="inputText" />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                                        <div className="col-sm-10">
                                            <input type="email" className="form-control" id="inputEmail" />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                                        <div className="col-sm-10">
                                            <input type="password" className="form-control" id="inputPassword" />
                                        </div>
                                    </div>
                                    <fieldset className="row mb-3">
                                        <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
                                        <div className="col-sm-10">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" defaultChecked />
                                                <label className="form-check-label" htmlFor="gridRadios1">
                                                    First radio
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                                                <label className="form-check-label" htmlFor="gridRadios2">
                                                    Second radio
                                                </label>
                                            </div>
                                            <div className="form-check disabled">
                                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled />
                                                <label className="form-check-label" htmlFor="gridRadios3">
                                                    Third disabled radio
                                                </label>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <div className="row mb-3">
                                        <div className="col-sm-10 offset-sm-2">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="gridCheck1" />
                                                <label className="form-check-label" htmlFor="gridCheck1">
                                                    Example checkbox
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                        <button type="reset" className="btn btn-secondary">Reset</button>
                                    </div>
                                </form>

                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Multi Columns Form</h5>

                                <form className="row g-3">
                                    <div className="col-md-12">
                                        <label htmlFor="inputName5" className="form-label">Your Name</label>
                                        <input type="text" className="form-control" id="inputName5" />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="inputEmail5" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="inputEmail5" />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="inputPassword5" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="inputPassword5" />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="inputAddress5" className="form-label">Address</label>
                                        <input type="text" className="form-control" id="inputAddres5s" placeholder="1234 Main St" />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                                        <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="inputCity" className="form-label">City</label>
                                        <input type="text" className="form-control" id="inputCity" />
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="inputState" className="form-label">State</label>
                                        <select id="inputState" className="form-select">
                                            <option defaultValue>Choose...</option>
                                            <option>...</option>
                                        </select>
                                    </div>
                                    <div className="col-md-2">
                                        <label htmlFor="inputZip" className="form-label">Zip</label>
                                        <input type="text" className="form-control" id="inputZip" />
                                    </div>
                                    <div className="col-12">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="gridCheck" />
                                            <label className="form-check-label" htmlFor="gridCheck">
                                                Check me out
                                            </label>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                        <button type="reset" className="btn btn-secondary">Reset</button>
                                    </div>
                                </form>

                            </div>
                        </div>

                    </div>

                    <div className="col-lg-6">

                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Vertical Form</h5>

                                <form className="row g-3">
                                    <div className="col-12">
                                        <label htmlFor="inputNanme4" className="form-label">Your Name</label>
                                        <input type="text" className="form-control" id="inputNanme4" />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="inputEmail4" />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="inputPassword4" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="inputPassword4" />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="inputAddress" className="form-label">Address</label>
                                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                        <button type="reset" className="btn btn-secondary">Reset</button>
                                    </div>
                                </form>

                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">No Labels / Placeholders as labels Form</h5>

                                <form className="row g-3">
                                    <div className="col-md-12">
                                        <input type="text" className="form-control" placeholder="Your Name" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="email" className="form-control" placeholder="Email" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="password" className="form-control" placeholder="Password" />
                                    </div>
                                    <div className="col-12">
                                        <input type="text" className="form-control" placeholder="Address" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" className="form-control" placeholder="City" />
                                    </div>
                                    <div className="col-md-4">
                                        <select className="form-select">
                                            <option defaultValue>Choose...</option>
                                            <option>...</option>
                                        </select>
                                    </div>
                                    <div className="col-md-2">
                                        <input type="text" className="form-control" placeholder="Zip" />
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                        <button type="reset" className="btn btn-secondary">Reset</button>
                                    </div>
                                </form>

                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Floating labels Form</h5>

                                <form className="row g-3">
                                    <div className="col-md-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="floatingName" placeholder="Your Name" />
                                            <label htmlFor="floatingName">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="floatingEmail" placeholder="Your Email" />
                                            <label htmlFor="floatingEmail">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                            <label htmlFor="floatingPassword">Password</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea className="form-control" placeholder="Address" id="floatingTextarea" style={{ height: '100px' }}></textarea>
                                            <label htmlFor="floatingTextarea">Address</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="col-md-12">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="floatingCity" placeholder="City" />
                                                <label htmlFor="floatingCity">City</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-floating mb-3">
                                            <select className="form-select" id="floatingSelect" aria-label="State">
                                                <option defaultValue>New York</option>
                                                <option value="1">Oregon</option>
                                                <option value="2">DC</option>
                                            </select>
                                            <label htmlFor="floatingSelect">State</label>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="floatingZip" placeholder="Zip" />
                                            <label htmlFor="floatingZip">Zip</label>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                        <button type="reset" className="btn btn-secondary">Reset</button>
                                    </div>
                                </form>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </main>
    )
}
