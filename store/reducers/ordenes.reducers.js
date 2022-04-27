import { DELETE_ORDER, GET_ORDERS } from "../actions/order.action";

const initialState = {
    items : [],
    selected : null
}

const OrdenesReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ORDERS:
            return {
                ...state,
                items: action.payload
            }
        case DELETE_ORDER: 
            return {
                ...state,
                items: state.items.filter( item => item.id != action.orderID)
            }
        default:
            return state;
    }
}

export default OrdenesReducer;