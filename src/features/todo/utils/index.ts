import AsyncStorage from '@react-native-async-storage/async-storage';
import { TodoItem } from '../types';

export const setTodosData = async (value: TodoItem[]) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('todos', jsonValue);
  } catch (e) {
    console.log(e);
  }
};

export const getTodosData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('todos');
    if (jsonValue === null) return null;

    const todos = JSON.parse(jsonValue) as TodoItem[];
    return todos;
  } catch (e) {
    console.log(e);
    return null;
  }
};
