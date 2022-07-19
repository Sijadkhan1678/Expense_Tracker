import React from 'react'
import './App.css';
import  Header  from './components/Header';
import  Balance from './components/Balance';
import  AccountSummary  from './components/AccountSummary.js';
import  TransactionHistory  from './components/TransactionHistory';
import AddTransaction from './components/AddTransaction';

 const App = () => {
  return (
    <div>
    <div className="container">
      <Header />
      <Balance /> 
      <AccountSummary />
      <TransactionHistory />
      <AddTransaction />
    </div>
    </div>
  );
}

export default App;
