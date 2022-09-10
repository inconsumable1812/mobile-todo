import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterName, TodoItem } from '../types';
import { initialState } from './initialState';
import { selectTodo } from './selectors';

const slice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoItem>) => {
      state.todos.push(action.payload);
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const currentTodo = state.todos.find(
        (todo) => todo.id === action.payload
      );
      if (currentTodo === undefined) return;

      currentTodo.isDone = !currentTodo.isDone;
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    changeFilterName: (state, action: PayloadAction<FilterName>) => {
      state.filter = action.payload;
    }
  },
  extraReducers: () => {}
});

const { reducer } = slice;
const { addTodo, toggleTodo, removeTodo, changeFilterName } = slice.actions;

export {
  reducer,
  selectTodo,
  addTodo,
  toggleTodo,
  removeTodo,
  changeFilterName
};
