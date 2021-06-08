import {VEGETABLE_LIST_REQUEST, VEGETABLE_LIST_SUCCESS, VEGETABLE_LIST_FAIL} from "../constants/vegetableConstants"
import {VEGETABLE_DETAILS_REQUEST, VEGETABLE_DETAILS_SUCCESS, VEGETABLE_DETAILS_FAIL} from "../constants/vegetableConstants"

export const vegetableListReducer =(state={ vegetables :[] }, action) =>{
    switch (action.type){
        case VEGETABLE_LIST_REQUEST:
            return { loading :true, vegetables:[]}
        case VEGETABLE_LIST_SUCCESS:
            return {loading: false, vegetables : action.payload}
        case VEGETABLE_LIST_FAIL:
            return {loading:false, error: action.payload}
        default:
            return state
            }
}

export const vegetableDetailsReducer =(state={ vegetable :{ } }, action) =>{
    switch (action.type){
        case VEGETABLE_DETAILS_REQUEST:
            return { loading :true, ...state}
        case VEGETABLE_DETAILS_SUCCESS:
            return {loading: false, vegetable : action.payload}
        case VEGETABLE_DETAILS_FAIL:
            return {loading:false, error: action.payload}
        default:
            return state
            }
}