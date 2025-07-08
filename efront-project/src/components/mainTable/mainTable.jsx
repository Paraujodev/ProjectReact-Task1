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
                setUsers(dataTable);
                setLoadingTable(false);
                //console.log(dataTable);
            })
            .catch((error) => {
                console.error("Erro ao buscar dados:", error);
                setError(error.message);
                setLoadingTable(false);
            });
    }, []);

    return (
        <div className='boxMainTable'>
            <h2>Histórico de compradores</h2>

            {loadingTable && <img src={Loading} alt="Carregando..." />}
            {error && <p style={{ color: 'red' }}>Erro: {error}</p>}

            {!loadingTable && !error && (
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Data</th>
                                <th>Nome</th>
                                <th>Localização</th>
                                <th>Valor</th>
                                <th>Situação</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.slice(0,10).map((usuario) => (
                                <tr key={usuario.id}>
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
