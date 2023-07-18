import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
    isModal: boolean,
    isOrder: boolean
}

const initialState: ModalState = {
    isModal: false,
    isOrder: false
}

export const isModal = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state): void => {
            state.isModal = true
        },
        closeModal: (state): void => {
            state.isModal = false
        },
        openOrder: (state): void => {
            state.isOrder = true
        },
        closeOrder: (state): void => {
            state.isOrder = false
        },
    }
})

export default isModal.reducer