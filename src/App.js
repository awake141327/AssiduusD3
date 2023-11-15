import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import CheckingAcc from './components/CheckingAccount/CheckingAcc';
import Invoices from './components/Invoices/Invoices';
import Watchlist from './components/Watchlist/Watchlist';
import './App.css'
import CashFlow from './components/CashFlow/CashFlow';

function App() {
  return (
    <div className="appContainer">
      <div className="NAVBAR">
        <Navbar />
      </div>
      <div className="SIDEBAR__CHARTS">
        <div className="SIDEBAR">
          <Sidebar />
        </div>
        <div className="CHARTS">
          <CheckingAcc />
          <Invoices />
          <CashFlow />
          <Watchlist />
        </div>
      </div>
    </div>
  );
}

export default App;
