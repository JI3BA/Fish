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
        openModal: (state, action): void => {
            state.isModal = true
        },
        closeModal: (state, action): void => {
            state.isModal = true
        }
    }
})

export default isModal.reducer