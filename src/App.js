import React,{useState} from 'react'
import './App.css';
import  Header  from './components/Header';
import  Balance from './components/Balance';
import  TransactionHistory  from './components/TransactionHistory';
import AddTransaction from './components/AddTransaction';
import Navbar from './components/Navbar';
import AppState from './context/AppState';

 const App = () => {

  const [form, setForm] = useState(false);
 
       
   const showForm =  close => {
    console.log(close)
     
    if(close){
    setForm(false)
     // console.log('if form true',form)
    }
     else{
       setForm(true)
     // console.log('if form false',form)
     }   
   }
   {
     
     

   }
  return (
    <AppState>
    <div>
    <div className="container">
      <Header />
      <Balance /> 
      <TransactionHistory />
      <AddTransaction  form={form}/>
      <Navbar showForm={showForm}/>
    </div>
    </div>
    </AppState>
  );
}

export default App;
