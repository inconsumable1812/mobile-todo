import { FC, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { TodoItem } from '../../../types';
import { TodoItem as TodoComponent } from '../TodoItem/TodoItem';

type Props = {
  todos: TodoItem[];
};

export const TodoList: FC<Props> = ({ todos }) => {
  return (
    <View style={styles.container}>
      {todos.length === 0 ? (
        <Text style={styles.text}>У вас пустой список дел</Text>
      ) : (
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <TodoComponent
              caption={item.caption}
              description={item.description}
              isDone={item.isDone}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        ></FlatList>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 27
  },
  text: {
    fontSize: 16
  }
});
