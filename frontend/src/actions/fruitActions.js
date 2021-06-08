
import {FRUIT_LIST_REQUEST, FRUIT_LIST_SUCCESS, FRUIT_LIST_FAIL} from "../constants/fruitConstants"
import {FRUIT_DETAILS_REQUEST, FRUIT_DETAILS_SUCCESS, FRUIT_DETAILS_FAIL} from "../constants/fruitConstants"
import axios from 'axios'

export const listFruits = () => async (dispatch) =>{
    try{
        dispatch ({ type:FRUIT_LIST_REQUEST})
        const {data} = await axios.get('/api/fruit')
        dispatch({ type:FRUIT_LIST_SUCCESS, payload: data})
        console.log(data)
    } catch(error){
        dispatch({
            type: FRUIT_LIST_FAIL, 
            payload: error.response && error.response.data.message 
                ? error.response.data.message 
                : error.message})
    }

}
export const listFruitDetails = (id) => async (dispatch) =>{
    try{
        dispatch ({ type:FRUIT_DETAILS_REQUEST})
        const {data} = await axios.get(`/api/fruit/${id}`)
        dispatch({ type:FRUIT_DETAILS_SUCCESS, payload: data})
    } catch(error){
        dispatch({
            type: FRUIT_DETAILS_FAIL, 
            payload: error.response && error.response.data.message 
                ? error.response.data.message 
                : error.message})
    }

}