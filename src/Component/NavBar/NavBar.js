import React, { useState } from 'react';
import './NavBar.css'
import { Link } from 'react-router-dom';

const NavBar=() =>{
    const[menu,setMenu]=useState("home");
    return(
        <div className='navbar'>
            <div className='navbar-logo'>
                <p>DEMO APP</p>
            </div>
            <div>
                <ul className='nav-menu'>
                <li onClick={() =>setMenu("home")}><Link to='/' style={{textDecoration:'none'}}>HOME</Link>{menu==='home'?<hr/>:<></>}</li>
                <li onClick={() =>setMenu("aboutus")}><Link to='/AboutUs' style={{textDecoration:'none'}}>ABOUT US</Link>{menu==='aboutus'?<hr/>:<></>}</li>
                <li onClick={() =>setMenu("jobs")}><Link  to='/Jobs'  style={{textDecoration:'none'}}>JOBS</Link>{menu==='jobs'?<hr/>:<></>}</li>
                <li onClick={() =>setMenu("clients")}><Link to='/Clients' style={{textDecoration:'none'}}>CLIENTS</Link>{menu==='clients'?<hr/>:<></>}</li>
                <li onClick={() =>setMenu("registerform")}><Link to='/RegistrationForm' style={{textDecoration:'none'}}>REGISTER</Link>{menu==='registerform'?<hr/>:<></>}</li>
                <li onClick={() =>setMenu("contact")}><Link to='/Contact' style={{textDecoration:'none'}}>CONTACT US</Link>{menu==='contact'?<hr/>:<></>}</li>
                </ul>
            </div>
            <button onClick={() =>setMenu("login")}><Link to='/Login'>Login</Link>{menu==='login'?<hr/>:<></>}</button>
        </div>
    )
}

export default NavBar;