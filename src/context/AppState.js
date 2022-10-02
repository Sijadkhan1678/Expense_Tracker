import { type } from '@testing-library/user-event/dist/type'
import React,{useReducer} from 'react'
import appContext from './AppContext'
import AppReducer from './AppReducer'

import Catagory from './Catagory'
import { ADD_TRANSACTION,CALCULATE_BALANCE,CALCULATE_EXPENSE,CALCULATE_INCOME,CLOSE_FORM,DELETE_TRANSACTION, SHOW_FORM } from './types'

export const AppState = ({children}) => {

const initialState = { 
    form: false,
    income: 0,
    expense: 0,
    balance: 0,
    transactions:[]
 }

 const [state,dispatch] = useReducer(AppReducer,initialState)
 const transactions = state.transactions.map( transaction => transaction.amount)
 console.log('expense',state.expense)
//  console.log('income',state.balance)

 // function generate id fo every transaction
 const generateId = () =>  (Math.random()*1000).toFixed(0)
 
 // function to add transaction
 const addTransaction = (transaction) => {
  
  let catagory = Catagory.filter( catagory => catagory.type === transaction.catagory)  
     transaction.img = catagory[0].image
     transaction.id = generateId()
  console.log('transactin object', transaction) 
 
      dispatch({
        type: ADD_TRANSACTION,
        payload: transaction
      }) 
     
      
 }
 
 // function to delete transaction from transaction history
 const deleteTransaction = id => {
    dispatch({
      type:DELETE_TRANSACTION,
      payload: id
    })
 }

// function calculate balance
const calculateBalance = () => { 
  const balance = transactions.reduce( (acc, amount) => amount += acc ,0)
  dispatch({type:CALCULATE_BALANCE,payload: balance})
   
 }
// function to calculate income
const calculateIncome = () => {
  
  console.log('transaction amou',transactions)
  const income = transactions.filter(amount => amount >= 0)
  console.log('income cal',income)

  dispatch({ type: CALCULATE_INCOME,  payload: income})
}

// function to calculate expenses 
const calculateExpenses = () => {
  const expenses = transactions.filter( amount => amount < 0);
 const amount= expenses.reduce( (accum, amount) => amount += accum ,0)
  console.log('expense',amount)
  dispatch({type: CALCULATE_EXPENSE, payload: expenses})
}
const showForm =  close => {

  if(close) { dispatch({type: CLOSE_FORM}) }

   else {dispatch({type: SHOW_FORM}) }  
    
 }



  return <appContext.Provider value={{
    form: state.form,
    transactions: state.transactions,
    balance: state.balance,
    income : state.income,
    expense: state.expense,
    addTransaction,
    deleteTransaction,
    calculateBalance,
    calculateIncome,
    calculateExpenses,
    showForm

  }}>  {children}
   </appContext.Provider>
}

export default AppState
