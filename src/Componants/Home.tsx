import React, { useEffect, useRef, useState} from 'react';
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
    //chart re-render state
    const [chartKey, setChartKey] = useState<number>(0);
    const pieChartRef = useRef<any>(null);
    const barChartRef = useRef<any>(null);

    //Add resize event listener to re-render charts when the window is resized
    useEffect(()=>{
        const handleResize = () => {
            setChartKey(prev => prev + 1);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    })

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
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
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
                    <h3 className='ms-3 fw-bold'>Welcome!</h3>
                    <div className='row mt-2 mx-1 mx-md-0'>
                        {['Total Content Blocks', 'Content Block Published', 'Content Block Deactivated', 'Drafts'].map((title, index) => (
                            <div className='col-md-3 mb-3 mb-md-0' key={index}>
                                <div className='border rounded'>
                                    <h5 className='p-2 text-center'>{title}</h5>
                                    <h5 className='p-2 text-center'>{dataValues[index]}</h5>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='row mt-1 mx-1 mx-md-0'>
                        <div className='col-md-6 mb-3 mb-md-0'>
                            <div className='border solid rounded d-flex justify-content-center align-items-center p-2'>
                                <div style={{ width: '50%' }}>
                                    <Pie key={`pie-${chartKey}`} ref={pieChartRef} data={data} options={options} className='p-2' />
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 mb-3 mb-md-0'>
                            <div className='border solid rounded p-2'>
                                <Bar key={`bar-${chartKey}`} ref={barChartRef} data={databar} options={optionsbar} />
                            </div>
                        </div>
                    </div>
                    <div className='row mt-1 mb-4 mx-1 mx-md-0'>
                        {['Impressions', 'Opened', 'Clicks', 'Total Sends'].map((title, index) => (
                            <div className='col-md-3 mb-3 mb-md-0' key={index}>
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