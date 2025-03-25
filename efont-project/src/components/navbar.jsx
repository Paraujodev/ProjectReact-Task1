import './style-navbar.scss'
import React from 'react';
import Logo from '../assets/logo.svg';
import Transations from '../assets/cart.svg';
import DashboardImage from '../assets/grid.svg';
import Wallet from '../assets/save.svg';
import Support from '../assets/users.svg';
import Settings from '../assets/settings.svg';
import Logof from '../assets/power.svg';


export default function Navbar(){
    return (
        <nav className="navBar">
        <div><a href= "/"> <img className='imageLogo' src= {Logo} alt="Logo do Site" /></a></div>
         <div>
             <ul className='ulNavbar'>
                 <li>
                     <a href ="/"> <img src= {DashboardImage} alt='logo dashboard'/>
                         <span>Dashboard</span>
                     </a>
                 </li>
                 <li>
                     <a href = "/wallet"> <img src= {Wallet} alt='logo carteira'/>
                         <span>Carteira</span>
                     </a>
                 </li>
                 <li>
                     <a href='' to ="/transactions"> <img src= {Transations} alt='logo transações'/>
                         <span>Transações</span>
                     </a>
                 </li>
                 <li>
                     <a href ="/support"> <img src= {Support} alt='logo suporte'/>
                         <span>Suporte</span>
                     </a>
                 </li>
                 <li>
                     <a href ="/settings"> <img src= {Settings} alt='logo ajustes'/>
                         <span>Ajustes</span>
                     </a>
                 </li>
                 <li>
                     <a href ="/logof"> <img src= {Logof} alt='logo desconectar'/>
                         <span>Desconectar</span>
                     </a>
                 </li>
             </ul>
         </div>
     </nav>   
    );
};