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

      <div className='imgLoading'>
        {loading && <img src={Loading} alt="Carregando..." />}
      </div>

      {!loading && (
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Pedido</th>
                <th>Data</th>
                <th>Nome</th>
                <th>Localização</th>
                <th>Valor</th>
                <th>Situação</th>
              </tr>
            </thead>
            <tbody>
              {users.map((usuario) => (
                <tr key={usuario.pedido}>
                  <td>{usuario.pedido}</td>
                  <td>{usuario.data}</td>
                  <td>{usuario.cliente}</td>
                  <td>{usuario.localizacao}</td>
                  <td>R$ {usuario.valor}</td>
                  <td>{usuario.situacao}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

