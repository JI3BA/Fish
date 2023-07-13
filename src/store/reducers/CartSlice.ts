import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFish } from "../../models/IFish";

interface CartState {
    cart: IFish[]
}

const initialState: CartState = {
    cart: []
}

export const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addFish: (state,action:PayloadAction<IFish>): void => {
            state['cart']?.push(action.payload)
        },
        changeAmount: (state, action: PayloadAction<Omit<IFish, 'id' | 'description' | 'weight'
        | 'picture' | 'price' | 'isCart' | 'minAmount' | 'disabled'>>): void => {
            state['cart']?.map(item => item.name === action.payload.name
                ? item.amount = action.payload.amount
                : item)
        },
        disabledAmount: (state, action: PayloadAction<Omit<IFish, 'id' | 'description' | 'weight'
        | 'picture' | 'price' | 'minAmount' | 'isCart' >>): void => {
            state['cart']?.map(item => item.name !== action.payload.name
                ? item
                : (item.minAmount === action.payload.amount)
                    ? item.disabled = true
                    : item.disabled = false)
        }
    }
})

export default CartSlice.reducer