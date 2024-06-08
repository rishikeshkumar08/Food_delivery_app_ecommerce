import { ADD_TO_CART, DELETE_ITEM, ERROR, REMOVE_QUANTITY } from "./types"

export const addQuantity = (products)=>async (dispatch, getState)=>{
    const addQty = {...products, qty:1}
    try{
        dispatch({type: ADD_TO_CART, payload: addQty});
        localStorage.setItem('cartItem', JSON.stringify(getState().carts.cartItems))
    }
    catch(err){
        dispatch({type: ERROR, payload: "Can't add to cart"});
    }
}

export const remoeQuantity = (product)=>async (dispatch, getState)=>{
    try{
        dispatch({type: REMOVE_QUANTITY, payload: product});
        localStorage.setItem('cartItem', JSON.stringify(getState().carts.cartItems))
    }
    catch(err){
        dispatch({type: ERROR, payload: "Can't remove products"})
    }
}

export const deleteItem = (product)=>(dispatch, getState)=>{
    try{
        dispatch({type: DELETE_ITEM, payload: product});
        localStorage.setItem('cartItem', JSON.stringify(getState().carts.cartItems))
    }
    catch(err){
        dispatch({type: ERROR, payload: "Can't delete products"})
    }
}
