import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { productItem, ProductState } from '../types/types';
import { RootState, AppThunk } from './store';

const initialState: ProductState = {
  items: [],
  searchingItems: [],
  currentPage: 1,
  currentPageItems: []
};


export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    fetchItems: (state: ProductState, action: PayloadAction<Array<productItem>>) => {
      state.items = action.payload;
      state.searchingItems = action.payload;
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
    searchItems: (state: ProductState, action: PayloadAction<string>) => {
      state.searchingItems = state.items.filter( item => {
        if (item.name.startsWith(action.payload))
          return item;
      });
    },
    turnPage: (state: ProductState, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
      state.currentPageItems = state.searchingItems.filter((item, index) => {
        if (index < action.payload*5 && index >= (action.payload*5-5))
          return item;
      });
    }
  }
});
export const { fetchItems, addItem, updateItem, deleteItem, searchItems, turnPage } = productSlice.actions;

export const selectProductsState = (state: RootState) => state.products;

export default productSlice.reducer;

