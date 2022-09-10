import { FC } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { selectTodo } from './redux/slice';
import { AddTodoButton } from './view/components/AddTodoButton/AddTodoButton';
import { TodoItem } from './view/components/TodoItem/TodoItem';
import { ToggleTodoButton } from './view/components/ToggleTodoButton/ToggleTodoButton';

type Props = {};

export const Todo: FC<Props> = () => {
  const dispatch = useAppDispatch();
  // const { status, error } = useAppSelector(selectLogin);

  return (
    <>
      <ToggleTodoButton />
      <TodoItem></TodoItem>
      <AddTodoButton></AddTodoButton>
    </>
  );
};
