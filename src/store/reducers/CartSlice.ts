import { createSlice } from "@reduxjs/toolkit";
import { IFish } from "../../models/IFish";

interface CartState {
    cart?: IFish[]
}


const initialState: CartState = {
    cart: []
}

export const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        
    }
})

export default CartSlice.reducer