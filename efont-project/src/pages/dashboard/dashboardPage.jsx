import './style-dashboard.scss';
import Navbar from '../../components/navbar.jsx';
import Graphic from '../../components/graphic.jsx';
import GraphicTransactions from '../../components/graphicTransactions.jsx';
import Search from '../../assets/search.svg';
import Bell from '../../assets/bell.svg';
import ImageLogon from '../../assets/paulocode.png';




export default function Dashboard() {
  return (

    <div className="contentDashboard">
      <div className="menuNavbar">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <Navbar />
            </div>
            <div className="col-md-9">
              <div className="mycontent">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <header className="headerSpace">
                        <div className="headerSpaceStart">
                          <h1>Olá, Paulo</h1>
                          <p>Aqui estão algumas informações sobre suas vendas.</p>
                        </div>
                        <div className="headerSpaceEnd">
                          <div className="icons">
                            <img src={Search} alt="Pesquisa" />
                          </div>
                          <div className="icons">
                            <img src={Bell} alt="Lembrete" />
                          </div>
                          <div className="dataLogin">
                            <img src={ImageLogon} alt="Imagem de login" />
                            <span>Paulo Araujo</span>
                          </div>
                        </div>
                      </header>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="classGraphic">
                        <div className="graphicOne">
                          <Graphic />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="classGraphic">
                        <div className="tableOne">
                          <GraphicTransactions />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
