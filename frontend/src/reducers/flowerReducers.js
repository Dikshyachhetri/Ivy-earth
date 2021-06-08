import {FLOWER_LIST_REQUEST, FLOWER_LIST_SUCCESS, FLOWER_LIST_FAIL} from "../constants/flowerConstants"
import {FLOWER_DETAILS_REQUEST, FLOWER_DETAILS_SUCCESS, FLOWER_DETAILS_FAIL} from "../constants/flowerConstants"

export const flowerListReducer =(state={ flowers :[] }, action) =>{
    switch (action.type){
        case FLOWER_LIST_REQUEST:
            return { loading :true, flowers:[]}
        case FLOWER_LIST_SUCCESS:
            return {loading: false, flowers : action.payload}
        case FLOWER_LIST_FAIL:
            return {loading:false, error: action.payload}
        default:
            return state
            }
}

export const flowerDetailsReducer =(state={ flower :{ } }, action) =>{
    switch (action.type){
        case FLOWER_DETAILS_REQUEST:
            return { loading :true, ...state}
        case FLOWER_DETAILS_SUCCESS:
            return {loading: false, flower : action.payload}
        case FLOWER_DETAILS_FAIL:
            return {loading:false, error: action.payload}
        default:
            return state
            }
}