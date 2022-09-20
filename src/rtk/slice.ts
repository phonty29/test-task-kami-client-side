import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { productItem, ProductState } from '../utils/types';
import { RootState, AppThunk } from './store';

const initialState: ProductState = {
  items: [],
  currentPage: 1,
  currentPageItems: []
};


export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    fetchItems: (state: ProductState, action: PayloadAction<Array<productItem>>) => {
      state.items = action.payload;
    },
    addItem: (state: ProductState, action: PayloadAction<productItem>) => {
      state.items.push(action.payload);
    },
    updateItem: (state: ProductState, action: PayloadAction<productItem>) => {
      state.items = state.items.map(i => {
        if (action.payload._id == i._id)
          return action.payload;
        else return i;
      });
    },
    deleteItem: (state: ProductState, action: PayloadAction<number | string>) => {
      state.items = state.items.filter( i => i._id != action.payload);
    },
    turnPage: (state: ProductState, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
      state.currentPageItems = state.items.filter((item, index) => {
        if (index < action.payload*5 && index >= (action.payload*5-5))
          return item;
      });
    }
  }
});
export const { fetchItems, addItem, updateItem, deleteItem, turnPage } = productSlice.actions;

export const selectProductsState = (state: RootState) => state.products;

export default productSlice.reducer;

