import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";

import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <header>
      <nav className='navbar navbar-expand-lg'>
        <div className='container'>
          <Link className='navbar-brand' to='/' style={{ color: 'white' }}>
            IvyEarth
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <i className='fas fa-align-right text-light'></i>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <div className='mr-auto'></div>
            <ul className='navbar-nav'>
              {/* <form className='form-inline md-form form-sm mt-0 mr-5'>
                <input
                  className='form-control form-control-sm w-75'
                  type='text'
                  placeholder='Search'
                  aria-label='Search'
                />
                <button>
                  <i
                    className='fas fa-search ml-3'
                    aria-hidden='true'
                    style={{ color: 'white' }}
                  ></i>
                </button>
              </form> */}
              <li className='nav-item'>
                <Link className='nav-link' to='/home'>
                  Home{' '}
                </Link>
              </li>

              <li className='nav-item dropdown'>
                <div className='dropdown'>
                  <Link to='#' className='nav-link'>
                    Plants
                  </Link>
                  <div className='dropdown-content'>
                    <Link to='/flower'>Flowers</Link>
                    <Link to='/fruit'>Fruits</Link>
                    <Link to='/vegetable'>Vegetables</Link>
                  </div>
                </div>
              </li>
            
              <li className='nav-item'>
                <Link className='nav-link' to='/about'>
                  About
                </Link>
              </li>
              {userInfo ? (
 <NavDropdown title={userInfo.name} id='username'>
   <LinkContainer to='/userprofile'>
     <NavDropdown.Item> Your Profile</NavDropdown.Item>
   </LinkContainer>
   <LinkContainer to='/profile'>
     <NavDropdown.Item> Edit Profile</NavDropdown.Item>
   </LinkContainer>
   <NavDropdown.Item onClick={LogoutHandler}>Logout</NavDropdown.Item>
 </NavDropdown>
) :
 <LinkContainer to='/login'>
     <Nav.Link><i className="fas fa-user "></i>Sign In</Nav.Link>
     </LinkContainer>}
              {/* <li className='nav-item dropdown'>
                
                <div className='dropdown'> */}
                  {/* <Link to='#' className='nav-link'>
                    Profile
                  </Link> */}
                  {/* <NavDropdown title={userInfo.name} id='username'>
                  <div className='dropdown-content'>
                    <Link to='/userProfile'>Your Profile</Link>
                    <Link to='/profile'>Edit Profile</Link>
                    <Link to='/login'>Log Out</Link>
                  </div>
                  </NavDropdown>
                </div>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
