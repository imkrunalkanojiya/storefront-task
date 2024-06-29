import { createSlice } from "@reduxjs/toolkit";

const allProducts = createSlice({
    name: "products",
    initialState: {
        products: null
    },
    reducers: {
        successAddProducts: (state, action) => {
            return {
                ...state,
                products: action?.payload,
            };
        }
    }
});

export const {
    successAddProducts
} = allProducts.actions;
export default allProducts.reducer;
