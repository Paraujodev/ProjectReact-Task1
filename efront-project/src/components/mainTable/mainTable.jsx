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
                            {users.map((usuario) => (
                                <tr key={usuario.id}>
                                    <td>{usuario.id}</td>
                                    <td>{usuario.date}</td>
                                    <td>{usuario.name}</td>
                                    <td>{usuario.state}</td>
                                    <td>{usuario.value}</td>
                                    <td>{usuario.status}</td>
                                </tr>
                            ))}
                            <tr>
                                <td>#67890</td>
                                <td>03/08/2023</td>
                                <td>Beatriz Rodrigues</td>
                                <td>Salvador</td>
                                <td>R$ 15,00</td>
                                <td>Em análise</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
