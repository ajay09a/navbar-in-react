import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <NavLink to="/" className={({isActive})=>isActive?"active":"not-active"}>
            <li>Home</li>
        </NavLink>
        <NavLink to="/about" className={({isActive})=>isActive?"active":"not-active"}>
            <li>About</li>
        </NavLink>
        <NavLink to="/contactus" className={({isActive})=>isActive?"active":"not-active"}>
            <li>ContactUs</li>
        </NavLink>
        <NavLink to="/item" className={({isActive})=>isActive?"active":"not-active"}>
            <li>Item</li>
        </NavLink>
    </div>
  )
}

export default Navbar