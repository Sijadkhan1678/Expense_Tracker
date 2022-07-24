    import React     from 'react';

 const TransactionHistory = () =>{
  
    return(
        
    <ul className='history'>

      <div className='transaction-heading'> 
        <h4>Transactions</h4> <small>viewAll</small>
        </div>
        <li><button>X</button>cold drinks
         <div style={{textAlign: 'center'}}>
        <strong style={{display: 'block' }}>
           $ 123
        </strong>
           <small>
              today
          </small>
        
        </div>
        </li>


   </ul>
    )
}

export default TransactionHistory;