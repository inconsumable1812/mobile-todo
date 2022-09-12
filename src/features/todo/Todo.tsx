import { FC, useEffect, useState } from 'react';
import { StyleSheet, ActivityIndicator, View } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { MAIN_BUTTON_COLOR } from './constants';
import { selectTodo, setTodosFromStorage } from './redux/slice';
import { getTodosData } from './utils';
import { TodoList } from './view/components/TodoList/TodoList';
import { ToggleTodoButton } from './view/components/ToggleTodoButton/ToggleTodoButton';

type Props = {};

export const Todo: FC<Props> = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useAppDispatch();
  const storageTodos = getTodosData();
  const getTodosValue = async () => {
    const value = await storageTodos;
    setIsLoading(false);
    if (value === null) return;
    dispatch(setTodosFromStorage(value));
  };

  useEffect(() => {
    getTodosValue();
  }, []);

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
      {isLoading && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator
            size="large"
            color={MAIN_BUTTON_COLOR}
          ></ActivityIndicator>
        </View>
      )}
      {!isLoading && <TodoList todos={filteredTodos}></TodoList>}
    </>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.5
  }
});
