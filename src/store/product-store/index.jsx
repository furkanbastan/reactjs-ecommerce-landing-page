import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    product: {},
    status: "idle", // 'idle', 'loading', 'succeeded', 'failed'
};

export const fetchProducts = createAsyncThunk(
    "product/fetchProducts",
    async () => {
        try {
            const res = await fetch("https://fakestoreapi.com/products");
            const products = await res.json();

            return products;
        } catch (error) {
            return error.message;
        }
    }
);

export const fetchProduct = createAsyncThunk(
    "product/fetchProduct",
    async (id) => {
        try {
            const res = await fetch(`https://fakestoreapi.com/products/${id}`);
            const products = await res.json();

            return products;
        } catch (error) {
            return error.message;
        }
    }
);

export const { reducer, actions } = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // fetchProducts
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.status = "loading";
        });

        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.products = action.payload;
        });

        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        });

        //fetchProduct
        builder.addCase(fetchProduct.pending, (state, action) => {
            state.status = "loading";
        });

        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.product = action.payload;
        });

        builder.addCase(fetchProduct.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        });
    },
});
