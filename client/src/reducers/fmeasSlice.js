import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "http://localhost:8081";

const initialState = {
    fmeas: [],
    formIdx: 0
}

export const submitNewFMEAForm = createAsyncThunk("fmeas/submitNewFMEAForm", async ({orgId, newForm}) => {
    try {
        const response = await axios.post(`${baseURL}/organizations/${orgId}/forms/fmea`, newForm);
        return response.data;
    } catch (err) {
        console.error(err);
    }
});

export const fmeasSlice = createSlice({
    name: "fmeas",
    initialState,
    reducers: {
        updateFormIdx: (state, action) => {
            state.formIdx = state.formIdx + action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(submitNewFMEAForm.fulfilled, (state, action) => {
            state.fmeas = [...state.fmeas, action.payload];
        });
    }
});

export const { updateFormIdx } = fmeasSlice.actions;

export default fmeasSlice.reducer;