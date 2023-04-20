import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
        addFish: (state, action: PayloadAction<IFish>): void => {
            state.cart?.push(action.payload)
        }
    }
})

export default CartSlice.reducer