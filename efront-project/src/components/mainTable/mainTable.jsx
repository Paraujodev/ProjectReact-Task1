import './style-mainTable.scss';
import { useEffect, useState } from 'react';
import Loading from '../../assets/loading.gif';

export default function MainTable() {
    const [users, setUsers] = useState([]);
    const [loadingTable, setLoadingTable] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://my.api.mockaroo.com/historico_compradores.json", {
            headers: {
                "X-API-Key": "420e6730"
            }
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Erro ao buscar dados");
                }
                return response.json();
            })

            .then((dataTable) => {
                const sortedData = dataTable.sort((a, b) => {
                    const [diaA, mesA, anoA] = a.data.split('/');
                    const [diaB, mesB, anoB] = b.data.split('/');

                    const dataA = new Date(anoA, mesA - 1, diaA);
                    const dataB = new Date(anoB, mesB - 1, diaB);

                    return dataB - dataA; 
                });

                setUsers(sortedData);
                setLoadingTable(false);
            })

            .catch((error) => {
                setError(error.message);
                setLoadingTable(false);
            });
    }, []);

    return (
        <div className='boxMainTable'>
            <h2>Histórico de compradores</h2>

            <div className='imgLoading'>
                {loadingTable && <img src={Loading} alt="Carregando..." />}
                {error && <p style={{ color: 'red' }}>Erro: {error}</p>}
            </div>

            {!loadingTable && !error && (
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
                                <tr>
                                    <td>{usuario.pedido}</td>
                                    <td>{usuario.data}</td>
                                    <td>{usuario.cliente}</td>
                                    <td>{usuario.localizacao}</td>
                                    <td>{usuario.valor}</td>
                                    <td>{usuario.situação}</td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
