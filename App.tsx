import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { TodoItem } from './src/components/TodoItem/TodoItem';
import { ToggleTodo } from './src/components/ToggleTodo/ToggleTodo';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      <ToggleTodo />
      <TodoItem></TodoItem>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
    // alignItems: 'center',
    // justifyContent: 'center'
  }
});
