import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools }  from 'redux-devtools-extension'
import {flowerListReducer, flowerDetailsReducer} from './reducers/flowerReducers'
import {fruitListReducer, fruitDetailsReducer} from './reducers/fruitReducers'
import {vegetableListReducer, vegetableDetailsReducer} from './reducers/vegetableReducers'

import {cartReducer} from './reducers/cartReducers'
import {userDetailsReducer, userUpdateProfileReducer, userLoginReducer, userRegisterReducer} from './reducers/userReducers'

const reducer= combineReducers({
    flowerList: flowerListReducer,
    flowerDetails: flowerDetailsReducer,
    fruitList: fruitListReducer,
    fruitDetails: fruitDetailsReducer, 
    vegetableList: vegetableListReducer,
    vegetableDetails: vegetableDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer
})
const cartItemsFromStorage=localStorage.getItem('cartItems') ? JSON.parse(
    localStorage.getItem('cartItems')
) : []

const userInfoFromStorage=localStorage.getItem('userInfo') ? JSON.parse(
    localStorage.getItem('userInfo')
) : []
const initialState={
    cart: {cartItems:cartItemsFromStorage},
    userLogin: {userInfo:userInfoFromStorage}
}
const middleware=[thunk]

const store= createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store
