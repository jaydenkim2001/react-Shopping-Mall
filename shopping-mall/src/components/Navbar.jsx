import React from 'react';
import logo from '../assets/Logo.png';
import './css/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Navbar = ( {authenticated, setAuthenticated} ) => {
  const menuList = ['Women', 'Men', 'Kids', 'Sales', 'Home'];
  
  //Mobile Version Menu
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(prev => !prev);

  const navigate = useNavigate();

  const handleAuthentication = () => {
    console.log("Clicked!", authenticated);
    if(authenticated === true){
      setAuthenticated(false);
      navigate("/");
    }
    else{
      setAuthenticated(false);
      navigate("/login");
    }
  }

  const goToHomePage = () => {
    navigate("/");
  }

  const search = (event) => {
    if(event.key === "Enter"){
        let keyword = event.target.value;
        navigate(`/?q=${keyword}`);
    }
  }

  return (
    <div>
        {/* <div>
            <div className='login-button' onClick={handleAuthentication}>
                <FontAwesomeIcon icon={faUser} />
                <div>{authenticated ? "Logout" : "Login"}</div>
            </div>
        </div>

        <div className="logo-section">
          <img width={150} src={logo} alt="Logo" />
          <div className="hamburger-icon" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} size="lg" />
          </div>
        </div> */}

        <div className="navbar-top">
          <div className="hamburger-icon" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} size="lg" />
          </div>

          <div className="login-button" onClick={handleAuthentication}>
            <FontAwesomeIcon icon={faUser} />
            <div>{authenticated ? "Logout" : "Login"}</div>
          </div>
        </div>
        
        <div className="logo-section" onClick={goToHomePage}>
            <img width={150} src={logo} alt="Logo" />
        </div>

        <div className='menu-area'>
            <div className={`menu-center ${menuOpen ? "show" : ""}`}>
              <ul className="menu-list">
                {menuList.map(menu => (
                  <li key={menu} onClick={() => {
                    setMenuOpen(false);
                    // navigate or filter as needed
                  }}>
                    {menu}
                  </li>  
                ))}
              </ul>
            </div>

            <div className='search-box'>
                <FontAwesomeIcon icon={faSearch} />
                <input type='text' onKeyPress={(event)=>search(event)}/>
            </div>
        </div>
    </div>
  )
}

export default Navbar