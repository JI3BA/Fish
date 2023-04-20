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
        name: 'Salmon Steak',
        ingredients: ['Salmon Steak: 300g', 'Olive oil (or sesame): 2tablespoon', 'Lemons: 0.5pieces', 'Salt (or soy sauce): taste',
        'Ground red pepper (not hot): 0.5teaspoons', 'Italian herbs: 0.5teaspoons', 'Ground black pepper: taste', 'Thyme, thyme (fresh or rosemary): taste'],
        picture: salmonSteak,
        time: '40 minutes'
    },
    {
        id: 1,
        name: 'Tuna Steak',
        ingredients: ['Tuna Steak: 400g', 'Lemons: 1pieces', 'Salt: taste', 'Peppercorns: taste', 'Vegetable oil: 20g', 'Greenery: taste'],
        picture: tunaSteak,
        time: '30 minutes'
    },
    {
        id: 2,
        name: 'Cutlets from Pollock',
        ingredients: ['Pollock fillet: 500g', 'Potato: 1pieces', 'Eggs: 1pieces', 'Salt: taste', 'Herb Blend (Dried): taste', 'Sunflower oil: 1tablespoon'],
        picture: cutletsPollock,
        time: '35 minutes'
    },
    {
        id: 3,
        name: 'Salted Mackerel',
        ingredients: ['Mackerel: 2pieces', 'Water: 0.5liters', 'Salt: 2tablespoon', 'Sugar: 1teaspoons', 'Peppercorns: 10pieces', 'Bay leaf: 3pieces'],
        picture: saltedMackerel,
        time: '8 hours'
    },
    {
        id: 4,
        name: 'Salted Trout',
        ingredients: ['Trout: 350g', 'Sea salt: 2tablespoons', 'Sugar: 1teaspoons', 'Dill: 1teaspoons', 'Bay leaf: 1pieces'],
        picture: saltedTrout,
        time: '2 days'
    },
    {
        id: 5,
        name: 'Halibut in the oven in foil',
        ingredients: ['Halibut: 500g', 'Sunflower oil: 10g', 'Ground black pepper: taste', 'Salte: taste', 'Bulb onions: 30g', 'Tomatoes: 40g', 'Lemon juice: taste'],
        picture: halibutOven,
        time: '30 minutes'
    },
]}

export const RecipesSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {

    }
})

export default RecipesSlice.reducer