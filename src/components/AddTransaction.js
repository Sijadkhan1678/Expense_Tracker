import React,{useState} from "react";

 const AddTransaction = ({form}) =>{

    const [transaction,setTransaction] = useState({
        amount: '',
        title: ''
    })
    console.log('transaction',transaction)
    const handleChange = (e) =>{
        setTransaction({...transaction,[e.target.name]: e.target.value})
   
    }
    const {amount,title} = transaction
    const onSubmit = (e) =>{
      e.preventDefault();
      if(amount === null || title === null){
        const error =  title === null ? 'please add' : 'please add amount';

      } 
      else{
          
      }
    }

    // console.log('here transation value is null',amount)
    return (

        <form onSubmit={onSubmit} className={`form ${form !==true ? '': 'showform'}` }>
            
        <div className="form-control">
            <label htmlFor='amount'> Amount</label>
            <input  type='Number' onChange={handleChange} id='amount' name='amount' placeholder="Transaction Amount"/>
            </div>
            <div className="form-control">
            <label htmlFor='title'>Title</label>
            <input type='text' id='title' onClick={handleChange} placeholder="Transaction Title"/>

         </div>
         <button>Transaction</button>
        </form>
        
    
    )
}
export default AddTransaction;