import { FC } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Modal,
  TouchableHighlight
} from 'react-native';
import { MAIN_BUTTON_COLOR } from '../../../constants';

type Props = {
  isOpen: boolean;
  activeName: 'Показывать все задания' | 'Выполненные' | 'Не выполненные';
  onPress: () => void;
};

export const TogglePopUp: FC<Props> = ({
  isOpen = false,
  activeName = 'Показывать все задания',
  onPress
}) => {
  let showAll = { ...styles.buttonText };
  let showDone = { ...styles.buttonText };
  let showNotDone = { ...styles.buttonText };

  switch (activeName) {
    case 'Выполненные':
      showDone = { ...showDone, ...styles.active };
      break;
    case 'Показывать все задания':
      showAll = { ...showAll, ...styles.active };
      break;
    case 'Не выполненные':
      showNotDone = { ...showNotDone, ...styles.active };
      break;
  }

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
              <TouchableHighlight
                style={{ ...styles.button, ...styles.buttonBottomBorder }}
                underlayColor={'#ffffff'}
                onPress={onPress}
              >
                <Text style={showAll}>Показывать все задания</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={{ ...styles.button, ...styles.buttonBottomBorder }}
                underlayColor={'#ffffff'}
                onPress={onPress}
              >
                <Text style={showDone}>Выполненные</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={{ ...styles.button, ...styles.buttonBottomBorder }}
                underlayColor={'#ffffff'}
                onPress={onPress}
              >
                <Text style={showNotDone}>Не выполненные</Text>
              </TouchableHighlight>
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
    marginHorizontal: 10
  },
  container: {
    borderRadius: 8,
    backgroundColor: 'rgba(249, 249, 249, 0.94)'
  },
  button: {
    height: 56,
    width: '100%',
    justifyContent: 'center',
    borderRadius: 8
  },
  buttonBottomBorder: {
    borderBottomWidth: 1,
    borderColor: '#fff'
  },
  buttonText: {
    textAlign: 'center',
    color: '#737A82',
    fontWeight: '500',
    fontSize: 16
  },
  active: {
    color: MAIN_BUTTON_COLOR
  }
});
