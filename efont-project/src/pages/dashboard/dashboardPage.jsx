import './style-dashboard.scss';
import Navbar from '../../components/navbar/navbar.jsx';
import Graphic from '../../components/graphic/graphic.jsx';
import TransactionsHistory from '../../components/transactionsHistory/transactionsHistory.jsx';
import Header from '../../components/header/header.jsx';
import MainTable from '../../components/mainTable/mainTable.jsx';
import Resumebox from '../../components/resumeBox/resumeBox.jsx';



export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="navBar">
        <Navbar />
      </div>
      <div className="mycontent">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <Header />
            </div>
          </div>
        </div>
        <div className='overflow'>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <Graphic />
              </div>
              <div className="col-md-6">
                <TransactionsHistory />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <Resumebox/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <MainTable/> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
