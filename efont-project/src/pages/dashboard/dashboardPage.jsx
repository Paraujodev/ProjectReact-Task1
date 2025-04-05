import './style-dashboard.scss';
import Navbar from '../../components/navbar/navbar.jsx';
import Graphic from '../../components/graphic/graphic.jsx';
import GraphicTransactions from '../../components/graphicTrasactions/graphicTransactions.jsx';
import Header from '../../components/header/header.jsx';




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
                      <Header />
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
