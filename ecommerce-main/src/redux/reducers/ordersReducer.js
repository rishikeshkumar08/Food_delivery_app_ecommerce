import {
  ADD_PAYMENT_REQUEST,
  ADD_PAYMENT_SUCCESS,
  CREATE_ORDER_REQ,
  GET_ORDER_REQ,
  ORDER_ERROR,
  ORDER_SUCCESS,
} from "../actions/types";

export const orderReducer = (state = { loading: false }, action) => {
  switch (action.type) {
    case ADD_PAYMENT_REQUEST:
      return { ...state, loading: true };
    case ADD_PAYMENT_SUCCESS:
      return { ...state, loading: false, paymentMethod: action.payload };

    default:
      return state;
  }
};

export const createOrderReducer = (state = { loading: false }, action) => {
  switch (action.type) {
    case CREATE_ORDER_REQ:
      return { ...state, loading: true };
    case ORDER_SUCCESS:
      if (action.payload.hasOwnProperty("receipt")) {
        const { id, amount, currency, receipt } = action.payload;
        return {
          ...state,
          orders: {
            order_Id: id,
            amount: amount,
            currency: currency,
            receiptId: receipt,
          },
        };
      } else {
        return { ...state, orders: action.payload };
      }
    case ORDER_ERROR:
      return { ...state };

      case GET_ORDER_REQ: return {...state, loading: true};
    default:
      return state;
  }
};
