import './style-mainTable.scss'
import { useEffect, useRef, useState } from 'react';



export default function MainTable() {

    useEffect(() => {
        fetch("https://my.api.mockaroo.com/historico_compradores.json", {
            headers: {
                "X-API-Key": "undefined"
            }
        })//fechamento do fetch

            .then((response) => {
                if (!response.ok) {
                    throw new Error("Erro na requisição");
                }
                return response.json();
            })//fechamento do then

            .then((data) => {
                setDados(data);
                setLoading(false);
            })

            .catch((error) => {
                console.error("Erro ao buscar dados:", error);
                setLoading(true);
            });
    }, []);



    return (
        <div className='boxMainTable'>
            <h2>Histórico de compradores</h2>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Data</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Localização</th>
                            <th scope="col">Valor</th>
                            <th scope="col">Situação</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>#123456</td>
                            <td>02/08/2023</td>
                            <td>Roberto Santos</td>
                            <td>Rio Grande do Sul</td>
                            <td>R$ 15,00</td>
                            <td>Aprovado</td>
                        </tr>
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
        </div>
    )
}