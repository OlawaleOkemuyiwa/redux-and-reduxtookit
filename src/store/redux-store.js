import { configureStore } from "@reduxjs/toolkit";

import uiSliceReducer from './ui-slice';
import cartSlicReducer from './cart-slice';


const store = configureStore({
    reducer: {
        ui: uiSliceReducer,
        cart: cartSlicReducer
    }
})

export default store;