import { StyleSheet, View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { Todo } from './src/features/todo';
import { store } from './src/app/store';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar backgroundColor="black" />
        <Todo></Todo>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
