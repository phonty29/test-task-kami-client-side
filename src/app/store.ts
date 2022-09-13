import { combineReducers } from "redux";
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import reducer from '../features/cart/slice';

const rootReducer = combineReducers({
  cart: reducer
});

export const store = configureStore({
  reducer: rootReducer
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;