import React from 'react';
import '../styles/userprofile.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Header from '../components/Header'
import Footer from '../components/Footer'
import {Container} from 'react-bootstrap'

const UserProfileScreen = () => {
    return (
      <>
      <Header />
      <Container>
        <div className="box">
        <div className="row">
                     <div className="col-md-3" className='profile'>
                         <div>
                            <img className="image" src="images/girl.jpg" alt="image" />
                         </div>
                         <div className="text">
                             <h2>Olivia stark</h2>
                             <p>Front-end Developer</p>
                             <p><i className="fa fa-facebook-official info"></i>&nbsp;&nbsp;<i className="fa fa-twitter info"></i>&nbsp; <i className="fa fa-instagram info"></i></p>
                             <hr />
        
                             <p><Button type="button" className="btn btn-dark">Edit Profile</Button></p>
        
                         </div>
                     </div>
        
                     <div className="col-md-8" className='about'> 
                              <div className="aboutus">
                                <h2>ABOUT ME</h2>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta obcaecati itaque amet numquam odit sint officia, 
                                 veritatis doloremque est vitae illo aliquam, neque possimus, maiores harum aspernatur iure nesciunt aliquid?</p>
                                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsa earum sapiente dolorem veritatis? Distinctio hic maxime quo nostrum, 
                                    praesentium dolor architecto dolores quisquam quia id quis dolorem doloribus aut.</p>
        
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsa earum sapiente dolorem veritatis? Distinctio hic maxime quo nostrum, 
                                        praesentium dolor architecto dolores quisquam quia id quis dolorem doloribus aut.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsa earum sapiente dolorem veritatis? Distinctio hic maxime quo nostrum, 
                                            praesentium dolor architecto dolores quisquam quia id quis dolorem doloribus aut.</p>
                            </div>
                               <br />
                            <div className="skills" className="col-md-1">
                                             <div>
                                                <h4  className='skill-hob'>SKILLS/HOBBIES</h4>
                                             </div>
                                          
                                         <div className="prop">
                                           <span className='prop-list'>Html, Css and Js</span>
                                           <span  className='prop-list'>Java</span>
                                           <span  className='prop-list'>React Js</span>
                                           <span className='prop-list' >Django</span>
                                           <span className='prop-list' >Trekking</span>
                                           <span className='prop-list' >Cooking</span>
                                           <span className='prop-list' >Farming</span>
                                         </div>
                                           
                            </div>
                            
                     </div>
        
        </div>
        <br />
        <br />
        <hr />
        <br />
        <br />
        <br />
        <h3 className='h3-header'>PLANTS IN MY GARDEN!!</h3>
        
         <div className="wrapper">
          <div className="row" className="h3-row" >
              <div className="col-md-6 col-lg-3"> 
                <div className="card" className='h3-card' >
                    <img className="card-img-top" className='veg-img' src="images/tomato.jpg" alt="Card image cap" />
                    <div className="card-body">
                      <h5 className='h5-header' className="card-title">Tomato</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <Link   to='/' className="btn btn-dark" className="view-btn" >View Plant</Link>
                    </div>
                  </div>
              </div>
        
              <div className="col-md-6 col-lg-3">
                <div className="card" className='h3-card'>
                    <img className="card-img-top" className='veg-img' src="images/potato.jpg" alt="Card image cap" />
                    <div className="card-body">
                      <h5 className='h5-header'   className="card-title">Potato</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <Link to='/' className="btn btn-dark" className="view-btn" >View Plant</Link>
                    </div>
                  </div>
            </div>
        
            <div className="col-md-6 col-lg-3">
                <div className="card" className='h3-card'>
                    <img className="card-img-top" className='veg-img' src="images/cau.jpg" alt="Card image cap" />
                    <div className="card-body">
                      <h5 className='h5-header'  className="card-title">Cauliflower</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <Link to="/" className="btn btn-dark" className="view-btn" >View Plant</Link>
                    </div>
                  </div>
            </div>
        
            <div className="col-md-6 col-lg-3">
              <div className="card" className='h3-card'>
                  <img className="card-img-top" className='veg-img' src="images/straberry.jpg" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className='h5-header'  className="card-title">Straberry</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to='/' className="btn btn-dark" className="view-btn" >View Plant</Link>
                  </div>
                </div>
          </div>
        
          </div> 
        </div>
        
        
            
             </div>
             </Container>
<Footer />
</>
    )
}

export default UserProfileScreen
