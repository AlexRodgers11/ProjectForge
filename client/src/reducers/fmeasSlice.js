import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fmeas: [],
    formIdx: 0
}

export const fmeasSlice = createSlice({
    name: "fmeas",
    initialState,
    reducers: {
        updateFormIdx: (state, action) => {
            state.formIdx = state.formIdx + action.payload
        }
    }
});

export const { updateFormIdx } = fmeasSlice.actions;

export default fmeasSlice.reducer;