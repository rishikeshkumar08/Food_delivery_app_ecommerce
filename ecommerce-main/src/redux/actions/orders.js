import axios from "axios";
import { ADD_PAYMENT_REQUEST, ADD_PAYMENT_SUCCESS, CREATE_ORDER_REQ, DELETE_CART, GET_ORDER_REQ, ORDER_ERROR, ORDER_SUCCESS } from "./types";


export const addPayment = (payment) => async (dispatch)=>{
    dispatch({type: ADD_PAYMENT_REQUEST, payload:{}})
    dispatch({type: ADD_PAYMENT_SUCCESS, payload:payment})
}

export const createOrder = (order) => async (dispatch)=>{
    dispatch({type: CREATE_ORDER_REQ, payload:{}});
    try{
        const res = await axios.post('http://localhost:8000/user/payment/orders', order);
        console.log(res);
        if(res.data.status === 200){
            // const {cartItems, shippingAddress, paymentMethod, name, email} = order
            dispatch({type: ORDER_SUCCESS, payload: res.data.success.data});
        }
        else{
            dispatch({type: ORDER_ERROR, payload: res.data.error})
        }
    }
    catch(err){
        dispatch({type: ORDER_ERROR, payload:err})
    }
}

export const placeOrder = (order) => async (dispatch, getState)=>{
    dispatch({type: CREATE_ORDER_REQ, payload: {}});
    try{
        const res = await axios.post('http://localhost:8000/user/payment/success', order);
        if(res.data.status === 200){
            dispatch({type: ORDER_SUCCESS, payload: res.data.success.data});
            dispatch({type: DELETE_CART})
            localStorage.removeItem('cartItem');
            localStorage.setItem('orders', JSON.stringify(res.data.success.data));
        }
        else{
            dispatch({type: ORDER_ERROR, payload: res.data.error});
        }
    }
    catch(err){
        dispatch({type: ORDER_ERROR, payload: err})
    }
}

export const getOders = (id) => async (dispatch)=>{
    dispatch({type: GET_ORDER_REQ, payload:{}});
    try{
        const res = await axios.get(`http://localhost:8000/user/get-order/${id}`)
        console.log(res);
        if(res.data.status === 200){
            dispatch({type: ORDER_SUCCESS, payload:res.data.success.data})
        }
        else{
            dispatch({type: ORDER_ERROR, payload:{}});
        }
    }
    catch(err){
        dispatch({type: ORDER_ERROR, payload:err});
    }
}