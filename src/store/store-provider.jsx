import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { reducer as productReducer } from "@/store/product-store";
import { reducer as basketReducer } from "@/store/basket-store";
import { reducer as userReducer } from "@/store/user-store";

export function StoreProvider({ children, preloadedState = {} }) {
    const store = configureStore({
        preloadedState,
        reducer: {
            user: userReducer,
            basket: basketReducer,
            product: productReducer,
        },
    });
    return <Provider store={store}>{children}</Provider>;
}
