import './style-graphic.scss'
import { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import Loading from '../../assets/loading.gif';

export default function Graphic () {

    const canvasRef = useRef(null);
    const [dados, setDados] = useState([]);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        fetch("https://my.api.mockaroo.com/historico_receitas.json", {
            headers: {
                "X-API-Key": "b6269e10"
            }
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Erro na requisição");
            }
            return response.json();
        })
        .then((data) => {
            setDados(data);
            setLoading(false); 
        })
        .catch((error) => {
            console.error("Erro ao buscar dados:", error);
            setLoading(true); 
        });
    }, []);

    useEffect(() => {
        if (dados.length === 0) return;

        const totaisPorMes = {
            Jan: 0,
            Fev: 0,
            Mar: 0,
            Abr: 0,
            Mai: 0,
            Jun: 0,
        };

        dados.forEach(item => {
            // eslint-disable-next-line no-unused-vars
            const [dia, mes] = item.data_pagamento.split('.');

            const meses = {
                '01': 'Jan',
                '02': 'Fev',
                '03': 'Mar',
                '04': 'Abr',
                '05': 'Mai',
                '06': 'Jun',
            };

            const nomeMes = meses[mes];

            if (nomeMes) {
                totaisPorMes[nomeMes] += item.valor;
            }
        });

        const labels = Object.keys(totaisPorMes);
        const valores = Object.values(totaisPorMes);

        // Renderiza o gráfico
        const ctx = canvasRef.current.getContext('2d');
        const chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Total de Vendas por Mês',
                    data: valores,
                    backgroundColor: '#9E6EFE3D',
                    borderRadius: 5
                }]
            },
            options: {
                plugins: {
                legend: {
                    display: false 
                }
                },
                scales: {
                x: {
                    grid: {
                    display: false
                    }
                },
                y: {
                    grid: {
                    display: false
                    },
                    beginAtZero: true
                }
                }
            }
        });

        return () => chart.destroy();
    }, [dados]);

    return (
        <div className='spaceGraphicTransactions'>
            <h2>Gráfico de receitas</h2>
            {
                loading ? (
                    <div className="loading">
                        <img src={Loading} alt="loading" />
                    </div>
                ) : (
                    <div className='graphicContainer' style={{ width: '100%', height: '260px' }}>
                        <canvas ref={canvasRef}></canvas>
                    </div> 
                )
            }
        </div>
    );
}