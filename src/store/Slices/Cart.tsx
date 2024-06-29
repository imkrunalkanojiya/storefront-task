import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
    image: string;
    quantity: number;
}

interface CartState {
    cart: Product[];
}

const initialState: CartState = {
    cart: []
};

const Cart = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            const item = state.cart.find(product => product.id === action.payload.id);
            if (item) {
                item.quantity += 1;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
        },
        removeToCart: (state, action: PayloadAction<{ id: string }>) => {
            state.cart = state.cart.filter(item => item.id !== action.payload.id);
        },
        incrementQuantity: (state, action: PayloadAction<{ id: string }>) => {
            const item = state.cart.find(product => product.id === action.payload.id);
            if (item) {
                item.quantity += 1;
            }
        },
        decrementQuantity: (state, action: PayloadAction<{ id: string }>) => {
            const item = state.cart.find(product => product.id === action.payload.id);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
        }
    }
});

export const { addToCart, removeToCart, incrementQuantity, decrementQuantity } = Cart.actions;
export default Cart.reducer;
