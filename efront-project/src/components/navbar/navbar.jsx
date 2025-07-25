import './style-navbar.scss'
import React, {} from 'react';
import Logo from '../../assets/logo.svg';
import Transations from '../../assets/cart.svg';
import DashboardImage from '../../assets/grid.svg';
import Wallet from '../../assets/save.svg';
import Support from '../../assets/users.svg';
import Settings from '../../assets/settings.svg';
import Logof from '../../assets/power.svg';
import Arrow from '../../assets/arrow.svg';
import ArrowLeft from '../../assets/arrow-left.svg';
import LogoMini from '../../assets/logo_e.png';


export default function Navbar({ isOpen, setIsOpen }) {
    const toggleSider = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={isOpen ? "open" : "close"}>
            <div className='imageLogo'>
                <a href="/"> <img className='imageLogoE' src={isOpen ? Logo : LogoMini} alt="Logo" />
                </a>
                <button className={`toggle-btn ${isOpen ? 'rotated' : ''}`} onClick={toggleSider}>
                    <img src={Arrow} alt="Toggle menu" />
                </button>
            </div>
            <ul>
                <li>
                    <a href="/"> <img src={DashboardImage} alt='logo dashboard' />
                        <span>Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="/wallet"> <img src={Wallet} alt='logo carteira' />
                        <span>Carteira</span>
                    </a>
                </li>
                <li>
                    <a href="/transactions"> <img src={Transations} alt='logo transações' />
                        <span>Transações</span>
                    </a>
                </li>
                <li>
                    <a href="/support"> <img src={Support} alt='logo suporte' />
                        <span>Suporte</span>
                    </a>
                </li>
                <div className="divider"></div>
                <li>
                    <a href="/settings"> <img src={Settings} alt='logo ajustes' />
                        <span>Ajustes</span>
                    </a>
                </li>
                <div className='logofPage'>
                    <li>
                        <a href="/logof"> <img src={Logof} alt='logo desconectar' />
                            <span>Desconectar</span>
                        </a>
                    </li>
                </div>

            </ul>
        </nav>
    );
};