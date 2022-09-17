import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { productItem } from '../types/types';
import { RootState, AppThunk } from './store';

const initialState: productItem = {
  name: '',
	content: null,
	images: null,
	status: true,
	price: 0
};


export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    fetchProduct: (state: productItem, action: PayloadAction<productItem>) => {
      state = action.payload;
    },
    clarify: (state: productItem, action: PayloadAction<productItem>) => {
      state = initialState;
    },
  }
});
export const { fetchProduct, clarify } = productSlice.actions;

export const selectProductsState = (state: RootState) => state.products;

export default productSlice.reducer;