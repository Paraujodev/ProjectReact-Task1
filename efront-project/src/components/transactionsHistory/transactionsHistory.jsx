import './style-transactionsHistory.scss';
import { useEffect, useState } from 'react';
import Loading from '../../assets/loading.gif';

export default function TransactionsHistory() {
  const [dados, setDados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totaisPorDia, setTotaisPorDia] = useState([]);

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
      setDados(data);
      setLoading(false);
    })
    .catch((error) => {
      console.error("Erro ao buscar dados:", error);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (dados.length === 0) return;

    const hoje = new Date();
    const diasSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

    const ultimos3Dias = [...Array(3)].map((_, i) => {
      const data = new Date(hoje);
      data.setDate(hoje.getDate() - (i + 1));
      return {
        data,
        nomeDia: diasSemana[data.getDay()],
        total: 0
      };
    });

    dados.forEach(item => {
      const [dia, mes, ano] = item.data_pagamento.split('.').map(Number);
      const dataVenda = new Date(ano, mes - 1, dia);

      ultimos3Dias.forEach(d => {
        if (
          dataVenda.getDate() === d.data.getDate() &&
          dataVenda.getMonth() === d.data.getMonth() &&
          dataVenda.getFullYear() === d.data.getFullYear()
        ) {
          d.total += item.valor;
        }
      });
    });

    const totaisArray = ultimos3Dias.map(d => ({
      dia: d.nomeDia,
      valor: d.total.toFixed(2).replace('.', ',')
    }));

    setTotaisPorDia(totaisArray);
  }, [dados]);

  return (
    <div className='spaceGraphicTransactions'>
      <h2>Histórico de transações</h2>
      {
        loading ? (
          <div className="loading">
            <img src={Loading} alt="loading" />
          </div>
        ) : (
          <div className='dataTrasactions'>
            {totaisPorDia.map((item, index) => (
              <div key={index} className='transactionsInform'>
                <span>{item.dia}</span>
                <span>R$ {item.valor}</span>
              </div>
            ))}
          </div>
        )
      }
    </div>  
  )
};

