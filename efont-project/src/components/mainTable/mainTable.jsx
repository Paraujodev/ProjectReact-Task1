import './style-mainTable.scss'


export default function MainTable(){
    return (
        <div className='boxMainTable'>
            <div className='titleMyTable'>
                <span>
                    Histórico de Compradores
                </span>
            </div>
            <div className="myMainTable">
                <table class="table">
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