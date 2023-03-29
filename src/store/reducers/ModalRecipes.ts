import { createSlice } from "@reduxjs/toolkit";
import { IRecipes } from "../../models/IRecipes";

interface RecipeState {
    recipe: null | IRecipes
}

const initialState: RecipeState = {
    recipe: null
}

export const openModalRecipe = createSlice({
    name: 'recipe',
    initialState,
    reducers: {

    }
})

export default openModalRecipe.reducer