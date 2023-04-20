import { combineReducers, configureStore } from "@reduxjs/toolkit";
import FishSlice from '../store/reducers/FishSlice'
import RecipesSlice from "./reducers/RecipesSlice";
import ModalSlice from "./reducers/ModalSlice";
import ModalRecipesSlice from "./reducers/ModalRecipesSlice";
import CartSlice from "./reducers/CartSlice";

const rootReducer = combineReducers({
    FishSlice,
    RecipesSlice,
    ModalSlice,
    ModalRecipesSlice,
    CartSlice,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']