import { ADDRESS_ERROR, ADDRESS_REQUEST, ADDRESS_SUCCESS, GET_ADDRESS_ERROR, GET_ADDRESS_SUCCESS, SELECT_ADDRESS_REQUEST, SELECT_ADDRESS_SUCCESS } from "../actions/types"

const initialState = {address: [], selectedAddress:{}, loading: false};

export const addressReducer = (state = initialState, action)=>{
    
    switch(action.type){

        case ADDRESS_REQUEST: return {...state, loading: true};

        case ADDRESS_SUCCESS:
        return {...state, address:[...state.address, action.payload.data], selectedAddress:action.payload.data, loading: false};

        case ADDRESS_ERROR: return {...state, loading: true};

        case GET_ADDRESS_SUCCESS: 
        return {...state, address:[...action.payload.data], loading: false, selectedAddress:action.payload.data[0]};

        case GET_ADDRESS_ERROR: return {...state, loading: true};

        case SELECT_ADDRESS_REQUEST:return {...state, loading: true};

        case SELECT_ADDRESS_SUCCESS: return{...state, selectedAddress:action.payload, loading: false}



        default: return state;
    }
}