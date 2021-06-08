import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

// import Message from "../components/Message";
// import Loader from "../components/Loader";
import { login } from "../actions/userActions";
import FormContainer from "../components/FormContainer";

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  // const { loading, error, userInfo } = userLogin;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  // useEffect(() => {
  //   if (userInfo) {
  //     history.push(redirect);
  //   }
  // }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <FormContainer>
      <h1>Sign In</h1>
      {/* {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />} */}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary">
          Sign in
        </Button>
      </Form>
      <Row className="py-3">
        <Col>
          New Customer?{" "}
          <Link to={redirect ? `/register?redirect=${redirect}` : `/register`}>
            Register
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default LoginScreen;




// import React, { Fragment, useState, useEffect } from "react";
// import {
//   GlobalStyles,
//   Head,
//   Text,
//   Span,
//   Link,
//   Input,
//   Form,
//   Container,
//   FormContainer,
//   SocialContainer,
//   Button,
//   OverlayContainer,
//   OverlayPanel,
//   Overlay
// } from "../styles/index.style.js";
// import {login} from "../actions/userActions"
// import {useDispatch, useSelector} from 'react-redux'

// function SignupScreen({location, history}) {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')

//   const dispatch = useDispatch()
//   const userLogin = useSelector(state => state.userLogin)
//   const {loading, error, userInfo} = userLogin

//   const redirect = location.search ? location.search.split('=')[1] : '/'

//   // useEffect(() => {
//   //   if (userInfo) {
//   //     history.push(redirect)
//   //   }
//   // }, [history, userInfo, redirect])

//   const submitHandler = (e) => {
//     e.preventDefault()
//     dispatch(login(email, password))
//     //DISPATCH LOGIN
//   }
//   const [panelActive, setPanelActive] = useState(false);
//   const onSignInEvent = () => {
//     setPanelActive(false);
//   };

//   const onSignUpEvent = () => {
//     setPanelActive(true);
//   };

//   return (
//     <Fragment>
//       <GlobalStyles />
//       <Container
//         id="container"
//         className={`${panelActive ? "right-panel-active" : ""}`}
//       >
//         <FormContainer className="sign-up-container">
//           <Form>
//             <Head>Create Account</Head>
//             <SocialContainer>
//               <Link href="#" className="social">
//                 <i className="fab fa-facebook-f"></i>
//               </Link>
//               <Link href="#" className="social">
//                 <i className="fab fa-google"></i>
//               </Link>
//             </SocialContainer>
//             <Span>or use your email for registration</Span>
//             <Input type="text" placeholder="Name" />
//             <Input type="email" placeholder="Email" required />
//             <Input type="password" placeholder="Password" />
//             {/* <Input type="password" placeholder="Conform Password" required /> */}
//             <Button type="submit">Sign Up</Button>
//           </Form>
//         </FormContainer>
//         <FormContainer className="sign-in-container">
//           <Form onSubmit={submitHandler}>
//             <Head>Sign In</Head>
//             <SocialContainer>
//               <Link href="#" className="social">
//                 <i className="fab fa-facebook-f"></i>
//               </Link>
//               <Link href="#" className="social">
//                 <i className="fab fa-google"></i>
//               </Link>
//             </SocialContainer>
//             <Span>or use your account</Span>
//             <Input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
//             <Input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
//             {/* <Link href="#">Forgot your password?</Link> */}
//             <Button type="submit">Sign In</Button>
//           </Form>
//         </FormContainer>
//         <OverlayContainer>
//           <Overlay>
//             <OverlayPanel className="overlay-left">
//               <Head>Welcome Back!</Head>
//               <Text>
//                 To keep connected with us please login with your personal info
//               </Text>
//               <Button className="ghost" id="signIn" onClick={onSignInEvent}>
//                 Sign In
//               </Button>
//             </OverlayPanel>
//             <OverlayPanel className="overlay-right">
//               <Head>Hello, there!</Head>
//               <Text>Enter your personal details and start planting</Text>
//               <Button className="ghost" id="signUp" onClick={onSignUpEvent}>
//                 Sign Up
//               </Button>
//             </OverlayPanel>
//           </Overlay>
//         </OverlayContainer>
//       </Container>
//     </Fragment>
//   );
// }

// export default SignupScreen;














// // import React from 'react'
// // import {Link} from 'react-router-dom'
// // import {Button, Form} from 'react-bootstrap'
// // import Header from '../components/Header'
// // import Footer from '../components/Footer'
// // import {Container} from 'react-bootstrap'


// // const SignupScreen = () => {
// // return(
// //     <>
// //     <Container>
// //     <br />
// //     <div className="signup-body">
// //        <div className="signup-container" id="container">
// //            <div className="signup-form-container sign-up-container">
// //                <Form action="dashboard.html">
// //                    <h1 className="signup-h1">Create Account</h1>
// //                    <div className="social-container">
// //                        <Link to='/' class="social"><i className="fab fa-facebook-f"></i></Link>
// //                        <Link to="http://localhost:5000/api/auth/google" className="social btn"><i className="fab fa-google"></i></Link>
                       
// //                    </div>
// //                    <span className="signup-span">or use your email </span>
// //                    <input type="text" placeholder="Name" />
// //                    <input type="email" placeholder="Email" required />
// //                    <input type="password" placeholder="Password" minlength="6" required />
// //                    <input type="password" placeholder="Confirm Password" required />

// //                    <Button class="signup-button" type="submit">Sign Up</Button>
// //                    {/* <!-- <input type="submit" value="Register" class="signup-button"> --> */}
// //                </Form>
// //          </div>
// //                 <div className="signup-form-container sign-in-container">
// //                     {/* <!-- alert --> */}
// //                     <div class="alert alert-danger">
// //                         Invalid Credentials
// //                     </div>
// //                     <Form action="#">
// //                         <h1 className="signup-h1">Sign in</h1>
// //                         <div className="social-container">
// //                         <Link to='/' className="social"><i className="fab fa-facebook-f"></i></Link>
// //                         <Link to='/' className="social"><i className="fab fa-google"></i></Link>
// //                         </div>
// //                         <span className="signup-span">or use your account</span>
// //                         {/* <!-- <input type="text" placeholder="Name"> --> */}
// //                         <input type="email" placeholder="Email" required />
// //                         <input type="password" placeholder="Password" required />

// //                         <Button class="signup-button" type="submit">Sign In</Button>
// //                    {/* <!-- <input type="submit" value="Register" class="signup-button"> --> */}


// //                     </Form>
// //                 </div>
// //             <div className="overlay-container">
// //                 <div className="overlay">
// //                         <div className="overlay-panel overlay-left">
// //                             <h1 className="signup-h1">Welcome Back!</h1>
// //                             <p className="signup-p">To keep connected with us please login with your personal info</p>
// //                             <button className="ghost signup-button" id="signIn">Sign In</button>
// //                         </div>
// //                         <div className="overlay-panel overlay-right">
// //                             <h1 className="signup-h1">Hello there!</h1>
// //                             <p className="signup-p">Enter your personal details and start planting</p>
// //                             <Button className="ghost signup-button" id="signUp">Sign Up</Button>
// //                         </div>
// //                 </div>
// //             </div>
// //         </div>
        
        
// //     </div>
// //     </Container>

// // </>
// // )
// // }
// // export default SignupScreen