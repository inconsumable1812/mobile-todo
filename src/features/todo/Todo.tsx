import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectTodo, setTodosFromStorage } from './redux/slice';
import { getTodosData } from './utils';
import { TodoList } from './view/components/TodoList/TodoList';
import { ToggleTodoButton } from './view/components/ToggleTodoButton/ToggleTodoButton';

type Props = {};

export const Todo: FC<Props> = () => {
  const dispatch = useAppDispatch();
  const storageTodos = getTodosData();
  const getTodosValue = async () => {
    const value = await storageTodos;
    if (value === null) return;
    dispatch(setTodosFromStorage(value));
  };
  getTodosValue();

  const { todos, filter } = useAppSelector(selectTodo);
  let filteredTodos = todos;

  switch (filter) {
    case 'Выполненные':
      filteredTodos = todos.filter((todo) => todo.isDone);
      break;
    case 'Не выполненные':
      filteredTodos = todos.filter((todo) => !todo.isDone);
      break;
    default:
      filteredTodos = todos;
      break;
  }

  return (
    <>
      <ToggleTodoButton />
      <TodoList todos={filteredTodos}></TodoList>
    </>
  );
};
