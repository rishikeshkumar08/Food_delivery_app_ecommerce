import {
    INIT_APP,
    LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_REQUEST,
  REGISTER_ERROR,
  REGISTER_REQ,
  REGISTER_SUCCESS,
} from "../actions/types";

const initialState = {
  users: {},
  loading: false,
  message: ''
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQ:
      return { ...state, loading: true, message:''};

    case REGISTER_SUCCESS:
      return { ...state, loading: false, message: action.payload.message };

    case LOGIN_REQUEST:
      return { ...state, loading: true, message:''};

    case LOGIN_SUCCESS:
      return {...state, users:action.payload.data, loading:false, message:action.payload.message}

    case LOGIN_ERROR:
      return {...state, message:action.payload.message, loading: false}

    case REGISTER_ERROR:
      return {...state, message: action.payload.message, loading: false};

    case LOGOUT_REQUEST:
      return {...state, users: {}}

    case INIT_APP:
    if(localStorage.getItem('user')){
        return {...state, users:JSON.parse(localStorage.getItem('user'))}
    }
    else{
        return state;
    }

    default:
      return state;
  }
};
