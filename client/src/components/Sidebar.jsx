import React, { useState } from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import SideBarData from './SideBarData'
import { Link } from 'react-router-dom'
import {IconContext} from "react-icons"
import "./sidebar.css"; 


const Sidebar = () => {

  const [sidebar, setSidebar] = useState(false); 
  
  const showSideBar = () => setSidebar(!sidebar); 
  return (
    <>
      <IconContext.Provider value={{color: "undefined"}}>
        <div className="navbar">
            <Link to="#" className='menu-bars'> 
              <FaIcons.FaBars onClick={showSideBar} />
            </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}> 
          <ul className='nav-menu-items' onClick={showSideBar}>
              <li className='navbar-toggle'> 
                <Link> 
                  <AiIcons.AiOutlineArrowLeft /> 
                </Link>
              </li>
              {SideBarData.map((item, index) => {
                return(
                  <li key={index} className={item.cName}> 
                    <Link to={item.path}>
                      {item.icons}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                )
              })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  )
}

export default Sidebar