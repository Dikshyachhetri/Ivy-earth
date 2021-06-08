import {FRUIT_LIST_REQUEST, FRUIT_LIST_SUCCESS, FRUIT_LIST_FAIL} from "../constants/fruitConstants"
import {FRUIT_DETAILS_REQUEST, FRUIT_DETAILS_SUCCESS, FRUIT_DETAILS_FAIL} from "../constants/fruitConstants"

export const fruitListReducer =(state={ fruits :[] }, action) =>{
    switch (action.type){
        case FRUIT_LIST_REQUEST:
            return { loading :true, fruits:[]}
        case FRUIT_LIST_SUCCESS:
            return {loading: false, fruits : action.payload}
        case FRUIT_LIST_FAIL:
            return {loading:false, error: action.payload}
        default:
            return state
            }
}

export const fruitDetailsReducer =(state={ fruit :{ } }, action) =>{
    switch (action.type){
        case FRUIT_DETAILS_REQUEST:
            return { loading :true, ...state}
        case FRUIT_DETAILS_SUCCESS:
            return {loading: false, fruit : action.payload}
        case FRUIT_DETAILS_FAIL:
            return {loading:false, error: action.payload}
        default:
            return state
            }
}