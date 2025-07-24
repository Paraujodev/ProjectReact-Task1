import './style-transactionsHistory.scss';
import { useEffect, useState } from 'react';
import { useData } from "../../context/dataContext";
import Loading from '../../assets/loading.gif';

export default function TransactionsHistory() {

  const { data, loading } = useData();
  const [totalsByDay, setTotalsByDay] = useState([]);

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

    const filteredData = data.filter(item =>
      item.situacao === "Aprovada" || item.situacao === "Em análise"
    );

    filteredData.forEach(item => {
      const [day, month, year] = item.data.split('/').map(Number);
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

