import { ADD_TRANSACTION,DELETE_TRANSACTION,CALCULATE_EXPENSE, CALCULATE_INCOME, CALCULATE_BALANCE, CLOSE_FORM, SHOW_FORM } from "./types";

export const AppReducer = (state,action) => {
    switch (action.type) {
        case ADD_TRANSACTION:
        return{
          
            ...state, transactions:[...state.transactions,action.payload]
            //  balance: state.transactions.reduce( (acc, transaction) => (acc += transaction.amount) ,0)
        }
        case DELETE_TRANSACTION:
            return {
                ...state, transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
       case CALCULATE_BALANCE:
           return {
             ...state, balance : action.payload//reduce((acc,amount)=> amount += acc)
           }   
       case CALCULATE_INCOME:
            return {
             ...state, income: action.payload.reduce( (acc, amount) => amount += acc ,0)
            }
            
        case CALCULATE_EXPENSE:
        
            return {
              ...state, expense: action.payload.reduce( (acc, amount) => amount += acc ,0)
            }

        case SHOW_FORM:
            return { ...state, form: true  }  

        case CLOSE_FORM:
            return { ...state, form: false }            
    
        default:
         return  state;
    }

}
export default AppReducer
