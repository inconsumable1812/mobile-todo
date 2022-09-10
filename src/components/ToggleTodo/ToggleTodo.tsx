import { FC } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { MAIN_BUTTON_COLOR } from '../../shared/style/constants';
import { TogglePopUp } from '../TogglePopUp/TogglePopUp';

type Props = {};

export const ToggleTodo: FC<Props> = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Показывать все задания</Text>
        </View>
      </View>
      <TogglePopUp />
    </>
  );
};

const styles = StyleSheet.create({
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
