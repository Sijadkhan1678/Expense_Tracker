import React,{useContext} from "react";
import appContext from "../context/AppContext";

const TransactionsItem = ({transaction:{id,title,amount,img}}) => {
   console.log('title length',title.length)

const {deleteTransaction} = useContext(appContext)
 return (
    <li>
    <button onClick={()=> deleteTransaction(id)}>X</button>
    <img style={{width:36,padding:0,marginRight:'5px'}} src={img} />
     {title}
  <div style={{textAlign: 'center',display:'inline',marginLeft:title.length >6 ? '11rem' : '12.2rem'}}>
 <small style={{display: 'block' }}>
    $ {amount}
 </small>
    <small>
       today
 </small>
</div>
</li>

 )
}
export default TransactionsItem