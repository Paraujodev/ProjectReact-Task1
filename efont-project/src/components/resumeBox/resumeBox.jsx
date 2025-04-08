import './style-resumeBox.scss'

export default function Resumebox(){
    return (
        <div className='styleResumeBox'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <div className="resumeBox">
                            <p>Total de vendas</p>
                            <span>R$ 3.265,21</span>
                        </div>                      
                    </div>
                    <div className="col-md-3">
                        <div className="resumeBox">                            
                            <p>Total Liquido</p>
                            <span>R$ 2.825,58</span>
                        </div>                     
                    </div>
                    <div className="col-md-3">
                        <div className="resumeBox">                            
                            <p>Compras Canceladas</p>
                            <span>R$ 130,00</span>
                        </div>                      
                    </div>
                    <div className="col-md-3">
                        <div className="resumeBox">                            
                            <p>Reembolsos</p>
                            <span>R$ 345,00</span>
                        </div>
                    </div>                      
                </div>
            </div>
        </div>
    )
}