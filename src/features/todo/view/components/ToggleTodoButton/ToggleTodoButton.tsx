import { FC, useState } from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import { MAIN_BUTTON_COLOR } from '../../../constants';
import { TogglePopUp } from '../TogglePopUp/TogglePopUp';

type Props = {};

export const ToggleTodoButton: FC<Props> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openPopUpHandler = () => {
    setIsOpen(true);
  };

  const onPressHandler = () => {
    setIsOpen(false);
  };

  return (
    <>
      <View style={styles.container}>
        <TouchableHighlight
          underlayColor={'transparent'}
          onPress={openPopUpHandler}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Показывать все задания</Text>
          </View>
        </TouchableHighlight>
      </View>
      {isOpen && <View style={styles.popup}></View>}
      <TogglePopUp
        onPress={onPressHandler}
        isOpen={isOpen}
        activeName={'Показывать все задания'}
      />
    </>
  );
};

const styles = StyleSheet.create({
  popup: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 5
  },
  container: {
    height: 128,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#EEEEEF'
  },
  button: {
    height: 36,
    borderWidth: 2,
    borderColor: MAIN_BUTTON_COLOR,
    borderRadius: 8,
    justifyContent: 'center',
    marginHorizontal: 16
  },
  buttonText: {
    textAlign: 'center',
    color: MAIN_BUTTON_COLOR,
    fontWeight: '500'
  }
});
