import React from 'react'
import { Link } from 'react-router-dom'
import { path } from '../../utils'

export default function Buttons() {
  return (
    <main id="main" className="main">

      <div className="pagetitle">
        <h1>Buttons</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to={path.ADMIN}>Home</Link></li>
            <li className="breadcrumb-item">Components</li>
            <li className="breadcrumb-item active">Buttons</li>
          </ol>
        </nav>
      </div>

      <section className="section">
        <div className="row">
          <div className="col-lg-6">

            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Default Buttons</h5>

                <button type="button" className="btn btn-primary">Primary</button>
                <button type="button" className="btn btn-secondary">Secondary</button>
                <button type="button" className="btn btn-success">Success</button>
                <button type="button" className="btn btn-danger">Danger</button>
                <button type="button" className="btn btn-warning">Warning</button>
                <button type="button" className="btn btn-info">Info</button>
                <button type="button" className="btn btn-light">Light</button>
                <button type="button" className="btn btn-dark">Dark</button>
                <button type="button" className="btn btn-link">Link</button>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Rounded Buttons</h5>

                <button type="button" className="btn btn-primary rounded-pill">Primary</button>
                <button type="button" className="btn btn-secondary rounded-pill">Secondary</button>
                <button type="button" className="btn btn-success rounded-pill">Success</button>
                <button type="button" className="btn btn-danger rounded-pill">Danger</button>
                <button type="button" className="btn btn-warning rounded-pill">Warning</button>
                <button type="button" className="btn btn-info rounded-pill">Info</button>
                <button type="button" className="btn btn-light rounded-pill">Light</button>
                <button type="button" className="btn btn-dark rounded-pill">Dark</button>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Icon Buttons</h5>

                <button type="button" className="btn btn-primary"><i className="bi bi-star me-1"></i> With Text</button>
                <button type="button" className="btn btn-secondary"><i className="bi bi-collection"></i></button>
                <button type="button" className="btn btn-success"><i className="bi bi-check-circle"></i></button>
                <button type="button" className="btn btn-danger"><i className="bi bi-exclamation-octagon"></i></button>
                <button type="button" className="btn btn-warning"><i className="bi bi-exclamation-triangle"></i></button>
                <button type="button" className="btn btn-info"><i className="bi bi-info-circle"></i></button>
                <button type="button" className="btn btn-dark"><i className="bi bi-folder"></i></button>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Button Groups</h5>

                <div className="btn-group" role="group" aria-label="Basic example">
                  <button type="button" className="btn btn-primary">Left</button>
                  <button type="button" className="btn btn-primary">Middle</button>
                  <button type="button" className="btn btn-primary">Right</button>
                </div>

                <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                  <button type="button" className="btn btn-danger">Left</button>
                  <button type="button" className="btn btn-warning">Middle</button>
                  <button type="button" className="btn btn-success">Right</button>
                </div>

                <div className="btn-group" role="group" aria-label="Basic outlined example">
                  <button type="button" className="btn btn-outline-primary">Left</button>
                  <button type="button" className="btn btn-outline-primary">Middle</button>
                  <button type="button" className="btn btn-outline-primary">Right</button>
                </div>

              </div>
            </div>

          </div>

          <div className="col-lg-6">

            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Outline Buttons</h5>

                <button type="button" className="btn btn-outline-primary">Primary</button>
                <button type="button" className="btn btn-outline-secondary">Secondary</button>
                <button type="button" className="btn btn-outline-success">Success</button>
                <button type="button" className="btn btn-outline-danger">Danger</button>
                <button type="button" className="btn btn-outline-warning">Warning</button>
                <button type="button" className="btn btn-outline-info">Info</button>
                <button type="button" className="btn btn-outline-light">Light</button>
                <button type="button" className="btn btn-outline-dark">Dark</button>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Button Sizes</h5>

                <button type="button" className="btn btn-primary btn-sm">Small</button>
                <button type="button" className="btn btn-secondary">Normal</button>
                <button type="button" className="btn btn-success btn-lg">Large</button>

                <button type="button" className="btn btn-outline-danger btn-sm">Small</button>
                <button type="button" className="btn btn-outline-warning">Normal</button>
                <button type="button" className="btn btn-outline-info btn-lg">Large</button>

                <div className="d-grid gap-2 mt-3">
                  <button className="btn btn-primary" type="button">Block Button</button>
                </div>

              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Button States</h5>

                <button type="button" className="btn btn-primary">Normal</button>
                <button type="button" className="btn btn-primary" disabled>Disabled</button>
                <button type="button" className="btn btn-outline-primary">Normal</button>
                <button type="button" className="btn btn-outline-primary" disabled>Disabled</button>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  )
}
