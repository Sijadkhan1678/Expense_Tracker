  import React,{useContext} from 'react'; 
  import appContext from '../context/AppContext'
  import TransactionsItem from './TransactionItem';
 

    const TransactionHistory = () =>{
  
     const {transactions} = useContext(appContext)

      //  if(!transactions) return <p>there are no transactin</p>
     return(
     <div>  
    <ul className='history'>

      <div className='transaction-heading'> 
        <h5>Transactions</h5> <small>view all</small>
     </div>  
      {
       transactions &&  transactions.map((transaction) => <TransactionsItem key={transaction.id} transaction={transaction} />)
      }     

   </ul>
   </div> 
    )
}

export default TransactionHistory;