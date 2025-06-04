import React from 'react';
import './style-transactionsHistory.scss'

export default function transactionsHistory() {
    return (
      <div className='spaceGraphicTransactions'>
        <h2>Histórico de transações</h2>
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