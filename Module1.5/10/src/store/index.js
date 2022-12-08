import { createSlice, configureStore } from '@reduxjs/toolkit'
import uiSlice from './ui-slice'

const initialState = {
    basket: 0,
    totalAmount: 0,
    amount: 0,
    items:[]
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addItem(state){

        },
        removeItem(state){

        },
        addItemToCart(state){
            // state.items = state.items.push(action.payload)
        }
    }
})


const store = configureStore({
    reducer:{ 
        cart: cartSlice.reducer, 
        ui: uiSlice.reducer
    }
})

export const cartActions = cartSlice.actions;

export default store