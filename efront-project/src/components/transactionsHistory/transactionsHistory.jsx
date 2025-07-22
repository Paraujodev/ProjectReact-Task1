import './style-transactionsHistory.scss';
import { useEffect, useState } from 'react';
import Loading from '../../assets/loading.gif';

export default function TransactionsHistory() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalsByDay, setTotalsByDay] = useState([]);

  useEffect(() => {
    fetch("https://my.api.mockaroo.com/historico_receitas.json", {
      headers: {
        "X-API-Key": "b6269e10"
      }
    })
    .then((response) => {
      if (!response.ok) throw new Error("Erro na requisição");
      return response.json();
    })
    .then((data) => {
      setData(data);
      setLoading(false);
    })
    .catch((error) => {
      console.error("Erro ao buscar dados:", error);
      setLoading(true);
    });
  }, []);

  useEffect(() => {
    if (data.length === 0) return;

    const today = new Date();
    const weekdays = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

    const last3Days  = [...Array(3)].map((_, i) => {
      const date = new Date(today);
      date.setDate(today.getDate() - (i + 1));
      return {
        date,
        dayName: weekdays[date.getDay()],
        total: 0
      };
    });

    data.forEach(item => {
      const [day, month, year] = item.data_pagamento.split('.').map(Number);
      const paymentDate = new Date(year, month - 1, day);

      last3Days.forEach(d => {
        if (
          paymentDate.getDate() === d.date.getDate() &&
          paymentDate.getMonth() === d.date.getMonth() &&
          paymentDate.getFullYear() === d.date.getFullYear()
        ) {
          d.total += item.valor;
        }
      });
    });

    const formattedTotals = last3Days.map(d => ({
      day: d.dayName,
      value: d.total.toFixed(2).replace('.', ',')
    }));

    setTotalsByDay(formattedTotals);
  }, [data]);

  return (
    <div className='spaceGraphicTransactions'>
      <h2>Histórico de transações</h2>
      {
        loading ? (
          <div className="loading">
            <img src={Loading} alt="loading" />
          </div>
        ) : (
          <div className='dataTransactions'>
            {totalsByDay.map((item, index) => (
              <div key={index} className='transactionsInform'>
                <span>{item.day}</span>
                <span>R$ {item.value}</span>
              </div>
            ))}
          </div>
        )
      }
    </div>  
  )
};

