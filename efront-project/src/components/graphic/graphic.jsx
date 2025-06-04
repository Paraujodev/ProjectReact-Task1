import './style-graphic.scss'
import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export default function Graphic () {

    const canvasRef = useRef(null);

    useEffect(() => {
        const ctx = canvasRef.current.getContext('2d');

        const data = [
        { year: 2010, count: 10 },
        { year: 2011, count: 20 },
        { year: 2012, count: 15 },
        { year: 2013, count: 25 },
        { year: 2014, count: 22 },
        { year: 2015, count: 30 },
        { year: 2016, count: 28 },
        ];

        const chartInstance = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: data.map(row => row.year),
                datasets: [
                {
                    label: '',
                    data: data.map(row => row.count),
                    backgroundColor: 'rgba(75, 192, 192, 0.6)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false, 
                    },
                },
                scales: {
                    x: {
                        grid: {
                            display: false, 
                        },
                    },
                    y: {
                        grid: {
                            display: false,
                        },
                    },
                },
            },
        });

        return () => {
        chartInstance.destroy(); // Destrói o gráfico ao desmontar
        };
    }, []);

    return (
        <div className='spaceGraphicTransactions'>
            <h2>Gráfico de receitas</h2>
            <div style={{ width: '100%', height: '260px' }}>
                <canvas ref={canvasRef}></canvas>
            </div>
        </div>
    );
}