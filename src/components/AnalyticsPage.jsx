import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import './AnalyticsPage.css'
import Navbar from './navbar/Navbar';
import Sidebar from './sideBar/Sidebar';

// Registering the components for ChartJS
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AnalyticsPage = () => {
    const salesData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "Monthly Sales ($)",
            backgroundColor: "rgba(54, 162, 235, 0.5)",
            borderColor: "rgba(54, 162, 235, 1)",
            data: [1200, 1900, 3000, 5000, 2300, 3500, 4000]
        }]
    };

    const options = {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    return (
        <>
        <Navbar/>
        <Sidebar/>
        <div className='Analysisbox'>
            <div className="main-content">
                <div className="charts-container">
                    <Bar data={salesData} options={options} />
                </div>
            </div>
            
        </div>
        
        </>
    );
};

export default AnalyticsPage;
