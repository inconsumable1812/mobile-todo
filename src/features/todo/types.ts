export type TodoItem = {
  caption: string;
  description: string;
  isDone: boolean;
  id: number;
};

export type FilterName =
  | 'Показывать все задания'
  | 'Выполненные'
  | 'Не выполненные';
