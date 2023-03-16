import { combineReducers, configureStore } from "@reduxjs/toolkit";
import FishReducer from '../store/reducers/FishSlice'

const rootReducer = combineReducers({
    FishReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']