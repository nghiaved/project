import React from 'react'
import Chart from 'chart.js/auto'
import { CategoryScale } from 'chart.js'
import { Line, Bar, Radar, Doughnut } from 'react-chartjs-2'
import { Link } from 'react-router-dom'
import { path } from '../../utils'

Chart.register(CategoryScale)

export default function Charts() {
    return (
        <main id="main" className="main">

            <div className="pagetitle">
                <h1>Chart.js</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to={path.ADMIN}>Home</Link></li>
                        <li className="breadcrumb-item">Chartjs</li>
                        <li className="breadcrumb-item active">Chart.js</li>
                    </ol>
                </nav>
            </div>

            <p>Chart.js & React-chartjs-2 Examples. You can check the <a href="https://react-chartjs-2.js.org/examples/" target="_blank" rel="noreferrer">official website</a> for more examples.</p>

            <section className="section">
                <div className="row">

                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Line Chart</h5>

                                <Line
                                    data={{
                                        labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
                                        datasets: [
                                            {
                                                data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
                                                label: "Africa",
                                                borderColor: "#3e95cd",
                                                fill: false
                                            },
                                            {
                                                data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
                                                label: "Asia",
                                                borderColor: "#8e5ea2",
                                                fill: false
                                            },
                                            {
                                                data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
                                                label: "Europe",
                                                borderColor: "#3cba9f",
                                                fill: false
                                            }
                                        ]
                                    }}
                                    options={{
                                        title: {
                                            display: true,
                                            text: "World population per region (in millions)"
                                        },
                                        legend: {
                                            display: true,
                                            position: "bottom"
                                        }
                                    }}
                                />

                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Bar Chart</h5>

                                <Bar
                                    data={{
                                        labels: [
                                            "Africa",
                                            "Asia",
                                            "Europe",
                                            "Latin America",
                                            "North America"
                                        ],
                                        datasets: [
                                            {
                                                label: "Population (millions)",
                                                backgroundColor: [
                                                    "#3e95cd",
                                                    "#8e5ea2",
                                                    "#3cba9f",
                                                    "#e8c3b9",
                                                    "#c45850"
                                                ],
                                                data: [2478, 5267, 734, 784, 433]
                                            }
                                        ]
                                    }}
                                    options={{
                                        legend: { display: false },
                                        title: {
                                            display: true,
                                            text: "Predicted world population (millions) in 2050"
                                        }
                                    }}
                                />

                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Radar Chart</h5>

                                <Radar data={{
                                    labels: ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4', 'Thing 5', 'Thing 6'],
                                    datasets: [
                                        {
                                            label: '# of Votes',
                                            data: [2, 9, 3, 5, 2, 3],
                                            backgroundColor: 'rgba(255, 99, 132, 0.2)',
                                            borderColor: 'rgba(255, 99, 132, 1)',
                                            borderWidth: 1,
                                        },
                                    ],
                                }} />

                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Doughnut Chart</h5>

                                <Doughnut
                                    data={{
                                        labels: [
                                            "Africa",
                                            "Asia",
                                            "Europe",
                                            "Latin America",
                                            "North America"
                                        ],
                                        datasets: [
                                            {
                                                label: "Population (millions)",
                                                backgroundColor: [
                                                    "#3e95cd",
                                                    "#8e5ea2",
                                                    "#3cba9f",
                                                    "#e8c3b9",
                                                    "#c45850"
                                                ],
                                                data: [2478, 5267, 734, 784, 433]
                                            }
                                        ]
                                    }}
                                    option={{
                                        title: {
                                            display: true,
                                            text: "Predicted world population (millions) in 2050"
                                        }
                                    }}
                                />

                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </main>
    )
}
