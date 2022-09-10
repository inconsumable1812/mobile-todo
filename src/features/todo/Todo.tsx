import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectTodo } from './redux/slice';
import { AddTodoButton } from './view/components/AddTodoButton/AddTodoButton';
import { TodoList } from './view/components/TodoList/TodoList';
import { ToggleTodoButton } from './view/components/ToggleTodoButton/ToggleTodoButton';

type Props = {};

export const Todo: FC<Props> = () => {
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
      <AddTodoButton></AddTodoButton>
    </>
  );
};
