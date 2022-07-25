import React from "react";
import home from '../assets/home.png'
import plus from '../assets/plus.png'
const Navbar = () =>{
    return(
      <nav>
        <ul className="nav showform">
          <li><img src={home} alt='home'/></li>
          <li><img src={plus} alt='plus'/></li>
          {/* <li><img src={home}/></li> */}
          
          
        </ul>
      </nav>

    )
}
export default Navbar