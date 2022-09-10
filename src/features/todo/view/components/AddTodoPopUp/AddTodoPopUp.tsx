import { FC } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  Modal
} from 'react-native';
import { MAIN_TEXT_COLOR, MAIN_BUTTON_COLOR } from '../../../constants';

type Props = {
  isOpen: boolean;
  onPress: () => void;
};

export const AddTodoPopUp: FC<Props> = ({ isOpen, onPress }) => {
  return (
    <>
      {isOpen && (
        <Modal
          onRequestClose={onPress}
          transparent={true}
          animationType={'fade'}
        >
          <View style={styles.wrapper}>
            <View style={styles.container}>
              <View style={styles.main}>
                <Text style={styles.caption}>Добавить предмет</Text>
                <Text style={styles.description}>
                  Укажите заголовок и задание
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Заголовок"
                ></TextInput>
                <TextInput
                  style={styles.input}
                  placeholder="Задание"
                ></TextInput>
              </View>
              <View style={styles.buttons}>
                <TouchableHighlight
                  style={{ ...styles.button, ...styles.buttonBorder }}
                  underlayColor={'#ffffff'}
                  onPress={onPress}
                >
                  <Text style={styles.cancel}>Отменить</Text>
                </TouchableHighlight>
                <View style={styles.button}>
                  <Text style={styles.save}>Сохранить</Text>
                </View>
              </View>
            </View>
          </View>
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
    justifyContent: 'center',
    borderBottomLeftRadius: 7
  },
  buttonBorder: {
    borderRightWidth: 1,
    borderColor: '#fff'
  },
  cancel: {
    color: MAIN_BUTTON_COLOR,
    textAlign: 'center'
  },
  save: {
    color: MAIN_BUTTON_COLOR
  }
});
