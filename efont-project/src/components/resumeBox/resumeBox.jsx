import './style-resumeBox.scss'

export default function Resumebox(){
    return (
        <div className='styleResumeBox'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <div className="resumeBox">
                            <h3>Total de vendas</h3>
                            <span>R$ 3.265,21</span>
                        </div>                      
                    </div>
                    <div className="col-md-3">
                        <div className="resumeBox">                            
                            <h3>Total líquido</h3>
                            <span>R$ 2.825,58</span>
                        </div>                     
                    </div>
                    <div className="col-md-3">
                        <div className="resumeBox">                            
                            <h3>Compras canceladas</h3>
                            <span>R$ 130,00</span>
                        </div>                      
                    </div>
                    <div className="col-md-3">
                        <div className="resumeBox">                            
                            <h3>Reembolsos</h3>
                            <span>R$ 345,00</span>
                        </div>
                    </div>                      
                </div>
            </div>
        </div>
    )
}