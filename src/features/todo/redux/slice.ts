import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodoItem } from '../types';
import { initialState } from './initialState';
import { selectTodo } from './selectors';

const slice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoItem>) => {
      state.todos.push(action.payload);
    },
    toggleTodo: (state, action: PayloadAction<TodoItem>) => {
      const currentTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      if (currentTodo === undefined) return;

      currentTodo.isDone = !currentTodo.isDone;
    },
    removeTodo: (state, action: PayloadAction<TodoItem>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    }
  },
  extraReducers: () => {}
});

const { reducer } = slice;
const { addTodo, toggleTodo, removeTodo } = slice.actions;

export { reducer, selectTodo, addTodo, toggleTodo, removeTodo };
