import {FETCH_PRODUCTS, ERROR, FETCH_SUCCESS} from '../actions/types'
const initialState = {
    data:[],
    loading:true
};

export const productsReducer = (state = initialState, action)=>{
    switch(action.type){
        case FETCH_PRODUCTS: return {loading:true, data: action.payload};
        case FETCH_SUCCESS: return {loading: false, data:action.payload};
        case ERROR: return {loading: false, error: action.payload, data:[]}
        default: return state;
    }
}
