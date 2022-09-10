import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectTodo } from './redux/slice';
import { AddTodoButton } from './view/components/AddTodoButton/AddTodoButton';
import { TodoList } from './view/components/TodoList/TodoList';
import { ToggleTodoButton } from './view/components/ToggleTodoButton/ToggleTodoButton';

type Props = {};

export const Todo: FC<Props> = () => {
  const dispatch = useAppDispatch();
  const { todos } = useAppSelector(selectTodo);

  return (
    <>
      <ToggleTodoButton />
      <TodoList todos={todos}></TodoList>
      <AddTodoButton></AddTodoButton>
    </>
  );
};
