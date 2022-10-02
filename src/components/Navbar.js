import React,{useContext} from "react";
import home from '../assets/home.png';
import plus from '../assets/add.svg';
import appContext from "../context/AppContext";

const Navbar = () =>{
  const {showForm,form} = useContext(appContext)
  console.log('form value', form)
  
    return(
      <nav>
        <ul  className="nav showform">
          <li><img onClick={()=>showForm(true)} src={home} alt='home'/></li>

          <li onClick={() =>showForm(false)} id="plus"><img src={plus} alt='plus'/></li>

          <li><img onClick={()=> showForm(true)} src={home}/></li>
          
          
        </ul>
      </nav>

    )
}
export default Navbar