import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRecipes } from "../../models/IRecipes";

interface RecipeState {
    recipe: null | IRecipes[]
}

const initialState: RecipeState = {
    recipe: null
}

export const ModalRecipesSlice = createSlice({
    name: 'recipe',
    initialState,
    reducers: {
        addDataModal: (state, action: PayloadAction<IRecipes[]>): void => {
            state.recipe = action.payload
        }
    }
})

export default ModalRecipesSlice.reducer