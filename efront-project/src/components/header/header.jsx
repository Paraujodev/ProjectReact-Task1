import React from 'react';
import './style-header.scss'
import Search from '../../assets/search.svg';
import Bell from '../../assets/bell.svg';
import ImageLogon from '../../assets/paulocode.png';

export default function Header () {
    return(
        <header className="headerSpace">
            <div className="headerSpaceStart">
                <h1>Olá, Paulo</h1>
                <p>Aqui estão algumas informações sobre suas vendas.</p>
            </div>
            <div className="headerSpaceEnd">
                <div className="icons">
                    <a href='#'><img src={Search} alt="Pesquisa" /></a>
                </div>
                <div className="icons">
                    <a href='#'><img src={Bell} alt="Lembrete" /></a>
                </div>
                <div className="dataLogin">
                    <img src={ImageLogon} alt="Imagem de login" />
                    <span>Paulo Araujo</span>
                </div>
            </div>
        </header>
    )
}