import React from 'react'
import Layout from '../Pages/Layout'
import { Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';

// Register necessary components for both Pie and Bar charts
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);

function Home() {
    const dataValues = [10, 80, 5]; // Data for each segment
    const total = dataValues.reduce((acc, value) => acc + value, 0);

    const data = {
        labels: ['Draft', 'Published', 'Deactivated'], // Labels without percentage
        datasets: [
            {
                data: dataValues, 
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCD56'], 
                hoverBackgroundColor: ['#FF4C61', '#2C8CEB', '#FFB42F'], 
            },
        ],
    };

    // Options for the Pie chart
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    boxWidth: 10, 
                    padding: 10,
                    usePointStyle: true,
                },
            },
            tooltip: {
                callbacks: {
                    label: (tooltipItem) => {
                        let value = tooltipItem.raw;
                        let percentage = ((value / total) * 100).toFixed(2); // Calculate percentage
                        return `${tooltipItem.label}: ${percentage}%`;
                    },
                },
            },
        },
    };

    // Data for the Bar chart
    const databar = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'], 
        datasets: [
            {
                label: '', 
                data: [1200, 1900, 1500, 2200, 2800, 3000], 
                backgroundColor: 'rgba(75, 192, 192, 0.2)', 
                borderColor: 'rgba(75, 192, 192, 1)', 
                borderWidth: 1, 
            },
        ],
    };

    // Options for the bar chart
    const optionsbar = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Total Impressions of content block in each month', 
            },
            tooltip: {
                callbacks: {
                    label: (tooltipItem) => {
                        return `${tooltipItem.dataset.label}: $${tooltipItem.raw}`;
                    },
                },
            },
        },
        scales: {
            y: {
                beginAtZero: true, 
            },
        },
    };

    return (
        <>
         <div className='container-fluid'>  
             <div className='row'>
                <div className='col-md-1 p-0'>
                    <Layout />
                </div>
                <div className='col-md-11 mt-4'>
                    <h3 className='ms-5 '>Welcome !</h3>
                    <div className='row mt-2'>
                        <div className='col-md-3  rounded'>
                           <div className='border rounded'>
                               <h5 className='p-2 text-center'>Total Content Blocks</h5>
                               <h5 className='p-2 text-center'>95</h5>
                           </div>
                        </div>
                        <div className='col-md-3'>
                           <div className='border rounded'>
                               <h5 className='p-2 text-center'>Content Block Published</h5>
                               <h5 className='p-2 text-center'>80</h5>
                           </div> 
                        </div>
                        <div className='col-md-3'>
                           <div className='border rounded'>
                               <h5 className='p-2 text-center'>Content Block Deactivated</h5>
                               <h5 className='p-2 text-center'>5</h5>
                           </div> 
                        </div>
                        <div className='col-md-3 '>
                           <div className='border rounded'>
                               <h5 className='p-2 text-center'>Drafts</h5>
                               <h5 className='p-2 text-center'>10</h5>
                           </div> 
                        </div>
                    </div>
                    <div className='row mt-1'>
                        <div className='col-md-6'>
                            <div className='border solid rounded d-flex justify-content-center align-items-center p-2'>
                                <div style={{ width: "50%" }}>
                                    <Pie data={data} options={options} className='p-2'/>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='border solid rounded p-2'>
                                <Bar data={databar} options={optionsbar} />
                            </div> 
                        </div>
                    </div>
                    <div className='row mt-1'>
                        <div className='col-md-3'>
                           <div className=' border rounded'>
                               <h5 className='p-2 text-center'>Impressions</h5>
                               <h5 className='p-2 text-center'>10</h5>
                           </div> 
                        </div>
                        <div className='col-md-3'>
                            <div className=' border rounded'>
                                <h5 className='p-2 text-center'>Opened</h5>
                                <h5 className='p-2 text-center'>65</h5>
                            </div>
                        </div>
                        <div className='col-md-3'>
                           <div className='border rounded'>
                               <h5 className='p-2 text-center'>Clicks</h5>
                               <h5 className='p-2 text-center'>64</h5>
                           </div>
                        </div>
                        <div className='col-md-3 '>
                           <div className='border rounded'>
                               <h5 className='p-2 text-center'>Total Sends</h5>
                               <h5 className='p-2 text-center'>129</h5>
                           </div> 
                        </div>
                    </div>
                </div>
            </div>
         </div>
        </>
    )
}

export default Home;
