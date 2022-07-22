import React from 'react';
import AccountSummary from './AccountSummary';


 const Balance = () => {

  return (
    <div className='Balance-container'>  
     <div className='balance'>
        <h3>Balance</h3>
        <h1>$ 123</h1>
       
   </div>
   
   <AccountSummary  />
   </div>

   )
}

export default Balance;