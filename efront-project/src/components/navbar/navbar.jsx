import './style-navbar.scss'
import React, { useState } from 'react';
import Logo from '../../assets/logo.svg';
import Transations from '../../assets/cart.svg';
import DashboardImage from '../../assets/grid.svg';
import Wallet from '../../assets/save.svg';
import Support from '../../assets/users.svg';
import Settings from '../../assets/settings.svg';
import Logof from '../../assets/power.svg';
import ArrowRight from '../../assets/arrow-right.svg';
import ArrowLeft from '../../assets/arrow-left.svg';


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSider = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={isOpen ? "open" : "close"}>
            <div className='imageLogo'>
                <a href="/"> <img src={Logo} alt="Logo do Site" />
                </a>
                <button className='toggle-btn' onClick={toggleSider}>
                    <img src={isOpen ? ArrowLeft : ArrowRight} alt={isOpen ? "Fechar menu" : "Abrir menu"}
                    />
                </button>
            </div>
            <ul>
                <li>
                    <a href="/"> <img src={DashboardImage} alt='logo dashboard' />
                        {isOpen && <span>Dashboard</span>}
                    </a>
                </li>
                <li>
                    <a href="/wallet"> <img src={Wallet} alt='logo carteira' />
                        {isOpen && <span>Carteira</span>}
                    </a>
                </li>
                <li>
                    <a href="/transactions"> <img src={Transations} alt='logo transações' />
                        {isOpen && <span>Transações</span>}
                    </a>
                </li>
                <li>
                    <a href="/support"> <img src={Support} alt='logo suporte' />
                        {isOpen && <span>Suporte</span>}
                    </a>
                </li>
                <div className="divider"></div>
                <li>
                    <a href="/settings"> <img src={Settings} alt='logo ajustes' />
                        {isOpen && <span>Ajustes</span>}
                    </a>
                </li>
                <div className='logofPage'>
                    <li>
                        <a href="/logof"> <img src={Logof} alt='logo desconectar' />
                            {isOpen && <span>Desconectar</span>}
                        </a>
                    </li>
                </div>

            </ul>
        </nav>
    );
};