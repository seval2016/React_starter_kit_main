import { createSlice } from "@reduxjs/toolkit";

const saveToLocalStorage = (products) => {
  localStorage.setItem("basket", JSON.stringify(products));
};

const initialState = {
  products: JSON.parse(localStorage.getItem("basket")) || [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const product = action.payload;

      const existingProduct = state.products.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        existingProduct.quantity += product.quantity;
      } else {
        state.products.push(product);
      }

      saveToLocalStorage(state.products);
    },

    removeFromBasket: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );

      saveToLocalStorage(state.products);
    },

    decreaseQuantity: (state, action) => {
      const product = state.products.find(
        (item) => item.id === action.payload
      );

      if (!product) return;

      if (product.quantity > 1) {
        product.quantity -= 1;
      } else {
        state.products = state.products.filter(
          (item) => item.id !== action.payload
        );
      }

      saveToLocalStorage(state.products);
    },

    clearBasket: (state) => {
      state.products = [];
      saveToLocalStorage([]);
    },
  },
});

export const {
  addToBasket,
  removeFromBasket,
  decreaseQuantity,
  clearBasket,
} = basketSlice.actions;

export default basketSlice.reducer;
