import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import {Container} from'react-bootstrap'
import HomeScreen from "./screens/HomeScreen"
import LandingScreen from "./screens/LandingScreen"
import CartScreen from './screens/CartScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import LoginScreen from './screens/LoginScreen'
import AboutScreen from './screens/AboutScreen'
import UserProfileScreen from './screens/UserProfileScreen'
import FlowerScreen from './screens/FlowerScreen'
import FlowerDetailScreen from './screens/FlowerDetailScreen'
import FruitScreen from './screens/FruitScreen'
import FruitDetailScreen from './screens/FruitDetailScreen'
import VegetableDetailScreen from './screens/VegetableDetailScreen'
import VegetableScreen from './screens/VegetableScreen'


const App =({children}) => {

  
  // render() 
  //   if (window.location.pathname === '/signupScreen') 
  // return null;
  // return <Header />

    return (
      <Router>
      {children}

    {/* <main className="py-3"> */}
   

<Route path='/' component={LandingScreen} exact />

<Route path='/home' component={HomeScreen} exact />
<Route path='/register' component={RegisterScreen} />
<Route path='/login' component={LoginScreen} />
<Route path='/about' component={AboutScreen} />

<Route path='/profile' component={ProfileScreen} />
<Route path='/userProfile' component={UserProfileScreen} />
<Route path='/cart/:id?' component={CartScreen} />

<Route path='/flower/:id' component={FlowerDetailScreen} />
<Route path='/fruit/:id' component={FruitDetailScreen} />
<Route path='/vegetable/:id' component={VegetableDetailScreen} />

<Route path='/vegetable' component={VegetableScreen} exact/>
<Route path='/flower' component={FlowerScreen} exact/>
<Route path='/fruit' component={FruitScreen} exact/>

{/* // </main> */}
    </Router>

    
  );
}

export default App;
