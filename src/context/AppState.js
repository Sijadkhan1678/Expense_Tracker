import React,{useReducer} from 'react'
import appContext from './AppContext'
import AppReducer from './AppReducer'
import Catatgory from './Catagory'

export const AppState = ({children}) => {

const initialState = {  }
  //Catatgory
 const [state,dispatch] = useReducer(AppReducer,initialState)

  return <appContext.Provider value={{

  }}>  {children}
   </appContext.Provider>
}

export default AppState
