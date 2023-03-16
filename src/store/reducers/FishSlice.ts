import { createSlice } from "@reduxjs/toolkit";
import { IFish } from "../../models/IFish";


interface FishState {
    fish: IFish[]
}

const initialState = {
    fish: []
}

export const FishSlice = createSlice({
    name: 'fish',
    initialState,
    reducers: {

    }
})

export default FishSlice.reducer