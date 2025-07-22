import './style-resumeBox.scss'
// import React from 'react';
// import ReactDOM from 'react-dom/client';

export default function Resumebox(props) {
    return (
        <div className='styleResumeBox'>
            <div className="resumeBox">
                <h3>{props.name}</h3>
                <span>{props.value}</span>
                <div>
                    <img src={props.src} alt={props.alt} />
                    <span>Teste de impressão</span>
                </div>
            </div>
        </div>
    )
}