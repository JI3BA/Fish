import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
    isModal: boolean
}

const initialState: ModalState = {
    isModal: false
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
        }
    }
})

export default isModal.reducer