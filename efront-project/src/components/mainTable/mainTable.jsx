import './style-mainTable.scss';
import { useData } from "../../context/dataContext";
import { useEffect, useState } from 'react';
import Loading from '../../assets/loading.gif';

export default function MainTable() {
  const { data, loading } = useData();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const sortedData = [...data].sort((a, b) => {
      const [diaA, mesA, anoA] = a.data.split('/');
      const [diaB, mesB, anoB] = b.data.split('/');
      const dataA = new Date(anoA, mesA - 1, diaA);
      const dataB = new Date(anoB, mesB - 1, diaB);
      return dataB - dataA;
    });

    setUsers(sortedData);
  }, [data]);

  return (
    <div className='boxMainTable'>
      <h2>Histórico de compradores</h2>

      { loading ?
        <div className="loading">
          <img src={Loading} alt="loading" />
        </div>
      :
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Pedido</th>
                <th>Status</th>
                <th>Data</th>
                <th>Cliente</th>
                <th>Localização</th>
                <th>Itens</th>
                <th>Valor</th>
                <th>Pagamento</th>
              </tr>
            </thead>
            <tbody>
              {users.map((usuario) => (
                <tr>
                  <td>{usuario.pedido}</td>
                  <td>{usuario.status}</td>
                  <td>{usuario.data}</td>
                  <td>{usuario.cliente}</td>
                  <td>{usuario.localizacao}</td>
                  <td>{usuario.itens}</td>
                  <td>{Number(usuario.valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                  <td>
                    <div className="payment-status">
                      <span
                        className={`status-dot ${
                          usuario.pagamento === 'Aprovado'
                            ? 'status-aprovado'
                            : usuario.pagamento === 'Pendente'
                            ? 'status-pendente'
                            : 'status-reprovado'
                        }`}
                      ></span>
                      {usuario.pagamento}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      }
    </div>
  );
}

