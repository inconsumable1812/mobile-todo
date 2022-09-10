import { FilterName, TodoItem } from '../types';

type State = {
  todos: TodoItem[];
  filter: FilterName;
};

export type { State };
