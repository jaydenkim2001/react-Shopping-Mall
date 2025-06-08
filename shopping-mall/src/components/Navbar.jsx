import React from 'react';
import logo from '../assets/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';

const Navbar = () => {
  const menuList = ['Women', 'Men', 'Kids', 'Sales', 'Home'];
  
  const navigateLogin = useNavigate();
  const goToLogin = () => {
    navigateLogin("/login");
  }

  return (
    <div>
        <div>
            <div className='login-button' onClick={goToLogin}>
                <FontAwesomeIcon icon={faUser} />
                <div>Login</div>
            </div>
        </div>

        <div className='logo-section'>
            <img width={150} src={logo} alt="Logo"/>
        </div>

        <div className='menu-area'>
            <div className='menu-center'>
                <ul className='menu-list'>
                {menuList.map(menu => (
                    <li>{menu}</li>
                    ))}
                </ul>
            </div>
            <div className='search-box'>
                <FontAwesomeIcon icon={faSearch} />
                <input type='text'/>
            </div>
        </div>
    </div>
  )
}

export default Navbar