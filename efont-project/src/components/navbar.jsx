import React from 'react';
import Logo from '../assets/logo.svg';
import Transations from '../assets/cart.svg';
import Dashboard from '../assets/grid.svg';
import Wallet from '../assets/save.svg';
import Support from '../assets/users.svg';
import Settings from '../assets/settings.svg';
import Logof from '../assets/power.svg';



export default function Navbar(){
    return (
        <nav className="navBar">
           <a href= "/"> <img className='imageLogo' src= {Logo} alt="Logo do Site" /></a> 
            <ul className='ulNavbar'>
                <li>
                    <a href="/"> <img src= {Dashboard} alt='logo dashboard'/>Dashboard</a>
                </li>
                <li>
                    <a href="/wallet"> <img src= {Wallet} alt='logo carteira'/> Carteira</a>
                </li>
                <li>
                    <a href="/transactions"> <img src= {Transations} alt='logo transações'/>Transações</a>
                </li>
                <li>
                    <a href="/support"> <img src= {Support} alt='logo suporte'/>Suporte</a>
                </li>
                <li>
                    <a href="/settings"> <img src= {Settings} alt='logo ajustes'/>Ajustes</a>
                </li>
                <li>
                    <a href="/logof"> <img src= {Logof} alt='logo desconectar'/>Desconectar</a>
                </li>
            </ul>
        </nav>
    );
};