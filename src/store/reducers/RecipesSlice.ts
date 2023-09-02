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
        time: '40 minutes',
        step1: 'Season salmon on both sides with salt and pepper. In a large skillet over medium-high heat, heat oil and butter. Add salmon and cook until bottom is golden, 5 minutes, then flip. Add garlic, lemon juice, honey, and red pepper flakes. Cook until salmon is cooked through, another 5 minutes, spooning sauce over salmon as it cooks.',
        step2: 'Garnish with parsley before serving.'
    },
    {
        id: 1,
        name: 'Tuna Steak',
        ingredients: ['Tuna Steak: 400g', 'Lemons: 1pieces', 'Salt: taste', 'Peppercorns: taste', 'Vegetable oil: 20g', 'Greenery: taste'],
        picture: tunaSteak,
        time: '30 minutes',
        step1: 'Mix orange juice, soy sauce, olive oil, parsley, lemon juice, garlic, oregano, and pepper together in a large non-reactive dish until well combined. Place tuna steaks in marinade and turn to coat. Cover the dish with plastic wrap and marinate in the refrigerator for at least 30 minutes.',
        step2: 'Preheat an outdoor grill for high heat and lightly oil the grate. Remove tuna steaks from the marinade and shake off excess; reserve marinade for basting.',
        step3: 'Cook tuna steaks on the preheated grill for 5 to 6 minutes; flip steaks and baste with reserved marinade. Cook for an additional 5 minutes, or to desired doneness. Discard any remaining marinade.'
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