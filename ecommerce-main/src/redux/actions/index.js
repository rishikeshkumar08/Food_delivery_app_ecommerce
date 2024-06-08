import axios from 'axios';
import {FETCH_PRODUCTS, ERROR, FETCH_SUCCESS} from './types';

export const getProducts = ()=> async dispatch=>{
    dispatch({type: FETCH_PRODUCTS, payload: []});
    try{
        const data = await axios.get('http://localhost:8000/api/products');
        // console.log("fetched");
        dispatch({type: FETCH_SUCCESS, payload:data.data.success.data});
    }
    catch(err){
        dispatch({type: Error, payload: "Something went wrong!"});
    }
}

export const getProductsById = (cartType)=> async dispatch=>{
    dispatch({type: FETCH_PRODUCTS, payload:[]});
    try{
        const data = await axios.get(`http://localhost:8000/api/products/${cartType}`);

        if(data.data.status === 400)
            dispatch({type: ERROR, payload: data.data.error.message})
        else
            dispatch({type: FETCH_SUCCESS, payload:data.data.success.data})
    }
    catch(err){
        dispatch({type: ERROR, payload: "Can't fetch the data"});
    }
}