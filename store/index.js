import { applyMiddleware, combineReducers, createStore } from 'redux';

import CartReducer from './reducers/carrito.reducers';
import CategoriaReducers from './reducers/categoria.reducers';
import OrdenesReducer from './reducers/ordenes.reducers';
import ProductosReducer from './reducers/productos.reducers';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    categorias: CategoriaReducers,
    productos: ProductosReducer,
    carrito: CartReducer,
    ordenes: OrdenesReducer
})

export default createStore(rootReducer, applyMiddleware(thunk));