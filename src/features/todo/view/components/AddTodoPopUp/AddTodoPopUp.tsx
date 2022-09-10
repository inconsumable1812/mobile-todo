import { FC, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';
import { useAppDispatch } from '../../../../../app/hooks';
import { MAIN_TEXT_COLOR, MAIN_BUTTON_COLOR } from '../../../constants';
import { addTodo } from '../../../redux/slice';
import { TodoItem } from '../../../types';

type Props = {
  isOpen: boolean;
  onPress: () => void;
};

export const AddTodoPopUp: FC<Props> = ({ isOpen, onPress }) => {
  const dispatch = useAppDispatch();
  const [caption, setCaption] = useState('');
  const [description, setDescription] = useState('');
  const resetHandler = () => {
    setCaption('');
    setDescription('');
    onPress();
  };

  const addTodoHandler = () => {
    if (caption.trim().length === 0 || description.trim().length === 0) return;
    const newItem: TodoItem = {
      caption,
      description,
      id: new Date().getTime(),
      isDone: false
    };
    dispatch(addTodo(newItem));
    resetHandler();
  };

  return (
    <>
      {isOpen && (
        <Modal
          onRequestClose={onPress}
          transparent={true}
          animationType={'fade'}
        >
          <TouchableOpacity
            style={styles.wrapper}
            activeOpacity={1}
            onPressOut={onPress}
          >
            <TouchableWithoutFeedback>
              <View style={styles.container}>
                <View style={styles.main}>
                  <Text style={styles.caption}>Добавить предмет</Text>
                  <Text style={styles.description}>
                    Укажите заголовок и задание
                  </Text>
                  <TextInput
                    value={caption}
                    style={styles.input}
                    placeholder="Заголовок"
                    onChangeText={setCaption}
                  ></TextInput>
                  <TextInput
                    value={description}
                    style={styles.input}
                    placeholder="Задание"
                    onChangeText={setDescription}
                  ></TextInput>
                </View>
                <View style={styles.buttons}>
                  <TouchableHighlight
                    style={{ ...styles.button, ...styles.buttonBorder }}
                    underlayColor={'#ffffff'}
                    onPress={resetHandler}
                  >
                    <Text style={styles.cancel}>Отменить</Text>
                  </TouchableHighlight>
                  <TouchableHighlight
                    style={styles.button}
                    underlayColor={'#ffffff'}
                    onPress={addTodoHandler}
                  >
                    <Text style={styles.save}>Сохранить</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </TouchableOpacity>
        </Modal>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    flex: 1,
    marginHorizontal: 30
  },
  container: {
    borderRadius: 8,
    backgroundColor: 'rgba(249, 249, 249, 0.94)',
    paddingTop: 18
  },
  main: { paddingHorizontal: 16 },
  caption: {
    fontSize: 17,
    lineHeight: 22,
    textAlign: 'center',
    color: MAIN_TEXT_COLOR,
    fontWeight: '500',
    marginBottom: 4
  },
  description: {
    fontSize: 13,
    lineHeight: 18,
    textAlign: 'center',
    color: '#737A82',
    marginBottom: 16
  },
  input: {
    borderWidth: 0.5,
    borderColor: 'rgba(60, 60, 67, 0.3)',
    borderRadius: 7,
    backgroundColor: '#fff',
    padding: 7,
    marginBottom: 15
  },
  buttons: {
    justifyContent: 'space-between',
    marginTop: 2,
    height: 44,
    flexDirection: 'row',
    width: '100%',
    borderTopWidth: 1,
    borderColor: '#fff'
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonBorder: {
    borderRightWidth: 1,
    borderColor: '#fff',
    borderBottomLeftRadius: 7
  },
  cancel: {
    color: MAIN_BUTTON_COLOR,
    textAlign: 'center'
  },
  save: {
    color: MAIN_BUTTON_COLOR
  }
});
