import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

const initialState: SomeState = {

};


export const slice = createSlice({
  name: 'smth',
  initialState,
  reducers: {

  }
});
export const { } = slice.actions;

export const selectSomeState = (state: RootState) => state.cart;

export default slice.reducer;