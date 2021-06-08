import React from "react"
import {Link} from 'react-router-dom'
// import '../index.css'

const LandingScreen = () => {
return (
    <>
    <nav className='navbar navbar-expand-lg'>
        <div className='container'>
          <Link className='navbar-brand' to='/' style={{ color: 'white' }}>
            IvyEarth
          </Link>
        
          <div className='collapse navbar-collapse' id='navbarNav'>
            <div className='mr-auto'></div>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link className='nav-link' to='/about'>
                  About{' '}
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/login'>
                  Sign Up{' '}
                </Link>
              </li>
              </ul>
              </div>
              </div>
              </nav>
<div className="landing-image" style={{backgroundImage: 'url(images/earth.jpg)', maxWidth:'100%', backgroundSize:'cover'}}>
<div className='dark-overlay'>
  <div className="landing-text">
    <h1 style={{fontSize:'50px', fontWeight:'bold'}}>Plants are Awesome</h1>
    <h5>Grow beautiful plants in your home</h5>
    <Link to ='/home'>
    <button className='landing-button'><span>GET STARTED</span></button>
    </Link>
  </div>
  </div>
</div>

{/* <div className="landing" style={{backgroundImage: 'url(images/earth.jpg)', backgroundRepeat:'no-repeat', maxWidth:'100%', backgroundSize:'cover'}} >
        
      <div className="dark-overlay">
        <div className="caption text-center" >
        <br /> <br />
          <h1 style={{color:'white'}}>Plants are awesome</h1>
          <h3 style={{color:'white'}}>Grow beautiful plants in your home</h3>
          <br />
       
          <Link to='/home'>
            <button type='submit'>Get Started</button>
          </Link>
        </div>
      </div>
      
</div> */}

         
</>
)
}

export default LandingScreen