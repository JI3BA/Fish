import { PayloadAction, createSlice} from "@reduxjs/toolkit";
import { IFish } from "../../models/IFish";
import salmon from '../../images/salmon.jpg';
import tuna from '../../images/tuna.jpg';
import pollock from '../../images/pollock.jpg';
import mackerel from '../../images/mackerel.jpg';
import trout from '../../images/trout.jpg';
import halibut from '../../images/halibut.jpg';



interface FishState {
    fish: IFish[]
}

const initialState: FishState = {
    fish: [{
        id: 0,
        name: 'salmon',
        description: 'Salmons have sleek, streamlined bodies that typically change color throughout their lifetimes. While in freshwater, Atlantic salmon are brown and spotted. When they migrate to the ocean, they turn silvery. Atlantic salmon are the largest salmon species, typically growing to just under four feet in length.',
        weight: 100,
        picture: salmon,
        price: 19.99,
        isCart: false,
    },
    {
        id: 1,
        name: 'tuna',
        description: 'Tuna are remarkable and impressive wild animals. The Atlantic bluefin can reach ten feet in length and weigh as much as 2000 pounds (more than a horse). Their specialized body shape, fins and scales enable some species of tuna to swim as fast as 43 miles per hour. Tuna swim incredible distances as they migrate.',
        weight: 100,
        picture: tuna,
        price: 24.99,
        isCart: false,
    },
    {
        id: 2,
        name: 'pollock',
        description: 'The pollock is an elongated fish, deep green with a pale lateral line and a pale belly. It has a small chin barbel and, like the cod, has three dorsal and two anal fins. A carnivorous, lively, usually schooling fish, it grows to about 1.1 m (3.5 feet) in length and 16 kg (35 pounds) in weight.',
        weight: 100,
        picture: pollock,
        price: 15.99,
        isCart: false,
    },
    {
        id: 3,
        name: 'mackerel',
        description: 'Mackerels are rounded and torpedo-shaped, with a slender, keeled tail base, a forked tail, and a row of small finlets behind the dorsal and anal fins. They are carnivorous fishes and feed on plankton, crustaceans, mollusks, fish eggs, and small fish.',
        weight: 100,
        picture: mackerel,
        price: 17,
        isCart: false,
    },
    {
        id: 4,
        name: 'trout',
        description: 'Trout is the common name given to a number of species of freshwater fish belonging to the salmon family, Salmonidae. Trout are usually found in cool, clear streams and lakes, although many of the species have anadromous strains, as well. They are distributed naturally throughout North America, northern Asia and Europe.',
        weight: 100,
        picture: trout,
        price: 11.99,
        isCart: false,
    },
    {
        id: 5,
        name: 'halibut',
        description: 'Pacific halibut have flat, diamond-shaped bodies. They swim sideways, and the upper side is typically mottled gray to dark brown, which helps them blend in with sandy or muddy bottoms. Their underside is typically white. Both of their eyes are on the upper side of their body',
        weight: 100,
        picture: halibut,
        price: 26.99,
        isCart: false,
    },
]}

export const FishSlice = createSlice({
    name: 'fish',
    initialState,
    reducers: {
        // changeIsCart: (state, action: PayloadAction<boolean>): void => {
        //     state.fish.find(item => item.isCart = !action.payload)
        // }
    }
})

export default FishSlice.reducer