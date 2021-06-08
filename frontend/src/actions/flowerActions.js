
import {FLOWER_LIST_REQUEST, FLOWER_LIST_SUCCESS, FLOWER_LIST_FAIL} from "../constants/flowerConstants"
import {FLOWER_DETAILS_REQUEST, FLOWER_DETAILS_SUCCESS, FLOWER_DETAILS_FAIL} from "../constants/flowerConstants"
import axios from 'axios'

export const listFlowers = () => async (dispatch) =>{
    try{
        dispatch ({ type:FLOWER_LIST_REQUEST})
        const {data} = await axios.get('/api/flower')
        dispatch({ type:FLOWER_LIST_SUCCESS, payload: data})
        console.log(data)
    } catch(error){
        dispatch({
            type: FLOWER_LIST_FAIL, 
            payload: error.response && error.response.data.message 
                ? error.response.data.message 
                : error.message})
    }

}
export const listFlowerDetails = (id) => async (dispatch) =>{
    try{
        dispatch ({ type:FLOWER_DETAILS_REQUEST})
        const {data} = await axios.get(`/api/flower/${id}`)
        dispatch({ type:FLOWER_DETAILS_SUCCESS, payload: data})
    } catch(error){
        dispatch({
            type: FLOWER_DETAILS_FAIL, 
            payload: error.response && error.response.data.message 
                ? error.response.data.message 
                : error.message})
    }

}