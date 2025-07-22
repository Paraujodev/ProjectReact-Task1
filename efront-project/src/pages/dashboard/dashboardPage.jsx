import React, { useState } from 'react';
import './style-dashboard.scss';
import Navbar from '../../components/navbar/navbar.jsx';
import Graphic from '../../components/graphic/graphic.jsx';
import TransactionsHistory from '../../components/transactionsHistory/transactionsHistory.jsx';
import Header from '../../components/header/header.jsx';
import MainTable from '../../components/mainTable/mainTable.jsx';
import ResumeboxOne from '../../components/resumeBox/resumeBox.jsx';



export default function Dashboard() {
  const [isMenuOpen, setMenuOpen] = useState(true);

  return (
    <div className="dashboard">
      <div className="navBar">
        <Navbar isOpen={isMenuOpen} setIsOpen={setMenuOpen} />
      </div>
      <div className={`mycontent ${isMenuOpen ? 'menu-open' : 'menu-closed'}`}>
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
              <div className="col-lg-3">
                <ResumeboxOne/>
              </div>
              <div className="col-lg-3">
                <ResumeboxOne/>
              </div>
              <div className="col-lg-3">
                <ResumeboxOne/>
              </div>
              <div className="col-lg-3">
                <ResumeboxOne/>
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
