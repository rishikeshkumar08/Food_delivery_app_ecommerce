import axios from "axios";
import { ADDRESS_ERROR, ADDRESS_REQUEST, ADDRESS_SUCCESS, GET_ADDRESS_SUCCESS, GET_ADDRESS_ERROR, SELECT_ADDRESS_REQUEST, SELECT_ADDRESS_SUCCESS } from "./types";



export const addAddress = (address) => async (dispatch, getState)=>{
    dispatch({type: ADDRESS_REQUEST, payload:{}})
    try{
        const res = await axios.post('http://localhost:8000/user/add-address', address);
        if(res.data.status === 200){
            dispatch({type: ADDRESS_SUCCESS, payload: res.data.success});
            localStorage.setItem('address', JSON.stringify(getState().address.address));
        }
        else{
            dispatch({type:ADDRESS_ERROR, payload: res.data.error});
        }
    }
    catch(err){
        dispatch({type: ADDRESS_ERROR, payload:err});
    }
}

export const getAddress = (id) => async (dispatch, getState)=>{
    dispatch({type: ADDRESS_REQUEST, payload:{}});
    try{
        const res = await axios.get(`http://localhost:8000/user/get-address/${id}`);
        if(res.data.status === 200){
            dispatch({type: GET_ADDRESS_SUCCESS, payload: res.data.success});
            localStorage.setItem('address', JSON.stringify(getState().address))
        }
        else{
            dispatch({type:GET_ADDRESS_ERROR, payload: res.data.error});
        }
    }
    catch(err){
        dispatch({type: GET_ADDRESS_ERROR, payload:err});
    }
}

export const selectAddress = (address) => async (dispatch, getState)=>{
    dispatch({type: SELECT_ADDRESS_REQUEST, payload:{}})
    dispatch({type: SELECT_ADDRESS_SUCCESS, payload:address});
    if(localStorage.getItem('address')){
        localStorage.setItem('address', JSON.stringify(getState().address));
    }

}