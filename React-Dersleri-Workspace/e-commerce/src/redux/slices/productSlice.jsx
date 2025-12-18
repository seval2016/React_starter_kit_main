import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  selectedProduct: {},
  loading: false,
};

const BASE_URL = "https://fakestoreapi.com";

// First, create the thunk
export const getAllProducts = createAsyncThunk("products/getAllProducts", async () => {
  const response = await axios.get(`${BASE_URL}/products`);
  return response.data;
});

export const getProductById = createAsyncThunk(
  "products/getProductById",
  async (id) => {
    const res = await axios.get(`${BASE_URL}/products/${id}`);
    return res.data;
  }
);


export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload

    }

  },
 extraReducers: (builder) => {
  builder
    .addCase(getAllProducts.pending, (state) => {
      state.loading = true;
    })
    .addCase(getAllProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    })
    .addCase(getProductById.pending, (state) => {
      state.loading = true;
    })
    .addCase(getProductById.fulfilled, (state, action) => {
      state.loading = false;
      state.selectedProduct = action.payload;
    });
}
,
});

export const {setSelectedProduct} = productSlice.actions;

export default productSlice.reducer;
