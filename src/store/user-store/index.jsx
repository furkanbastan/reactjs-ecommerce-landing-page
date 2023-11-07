import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {},
};

export const { reducer, actions } = createSlice({
    name: "product",
    initialState,
    reducers: {},
});
