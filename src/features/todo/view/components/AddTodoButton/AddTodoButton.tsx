import { FC, useState } from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import { MAIN_BUTTON_COLOR } from '../../../constants';
import { AddTodoPopUp } from '../AddTodoPopUp/AddTodoPopUp';

type Props = {};

export const AddTodoButton: FC<Props> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openPopUpHandler = () => {
    setIsOpen(true);
  };

  const onPressHandler = () => {
    setIsOpen(false);
  };

  return (
    <>
      <TouchableHighlight
        underlayColor={'transparent'}
        onPress={openPopUpHandler}
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>Добавить</Text>
        </View>
      </TouchableHighlight>
      <AddTodoPopUp onPress={onPressHandler} isOpen={isOpen}></AddTodoPopUp>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 55,
    backgroundColor: MAIN_BUTTON_COLOR,
    borderRadius: 8,
    justifyContent: 'center',
    marginHorizontal: 16
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '500',
    fontSize: 16
  }
});
