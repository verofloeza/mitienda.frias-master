import { ADD_ITEM, CONFIRM_CART, REMOVE_ITEM } from '../actions/cart.action';

const initialState = {
    cart: [],
    total: 0
}

const sumTotal = (list) => list
    .map(item => item.quantity * item.precio)
    .reduce( (a,b) => a + b, 0);

const CartReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_ITEM:
            let updateCart = [];

            if(state.cart.find( item => item.id === action.item.id)) {
                updateCart = state.cart.map( item => {
                    if(item.id === action.item.id) item.quantity++;
                    return item;
                })                
            }else {
                const item = {...action.item, quantity: 1};
                updateCart = [...state.cart, item];
            }
             return {
                 ...state,
                 cart: updateCart,
                 total: sumTotal(updateCart),
             }
         case REMOVE_ITEM:
            const filteredCart = state.cart.filter( item => item.id !== action.itemID);
            console.log(action.itemID);
            return {
                ...state,
                cart: filteredCart,
                total: sumTotal(filteredCart),
            }
         case CONFIRM_CART:
             return {...state, cart: [], total: 0}
        default:
            return state;
    }
}

export default CartReducer;