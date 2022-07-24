import React from "react";

 const AddTransaction = () =>{
    return (
    <div>
        <form >
            
        <div className="form-control">
            <label htmlFor='amount'> Amount</label>
            <input  type='text' id='amount' placeholder="Transaction Amount"/>
            </div>
            <div className="form-control">
            <label htmlFor='title'>Title</label>
            <input type='text' id='title' placeholder="Transaction Title"/>

         </div>
         <button>Transaction</button>
        </form>
        
    </div>
    )
}
export default AddTransaction;