import type { RootState } from '../../../app/store';

const selectTodo = (state: RootState) => state.todo;

export { selectTodo };
