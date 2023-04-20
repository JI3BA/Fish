import { combineReducers, configureStore } from "@reduxjs/toolkit";
import FishReducer from '../store/reducers/FishSlice'
import FishRecipes from "./reducers/RecipesSlice";
import ModalSlice from "./reducers/ModalSlice";
import ModalRecipes from "./reducers/ModalRecipesSlice";
import CartSlice from "./reducers/CartSlice";

const rootReducer = combineReducers({
    FishReducer,
    FishRecipes,
    ModalSlice,
    ModalRecipes,
    CartSlice
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']