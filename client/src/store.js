import { combineReducers, configureStore } from "@reduxjs/toolkit";

import fmeasReducer from "./reducers/fmeasSlice";

const combinedReducer = combineReducers({
    fmeas: fmeasReducer
});

const rootReducer = (state, action) => {
    return combinedReducer(state, action);
}

export const store = configureStore({
    reducer: rootReducer
});