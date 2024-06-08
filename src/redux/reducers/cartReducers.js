import { ADD_TO_CART, DELETE_CART, DELETE_ITEM, INIT_APP, REMOVE_QUANTITY } from "../actions/types";

const initialState = {
    cartItems: [],
}
export const cartReducer = (state = initialState, action)=>{
    switch(action.type){
        case ADD_TO_CART:
            const incItem = action.payload
            const findItem = state.cartItems.filter(x => x._id === incItem._id);
            // console.log(findItem)
            if(findItem.length===0)
                return {...state, cartItems:[...state.cartItems, incItem]}
            else{
                const getItem = state.cartItems.map(x=>x._id === incItem._id?{...incItem, qty:incItem.qty+x.qty}:x);
                // console.log(getItem);
                return {...state, cartItems:getItem};
            }

        case REMOVE_QUANTITY:
            const decItem = action.payload;
            // console.log(decItem)
            const findItemFromCart = state.cartItems.filter(x=>x._id === decItem._id);
            if(findItemFromCart.length!==0){
                const getItem = state.cartItems.map(x=>x._id === decItem._id?{...decItem, qty:x.qty-1}:x);
                return {...state, cartItems:getItem}
            }
            else{
                return state;
            }

        case DELETE_ITEM:
            return {...state, cartItems:state.cartItems.filter(x=>x._id !== action.payload._id)}

        case DELETE_CART:
            return {...state, cartItems:[]};

        case INIT_APP:
            if(localStorage.getItem('cartItem')){
                return {...state, cartItems:JSON.parse(localStorage.getItem('cartItem'))}
            }
            else{
                return state;
            }

        default: return state;
    }
}