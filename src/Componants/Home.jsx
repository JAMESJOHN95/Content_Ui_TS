import React from 'react'
import Layout from '../Pages/Layout'
import { Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';

// Register necessary components for both Pie and Bar charts
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);

function Home() {
    const data = {
        labels: ['Draft', 'Published', 'Deactivated'], // Labels for segments
        datasets: [
            {
                data: [300, 50, 100], // Data for each segment
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCD56'], // Color for each segment
                hoverBackgroundColor: ['#FF4C61', '#2C8CEB', '#FFB42F'], // Hover effect colors
            },
        ],
    };

    // Options for the pie chart (optional)
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top', // Position of the legend
            },
            tooltip: {
                callbacks: {
                    label: (tooltipItem) => {
                        return `${tooltipItem.label}: ${tooltipItem.raw}`;
                    },
                },
            },
        },
    };

    // Data for the Bar chart
    const databar = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'], // Labels for the x-axis
        datasets: [
            {
                label: '', // Label for the dataset
                data: [1200, 1900, 1500, 2200, 2800, 3000], // Data for the bars
                backgroundColor: 'rgba(75, 192, 192, 0.2)', // Bar color
                borderColor: 'rgba(75, 192, 192, 1)', // Border color for bars
                borderWidth: 1, // Border width
            },
        ],
    };

    // Options for the bar chart
    const optionsbar = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Total Impressions of content bock in each month', 
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
                beginAtZero: true, // Ensure the y-axis starts at 0
            },
        },
    };

    return (
        <>
            {/* 
            <Layout/>
            <div className='main_content text-start mt-3' >
                <div><h3 className='ms-4'>WELCOME!</h3></div>
                <div><button className='btn  ms-4 border'>Any</button><button className='btn border  ms-4'>Any</button></div>
                <div className='d-flex justify-content-around mt-3'>
                    <div style={{width:"200px" , height:"100px"}} className='border rounded p-2'> <h5>Total Content Blocks</h5> </div>
                    <div style={{width:"200px" , height:"100px"}} className='border rounded p-2'><h5>Content Block Published</h5></div>
                    <div style={{width:"200px" , height:"100px"}} className='border rounded p-2'><h5>Content Blocks Deactivated</h5></div>
                    <div style={{width:"200px" , height:"100px"}} className='border rounded p-2'></div>
                </div>
                <div className='d-flex justify-content-around mt-3'>
                    <div style={{width:"450px", height:"250px"}} className='border rounded'></div>
                    <div style={{width:"450px", height:"250px"}} className='border rounded'></div>
                </div>
                <div className='d-flex justify-content-around mt-3'>
                    <div style={{width:"200px" , height:"100px"}} className='border rounded'> </div>
                    <div style={{width:"200px" , height:"100px"}} className='border rounded'></div>
                    <div style={{width:"200px" , height:"100px"}} className='border rounded'></div>
                    <div style={{width:"200px" , height:"100px"}} className='border rounded'></div>
                </div>
            </div>
            */}
         <div className='container-fluid'>  
             <div className='row'>
                <div className='col-md-1 p-0  '>
                    <Layout />
                </div>
                <div className='col-md-11 mt-4'>
                    <h3 className='ms-5 '>Welcome !</h3>
                    <div className='row mt-2'>
                        <div className='col-md-3  rounded'>
                           <div className='border rounded' >
                           <h5 className='p-2 text-center'>Total Content Blocks</h5>
                           <h5 className='p-2 text-center'>100</h5>
                           </div>
                        </div>
                        <div className='col-md-3'>
                           <div className='border rounded' >
                           <h5 className='p-2 text-center'>Content Block Published</h5>
                           <h5 className='p-2 text-center'>80</h5></div> 
                        </div>
                        <div className='col-md-3'>
                           <div className='border rounded' >
                           <h5 className='p-2 text-center'>Content Block Deactivated</h5>
                           <h5 className='p-2 text-center'>5</h5></div> 
                        </div>
                        <div className='col-md-3 '>
                           <div className='border rounded'><h5 className='p-2 text-center'>
                                Drafts</h5>
                                <h5 className='p-2 text-center'>10</h5></div> 
                        </div>
                    </div>
                    <div className='row mt-1'>
                    <div className='col-md-6'>
    <div className='border solid rounded d-flex justify-content-center align-items-center p-1'/*  style={{ height: "335px" }} */>
        <div style={{ width: "60%" }}>
            <Pie data={data} options={options} className='p-3'/>
        </div>
    </div>
</div>
                        <div className='col-md-6 '>
                          <div className='border solid rounded p-2'>
                          <Bar data={databar} options={optionsbar} /></div> 
                        </div>
                    </div>
                    <div className='row mt-1'>
                        <div className='col-md-3'>
                           <div className=' border rounded'>
                           <h5 className='p-2 text-center'>Impressions</h5>
                           <h5 className='p-2 text-center'>10</h5></div> 
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
                            <h5 className='p-2 text-center'>
                                Total Sends</h5>
                           <h5 className='p-2 text-center'>10</h5></div> 
                        </div>
                    </div>
                   {/*  <div className='row mt-1'>
                        <div className='col-md-6 p-4'>
                            <div className=' border rounded'>
   
                            </div>
                        </div>
                        <div className='col-md-6 p-4'>
                            <div className=' border rounded'>   
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            </div>
        </>
    )
}

export default Home;
