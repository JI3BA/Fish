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
        time: '35 minutes',
        step1: 'In a Cup put the sour cream. Add enough warm boiled water, pour soy sauce. Thoroughly with fork to whisk the mixture.',
        step2: 'To the mixture add the breadcrumbs, stir and leave to swell.\n' +
            'Meanwhile, Alaska Pollock fillets, cut into small pieces, and onion. Garlic clean.\n' +
            'Skip the onion garlic and the fillets through a meat grinder or use a blender.',
        step3: 'Fish forcemeat add the egg and soaked breadcrumbs, add the salt and pepper mixture.\n' +
            'Add the semolina and butter are at room temperature.\n' +
            'Knead carefully minced by hand and put in the fridge for half an hour.\n' +
            'Then form patties and fry both sides in vegetable oil.'
    },
    {
        id: 3,
        name: 'Salted Mackerel',
        ingredients: ['Mackerel: 2pieces', 'Water: 0.5liters', 'Salt: 2tablespoon', 'Sugar: 1teaspoons', 'Peppercorns: 10pieces', 'Bay leaf: 3pieces'],
        picture: saltedMackerel,
        time: '8 hours',
        step1: 'Salt is used not only to season the fish, but it also extracts water from the fish and eliminates any unpleasant smell. Once you sprinkle the mackerel with salt, let it rest for 20 minutes. Do not let it sit anytime shorter or longer. If it is rested too short a time, the fish does not soak up enough salty flavor and the smell may still linger. On the other hand, if you rest it for too long, the smell may be gone but the flesh will get too tight and lose its texture.'
    },
    {
        id: 4,
        name: 'Salted Trout',
        ingredients: ['Trout: 350g', 'Sea salt: 2tablespoons', 'Sugar: 1teaspoons', 'Dill: 1teaspoons', 'Bay leaf: 1pieces'],
        picture: saltedTrout,
        time: '2 days',
        step1: 'Trout, cleaned of scales and entrails.',
        step2: 'Remove the head, tail (do not throw away these parts, prepare the ear), fins, cut the fish in half - lengthwise, remove the bones. Prepare the fillets without skin. Pat them dry with a paper towel. Add salt to each half on both sides. Put most of the salt on the thickened edges.',
        step3: 'Put the fish in a plastic bag or a suitable-sized fish dish (dishware). I can stand the fish for a day and eat it, if it seems to you that this time is not enough, increase the salting time to the desired. The fish turns out crispy, delicious, not burdened with other flavors.'
    },
    {
        id: 5,
        name: 'Halibut in the oven in foil',
        ingredients: ['Halibut: 500g', 'Sunflower oil: 10g', 'Ground black pepper: taste', 'Salte: taste', 'Bulb onions: 30g', 'Tomatoes: 40g', 'Lemon juice: taste'],
        picture: halibutOven,
        time: '30 minutes',
        step1: 'Preheat outdoor grill to medium heat or indoor oven to 400 degrees. Prepare 4 sheets of heavy-duty aluminum foil at least 16" x 12". Season each halibut filet on all sides with salt and pepper then set aside.',
        step2: 'Spray the center of each piece of foil with cooking spray and add a quarter of the sliced zucchini to each sheet. Divide the onion and bell pepper evenly among each packet and season all the veggies lightly with salt and pepper.',
        step3: 'Place one seasoned filet on top of each bed of veggies and sprinkle with your choice of chopped fresh herb and parsley. Lay 2–3 slices of lemon on top of each piece of fish and drizzle approximately 1 tsp of olive oil over the fish and veggies.',
        step4: 'Fold long sides of foil up and over and bring edges together. Roll the foil together, moving downward until 1–2" from the top of the fish. Fold both short ends together to seal the packet but make sure to leave enough space inside the packet for steam expansion.',
        step5: 'Place packets directly on grill or on a baking sheet in the oven. Grill them 8–9 minutes or bake 12–14 minutes in the oven or until veggies are tender and fish is barely cooked through. Remove from grill or oven and carefully open packets to allow steam to escape. Enjoy!'
    },
]}

export const RecipesSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {

    }
})

export default RecipesSlice.reducer