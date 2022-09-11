import { FC } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { TodoItem } from '../../../types';
import { AddTodoButton } from '../AddTodoButton/AddTodoButton';
import { TodoItem as TodoComponent } from '../TodoItem/TodoItem';

type Props = {
  todos: TodoItem[];
};

export const TodoList: FC<Props> = ({ todos }) => {
  return (
    <View style={styles.container}>
      {todos.length === 0 ? (
        <View style={styles.addTodoContainer}>
          <Text style={styles.text}>У вас пустой список дел</Text>
          <AddTodoButton></AddTodoButton>
        </View>
      ) : (
        <>
          <FlatList
            keyboardShouldPersistTaps="handled"
            data={todos}
            removeClippedSubviews={false}
            renderItem={({ item }) => (
              <TodoComponent
                caption={item.caption}
                description={item.description}
                isDone={item.isDone}
                id={item.id}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
            ListFooterComponent={<AddTodoButton></AddTodoButton>}
            ListFooterComponentStyle={styles.addTodoFooter}
          ></FlatList>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 27,
    flex: 1
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    marginHorizontal: 19,
    marginBottom: 37
  },
  addTodoContainer: {
    flex: 1,
    width: '100%'
  },
  addTodoFooter: {
    marginTop: 37
  }
});
