    import React from 'react';
    import food from '../assets/food.svg'

 const TransactionHistory = () =>{
  
    return(
     <div>  
    <ul className='history'>

      <div className='transaction-heading'> 
        <h5>Transactions</h5> <small>view all</small>
     </div>  
        <li>
           <button>X</button>
           <img style={{width:40,padding:0,marginRight:'5px'}} src={food} />
          cold drink
         <div style={{textAlign: 'center',marginLeft:'9rem'}}>
        <small style={{display: 'block' }}>
           $ 123
        </small>
           <small>
              today
        </small>
   </div>
   </li>
   <li>
           <button>X</button>
           <img style={{width:40,padding:0,marginRight:'5px'}} src={food} />
          cold drink
         <div style={{textAlign: 'center',marginLeft:'9rem'}}>
        <small style={{display: 'block' }}>
           $ 123
        </small>
           <small>
              today
        </small>
   </div>
   </li>
   <li>
           <button>X</button>
           <img style={{width:40,padding:0,marginRight:'5px'}} src={food} />
          cold drink
         <div style={{textAlign: 'center',marginLeft:'9rem'}}>
        <small style={{display: 'block' }}>
           $ 123
        </small>x
           <small>
              today
        </small>
   </div>
   </li>
       
        

   </ul>
   </div> 
    )
}

export default TransactionHistory;