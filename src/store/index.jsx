import { configureStore } from "@reduxjs/toolkit";
import { reducer as productReducer } from "@/store/product-store";
import { reducer as basketReducer } from "@/store/basket-store";
import { reducer as userReducer } from "@/store/user-store";

export const store = configureStore({
    reducer: {
        user: userReducer,
        basket: basketReducer,
        product: productReducer,
    },
});

export function()
