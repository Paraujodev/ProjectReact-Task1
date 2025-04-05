import React from 'react';
import './style-graphicTransaction.scss'

export default function GraphicTransactions () {
    return (
      <div className='spaceGraphicTransactions'>
        <div className='title'>
          <span>Histórico de Transações</span>
        </div>
        <div className='dataTrasactions'>
          <div className='transactionsInform'>
            <span>Ontem</span>
            <span>R$ -540,32</span>
          </div>
          <div className='transactionsInform'>
            <span>Quinta-feira</span>
            <span>R$ -273,90</span>
          </div>
          <div className='transactionsInform'>
            <span>Segunda-feira</span>
            <span>R$ -1.456,20</span>
          </div>
        </div>
      </div>  
    )
};