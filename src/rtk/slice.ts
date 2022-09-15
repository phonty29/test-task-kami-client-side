import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { productItem, ProductState } from '../types/types';
import { RootState, AppThunk } from './store';

const initialState: ProductState = {
  productItems: []
};


export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchProducts: (state: ProductState, action: PayloadAction<Array<productItem>>) => {
      state.productItems = action.payload;
    } 
  }
});
export const { fetchProducts } = productsSlice.actions;

export const selectProductsState = (state: RootState) => state.products;

export default productsSlice.reducer;