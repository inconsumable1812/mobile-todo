import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterName, TodoItem } from '../types';
import { setTodosData } from '../utils';
import { initialState } from './initialState';
import { selectTodo } from './selectors';

const slice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoItem>) => {
      state.todos.push(action.payload);
      setTodosData(state.todos);
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const currentTodo = state.todos.find(
        (todo) => todo.id === action.payload
      );
      if (currentTodo === undefined) return;

      currentTodo.isDone = !currentTodo.isDone;
      setTodosData(state.todos);
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      setTodosData(state.todos);
    },
    changeFilterName: (state, action: PayloadAction<FilterName>) => {
      state.filter = action.payload;
    },
    setTodosFromStorage: (state, action: PayloadAction<TodoItem[]>) => {
      state.todos = action.payload;
    }
  },
  extraReducers: () => {}
});

const { reducer } = slice;
const {
  addTodo,
  toggleTodo,
  removeTodo,
  changeFilterName,
  setTodosFromStorage
} = slice.actions;

export {
  reducer,
  selectTodo,
  addTodo,
  toggleTodo,
  removeTodo,
  changeFilterName,
  setTodosFromStorage
};
