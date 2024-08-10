import React, { useState } from 'react';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import 'chart.js/auto'; // Automatically register all charts
import CountUp from 'react-countup';
import Select from 'react-select';
import './AdminDashboard.css'; // Import the CSS file

const barData = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
        {
            label: 'Average Daily Sales',
            data: [3300, 4300, 5000, 4900, 6000, 3200, 5300],
            backgroundColor: '#4a984a',
        },
    ],
};

const barOptions = {
    scales: {
        y: {
            beginAtZero: true,
        },
    },
};

const doughnutData = {
    labels: ['Groceries', 'Electronics', 'Others'],
    datasets: [
        {
            data: [9500, 11500, 11000],
            backgroundColor: ['#00bcd4', '#00e676', '#ffeb3b'],
            hoverBackgroundColor: ['#00acc1', '#00c853', '#fdd835'],
        },
    ],
};

const doughnutOptions = {
    animation: {
        animateScale: true,
        animateRotate: true,
    },
    plugins: {
        legend: {
            display: true,
            position: 'bottom',
        },
    },
};

const statsData = [
    { title: 'Orders', value: 15209, subValue: 13456, percentage: 5.5, increase: true },
    { title: 'Items Sold', value: 1204, subValue: 1103, percentage: 2.5, increase: true },
    { title: 'Refunds', value: 105, subValue: 560, percentage: 1.5, increase: false },
    { title: 'Gross Sale', value: 12345, subValue: 10320, percentage: 11.5, increase: true },
    { title: 'Shipping', value: 360, subValue: 450, percentage: 1.5, increase: false },
    { title: 'Processing', value: 84, subValue: 64, percentage: 2.5, increase: true },
];

const timeFrameData = {
    thisWeek: {
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        datasets: [
            {
                label: 'This Week',
                data: [90, 60, 90, 70, 60, 100, 130],
                borderColor: '#26620e',
                backgroundColor: '#4a984a',
                fill: true,
            },
            {
                label: 'Previous Week',
                data: [60, 90, 70, 50, 30, 70, 100],
                borderColor: '#4a984a',
                backgroundColor: '#26620e',
                fill: true,
            },
        ],
    },
    thisMonth: {
        labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
        datasets: [
            {
                label: 'This Month',
                data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 150)),
                borderColor: '#26620e',
                backgroundColor: '#4a984a',
                fill: true,
            },
        ],
    },
    thisYear: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'This Year',
                data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 150)),
                borderColor: '#26620e',
                backgroundColor: '#4a984a',
                fill: true,
            },
        ],
    },
};

const options = [
    { value: 'thisWeek', label: 'This Week' },
    { value: 'thisMonth', label: 'This Month' },
    { value: 'thisYear', label: 'This Year' },
];

const SalesGraph = () => {
    const [selectedOption, setSelectedOption] = useState(options[0]);

    return (
        <div className='admin-card1'>
        <div className="sales-graph-container">
            <h2>Weekly Sales</h2>
            <Select
                value={selectedOption}
                onChange={setSelectedOption}
                options={options}
                defaultValue={options[0]}
            />
            <Line data={timeFrameData[selectedOption.value]} />
        </div>
        </div>
    );
};

const AdminDashboard = () => {
    return (
        <div className="admin-dashboard-container">
            <div className="admin-left-section">
                <div className="admin-top-section">
                    <div className='admin-card1'>
                        <div className="admin-greeting">
                            <h1>Welcome back <span className="name">Admin!</span></h1>
                            <p>Here’s what happening with your store today</p>
                            <br></br>
                            <div className="admin-stats">
                                <div className="admin-stat">
                                    <h2>15,209</h2>
                                    <p className='admin-parastyle'>TODAY'S VISIT</p>
                                </div>
                                <div className="admin-stat">
                                    <h2>₹ 29,115</h2>
                                    <p className='admin-parastyle'>TODAY'S TOTAL SALES</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="admin-bottom-section">
                    <div className="admin-cards-container">
                        <div className="admin-card">
                            <h3>EXPECTED EARNINGS</h3>
                            <h2>$32,000</h2>
                            <p className="admin-increase">5.5% ↑</p>
                            <div className="admin-earnings-breakdown">
                                <Doughnut data={doughnutData} options={doughnutOptions} />
                            </div>
                        </div>
                        <div className="admin-card">
                            <h3>AVERAGE DAILY SALES</h3>
                            <h2>$5,302</h2>
                            <p className="admin-increase">3.9% ↑</p>
                            <div className="admin-sales-graph">
                                <Bar data={barData} options={barOptions} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="admin-revenue-customers-container">
                    <div className="admin-card1">
                        <h3>REVENUE THIS MONTH</h3>
                        <h2>$16,520</h2>
                        <p className="admin-decrease1">1.5% ↓</p>
                        <p>$9,500 more to reach goal</p>
                        <div className="admin-progress-bar-container">
                            <div className="admin-progress-bar">
                                <div className="admin-progress" style={{ width: '68%' }}></div>
                            </div>
                            <span className="admin-progress-percentage">68%</span>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="admin-right-section">
                <div className="admin-card-container">
                    {statsData.map((item, index) => (
                        <div key={index} className="admin-card">
                            <div className="admin-title">{item.title}</div>
                            <div className="admin-value">
                                <CountUp end={item.value} duration={2} />
                            </div>
                            <div className="admin-sub-value">${item.subValue}</div>
                            <div className={`admin-percentage ${item.increase ? 'admin-increase' : 'admin-decrease'}`}>
                                {item.percentage}% {item.increase ? '↑' : '↓'}
                            </div>
                        </div>
                    ))}
                </div>
                <br></br>
                <SalesGraph />
            </div>
        </div>
    );
};

export default AdminDashboard;
