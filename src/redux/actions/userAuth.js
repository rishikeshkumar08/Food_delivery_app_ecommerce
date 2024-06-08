import axios from "axios";
import { LOGIN_REQUEST, LOGOUT_REQUEST } from "./types";
import { LOGIN_ERROR, REGISTER_ERROR, REGISTER_REQ, REGISTER_SUCCESS, LOGIN_SUCCESS, } from "./types"

export const UserRegister = (user) => async (dispatch, getState)=>{
    dispatch({type: REGISTER_REQ, payload:{}})
    try{
        const res = await axios.post('http://localhost:8000/user/register', user);
        if(res.data.status === 200){
            dispatch({type: REGISTER_SUCCESS, payload: res.data.success});
            dispatch({type: LOGIN_SUCCESS, payload: res.data.success})
            localStorage.setItem('user', JSON.stringify(getState().users.users));
        }
        else{
            dispatch({type:REGISTER_ERROR, payload: res.data.error});
        }
    }
    catch(err){
        dispatch({type: REGISTER_ERROR, payload:err});
    }
}

export const UserLogin = (user) => async (dispatch, getState)=>{
    dispatch({type: LOGIN_REQUEST, payload: {}})
    try{
        const res = await axios.post('http://localhost:8000/user/login', user);

        if(res.data.status === 200){
            dispatch({type: LOGIN_SUCCESS, payload: res.data.success});
            localStorage.setItem('user', JSON.stringify(getState().users.users));
            
        }
        else{
            dispatch({type:LOGIN_ERROR, payload: res.data.error});
        }
    }
    catch(err){
        dispatch({type: LOGIN_ERROR, payload:err});
    }
}

export const Logout = () => async (dispatch)=>{
    dispatch({type: LOGOUT_REQUEST, payload: {}});
    localStorage.removeItem('user');
}