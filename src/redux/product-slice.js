import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProductsData } from "../utils/api";

export const fetchProducts = createAsyncThunk(
  "fetchProducts",
  async () => await fetchProductsData()
);

const initialState = {
  isLoadingProducts: false,
  products: [],
  isLoadingProduct: false,
  product: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProductToCart(state, action) {},
    removeProductFromCart(state, action) {},
  },

  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoadingProducts = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.isLoadingProducts = false;
    });
  },
});

export const productActions = productSlice.actions;

export default productSlice;
