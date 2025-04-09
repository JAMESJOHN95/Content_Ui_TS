import React from 'react';
import Layout from '../Pages/Layout';
import { Pie, Bar } from 'react-chartjs-2';
import { TooltipItem } from 'chart.js';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
} from 'chart.js';

// Register necessary components for both Pie and Bar charts
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);

const Home: React.FC = () => {
    const dataValues: number[] = [10, 80, 5,10]; // Data for each segment
    const total: number = dataValues.reduce((acc, value) => acc + value, 0);

    const data = {
        labels: ['Draft', 'Published', 'Deactivated'],
        datasets: [
            {
                data: dataValues,
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCD56'],
                hoverBackgroundColor: ['#FF4C61', '#2C8CEB', '#FFB42F'],
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
                labels: {
                    boxWidth: 10,
                    padding: 10,
                    usePointStyle: true,
                },
            },
            tooltip: {
                callbacks: {
                    label: (tooltipItem: TooltipItem<'pie'>) => {
                        const value = tooltipItem.raw as number; // Explicitly cast raw to number
                        const percentage = ((value / total) * 100).toFixed(2);
                        return `${tooltipItem.label}: ${percentage}%`;
                    },
                },
            },
        },
    };
    

    const databar = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: '',
                data: [1200, 1900, 1500, 2200, 2800, 3000],
                backgroundColor: 'rgba(75, 192, 192, 0.3)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };
    const optionsbar = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Total Impressions of content block in each month',
            },
            tooltip: {
                callbacks: {
                    label: (tooltipItem: TooltipItem<'bar'>) => {
                        return `${tooltipItem.dataset.label}: $${tooltipItem.raw as number}`;
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
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-1 p-0'>
                    <Layout />
                </div>
                <div className='col-md-11 mt-4'>
                    <h3 className='ms-5 '>Welcome!</h3>
                    <div className='row mt-2'>
                        {['Total Content Blocks', 'Content Block Published', 'Content Block Deactivated', 'Drafts'].map((title, index) => (
                            <div className='col-md-3' key={index}>
                                <div className='border rounded'>
                                    <h5 className='p-2 text-center'>{title}</h5>
                                    <h5 className='p-2 text-center'>{dataValues[index]}</h5>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='row mt-1'>
                        <div className='col-md-6'>
                            <div className='border solid rounded d-flex justify-content-center align-items-center p-2'>
                                <div style={{ width: '50%' }}>
                                    <Pie data={data} options={options} className='p-2' />
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='border solid rounded p-2'>
                                <Bar data={databar} options={optionsbar} />
                            </div>
                        </div>
                    </div>
                    <div className='row mt-1 mb-4'>
                        {['Impressions', 'Opened', 'Clicks', 'Total Sends'].map((title, index) => (
                            <div className='col-md-3' key={index}>
                                <div className='border rounded'>
                                    <h5 className='p-2 text-center'>{title}</h5>
                                    <h5 className='p-2 text-center'>{[10, 65, 64, 129][index]}</h5>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;