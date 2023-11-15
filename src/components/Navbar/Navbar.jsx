import React from 'react'
import Logo from "../../assets/Logo.jpg"
import Profile from "../../assets/Profile.png"
import {IoIosNotifications} from 'react-icons/io'
import {RiArrowDownSFill} from 'react-icons/ri'
import {AiOutlineSearch} from 'react-icons/ai'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbar__logo_container">
            <img className="navbar__logo" src={Logo} width='200px'/>
            <button className="navbar__button" type="button" onClick={() => window.location.reload()}>Refresh Values</button>
        </div>
        <div className="navbar__profile_container">
          <div className="navbar__search_container">
            <AiOutlineSearch fontSize={"20px"} cursor={"pointer"}/>
            <input className="navbar__search" type="text" />
          </div>
            <IoIosNotifications fontSize={'30px'} cursor={"pointer"}/>
            <img className="navbar__profileImg" src={Profile} width="50px"/>
            <RiArrowDownSFill fontSize={'20px'} cursor={"pointer"}/>
        </div>
    </div>
  )
}

export default Navbar