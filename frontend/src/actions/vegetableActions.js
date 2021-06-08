
import {VEGETABLE_LIST_REQUEST, VEGETABLE_LIST_SUCCESS, VEGETABLE_LIST_FAIL} from "../constants/vegetableConstants"
import {VEGETABLE_DETAILS_REQUEST, VEGETABLE_DETAILS_SUCCESS, VEGETABLE_DETAILS_FAIL} from "../constants/vegetableConstants"
import axios from 'axios'

export const listVegetables = () => async (dispatch) =>{
    try{
        dispatch ({ type:VEGETABLE_LIST_REQUEST})
        const {data} = await axios.get('/api/vegetable')
        dispatch({ type:VEGETABLE_LIST_SUCCESS, payload: data})
        console.log(data)
    } catch(error){
        dispatch({
            type: VEGETABLE_LIST_FAIL, 
            payload: error.response && error.response.data.message 
                ? error.response.data.message 
                : error.message})
    }

}
export const listVegetableDetails = (id) => async (dispatch) =>{
    try{
        dispatch ({ type:VEGETABLE_DETAILS_REQUEST})
        const {data} = await axios.get(`/api/vegetable/${id}`)
        dispatch({ type:VEGETABLE_DETAILS_SUCCESS, payload: data})
    } catch(error){
        dispatch({
            type: VEGETABLE_DETAILS_FAIL, 
            payload: error.response && error.response.data.message 
                ? error.response.data.message 
                : error.message})
    }

}