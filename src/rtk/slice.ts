import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductState } from '../types/types';
import { RootState, AppThunk } from './store';

const initialState: ProductState = {
  productItems: [],
  amount: 0
};


export const slice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    fetchItems: (state: ProductState, action) => {

    },
  }
});
export const { fetchItems } = slice.actions;

// export const selectProductState = (state: RootState) => state.product;

export default slice.reducer;