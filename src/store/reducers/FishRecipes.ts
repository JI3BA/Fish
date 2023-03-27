import { createSlice } from "@reduxjs/toolkit";
import { IRecipes } from "../../models/IRecipes";
import salmonSteak from '../../images/recipes/salmon-steak.jpg';
import tunaSteak from '../../images/recipes/tuna-steak.jpg';
import cutletsPollock from '../../images/recipes/cutlets-from-pollock.jpg';
import saltedMackerel from '../../images/recipes/salted-mackerel.jpg';
import saltedTrout from '../../images/recipes/salted-trout.jpg';
import halibutOven from '../../images/recipes/halibut-in-the-oven-in-foil.jpg';

interface RecipesState {
    recipes: IRecipes[]

}

const initialState: RecipesState = {
    recipes: [
    {
        id: 0,
        name: 'halibut in the oven in foil',
        ingredients: ['ss'],
        picture: salmonSteak,
    },
    {
        id: 1,
        name: 'halibut in the oven in foil',
        ingredients: ['ss'],
        picture: tunaSteak,
    },
    {
        id: 2,
        name: 'halibut in the oven in foil',
        ingredients: ['ss'],
        picture: cutletsPollock,
    },
    {
        id: 3,
        name: 'halibut in the oven in foil',
        ingredients: ['ss'],
        picture: saltedMackerel,
    },
    {
        id: 4,
        name: 'halibut in the oven in foil',
        ingredients: ['ss'],
        picture: saltedTrout,
    },
    {
        id: 5,
        name: 'halibut in the oven in foil',
        ingredients: ['ss'],
        picture: halibutOven,
    },
]}

export const FishRecipes = createSlice({
    name: 'recipes',
    initialState,
    reducers: {

    }
})

export default FishRecipes.reducer