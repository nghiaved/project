import React from 'react'
import Apexcharts from 'react-apexcharts'
import { Link } from 'react-router-dom'
import { path } from '../../utils'

export default function Apexchart() {
    return (
        <main id="main" className="main">

            <div className="pagetitle">
                <h1>ApexCharts</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to={path.ADMIN}>Home</Link></li>
                        <li className="breadcrumb-item">Charts</li>
                        <li className="breadcrumb-item active">ApexCharts</li>
                    </ol>
                </nav>
            </div>

            <p>ApexCharts Examples. You can check the <a href="https://apexcharts.com/docs/react-charts/" target="_blank" rel="noreferrer">official website</a> for more examples.</p>

            <section className="section">
                <div className="row">

                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Line Chart</h5>

                                <Apexcharts options={{
                                    chart: {
                                        id: 'apexchart-example'
                                    },
                                    xaxis: {
                                        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
                                    }
                                }} series={[{
                                    name: 'series-1',
                                    data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
                                }]} type="line" />

                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Area Chart</h5>

                                <Apexcharts options={{
                                    chart: {
                                        id: 'apexchart-example'
                                    },
                                    xaxis: {
                                        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
                                    }
                                }} series={[{
                                    name: 'series-1',
                                    data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
                                }]} type="area" />

                            </div>
                        </div>
                    </div>


                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Bar Chart</h5>

                                <Apexcharts options={{
                                    chart: {
                                        id: 'apexchart-example'
                                    },
                                    xaxis: {
                                        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
                                    }
                                }} series={[{
                                    name: 'series-1',
                                    data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
                                }]} type="bar" />

                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Heatmap Chart</h5>

                                <Apexcharts options={{
                                    chart: {
                                        id: 'apexchart-example'
                                    },
                                    xaxis: {
                                        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
                                    }
                                }} series={[{
                                    name: 'series-1',
                                    data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
                                }]} type="heatmap" />

                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Donut Chart</h5>

                                <Apexcharts options={{}} series={[44, 55, 41, 17, 15]} type="donut" />

                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Scatter Chart</h5>

                                <Apexcharts options={{
                                    chart: {
                                        id: 'apexchart-example'
                                    },
                                    xaxis: {
                                        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
                                    }
                                }} series={[{
                                    name: 'series-1',
                                    data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
                                }]} type="scatter" />

                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </main>
    )
}
