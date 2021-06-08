// import React, {useState, useEffect} from 'react'
// import {Form, Button, Row, Col} from 'react-bootstrap'
// import {useDispatch, useSelector} from 'react-redux'
// import Message from '../components/Message'
// import Loader from '../components/Loader'
// import {getUserDetails, updateUserProfile} from '../actions/userActions'

// const ProfileScreen = ({location, history}) => {
//     const [name, setName] = useState('')
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const [confirmPassword, setConfirmPassword] = useState('')
//     const [message, setMessage] = useState(null)

//     const dispatch= useDispatch()

//     const userDetails = useSelector((state) => state.userDetails)
//     const {loading, error, user} = userDetails
    
//     const userLogin = useSelector((state) => state.userLogin)
//     const { userInfo} = userLogin
        
//     const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
//     const { success} = userLogin

// useEffect(() => {
//     if(!userInfo){
//         history.push('/login')
//     } else{
//         if(!user.name){
//             dispatch(getUserDetails('profile'))
//         } else{
//             setName(user.name)
//             setEmail(user.email)
//         }
//     }
// }, [dispatch, history, userInfo, user])


// const submitHandler =(e) =>{
//     e.preventDefault()
//     if (password !== confirmPassword){
//         setMessage('Password doesnot match')
//     } else{
// dispatch(updateUserProfile({id:user._id, name, email, password}))
// }
// }
//     return (
        
//          <Row>
//              <Col md={6}>
//              <h2>Edit your Profile</h2>
//              {message && <Message variant ='danger'>{message}</Message>}
//              {error && <Message variant ='danger'>{error}</Message>}
//              {success && <Message variant ='success'>Profile Updated</Message>}
             
//              {loading && <Loader />}
//              <Form onSubmit={submitHandler}>
//                  <Form.Group controlId='name'>
//                      <Form.Label>Name</Form.Label>
//                      <Form.Control type='name' placeholder='Enter name' value={name} onChange={(e) => setName(e.target.value)}></Form.Control>
//                  </Form.Group>
//                  <Form.Group controlId='email'>
//                      <Form.Label>Email Address</Form.Label>
//                      <Form.Control type='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
//                  </Form.Group>
//                  <Form.Group controlId='password'>
//                      <Form.Label>Password</Form.Label>
//                      <Form.Control type='password' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control>
//                  </Form.Group>
//                  <Form.Group controlId='confirmPassword'>
//                      <Form.Label>Confirm Password</Form.Label>
//                      <Form.Control type='password' placeholder='Renter password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></Form.Control>
//                  </Form.Group>
//                  <Button type='submit' variant='primary'>
//                      Update
//                  </Button>
//                  </Form>
//              </Col>
           
//          </Row>
//     )
// }
// export default ProfileScreen


import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {Container} from 'react-bootstrap'

const ProfileScreen = () => {
    return (
        <>
        <div>
            <Header />
            <Container>
    <div className="container-fluid p-0 text-center">
      <div className="col-sm-10 col-10 col-md-10 edit-profile">
        <div className="main-profile-info mb-4">
          <img
            src="./assets/309845-P85DWN-428.jpg"
            alt="Avatar"
            style={{marginLeft: 'auto', marginRight: 'auto'}}
            className="avatar mb-2"
          />
          <span class="user-name">bigbadwoof</span>
        </div>

        <form className="">
          <div className="form-group row">
            <label for="work" className="col-sm-2 col-form-label">Work</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="work"
                placeholder="Work"
              />
            </div>
          </div>

          <div className="form-group row">
            <label for="address" className="col-sm-2 col-form-label">Address</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="Address"
              />
            </div>
          </div>
          <div className="form-group row">
            <label for="hobbies" className="col-sm-2 col-form-label">Hobbies</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="hobbies"
                placeholder="Hobbies"
              />
            </div>
          </div>

          <div className="form-group row">
            <label for="bio" className="col-sm-2 col-form-label">Bio</label>
            <div className="col-sm-10">
              <textarea className="form-control" id="bio" rows="4"></textarea>
            </div>
          </div>

          <span className="add-social">Add Social Network Links</span>
          <div className="form-group row">
            <label for="facebook" className="col-sm-2 col-form-label">
            <i className="fab fa-facebook fa-2x"></i></label>
            <div class="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="facebook"
                placeholder="Facebook URL"
              />
            </div>
          </div>
          <div className="form-group row">
            <label for="twitter" className="col-sm-2 col-form-label">
            <i className="fab fa-twitter fa-2x"></i>
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="twitter"
                placeholder="Twitter URL"
              />
            </div>
          </div>
          <div className="form-group row">
            <label for="instagram" className="col-sm-2 col-form-label">
            <i className="fab fa-instagram fa-2x"></i></label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="instagram"
                placeholder="Instagram URL"
              />
            </div>
          </div>

          <button type="submit" className="btn btn-secondary btn-lag">
            Go Back
          </button>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
    </Container>

        </div>
<Footer />

        </>
    )
}

export default ProfileScreen

