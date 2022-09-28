import React,{useReducer} from 'react'
import appContext from './AppContext'
import AppReducer from './AppReducer'

export const AppState = ({children}) => {

const initialState = {  }

 const [state,dispatch] = useReducer(AppReducer,initialState)

  return <appContext.Provider value={{

  }}>  {children}
   </appContext.Provider>
}

export default AppState
