import { combineReducers, configureStore } from "@reduxjs/toolkit";
import FishReducer from '../store/reducers/FishSlice'
import FishRecipes from "./reducers/FishRecipes";

const rootReducer = combineReducers({
    FishReducer,
    FishRecipes,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']