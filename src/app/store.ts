import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { reducer as todoReducer } from '../features/todo';

export const store = configureStore({
  reducer: {
    todo: todoReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
