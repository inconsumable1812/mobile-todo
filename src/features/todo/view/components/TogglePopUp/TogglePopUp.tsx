import { FC } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Modal,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';
import { useAppDispatch } from '../../../../../app/hooks';
import { MAIN_BUTTON_COLOR } from '../../../constants';
import { changeFilterName } from '../../../redux/slice';
import { FilterName } from '../../../types';

type Props = {
  isOpen: boolean;
  activeName: FilterName;
  onPress: () => void;
};

export const TogglePopUp: FC<Props> = ({ isOpen, activeName, onPress }) => {
  const dispatch = useAppDispatch();
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

  const showAllHandler = () => {
    if (activeName === 'Показывать все задания') return;
    dispatch(changeFilterName('Показывать все задания'));
    onPress();
  };

  const showDoneHandler = () => {
    if (activeName === 'Выполненные') return;
    dispatch(changeFilterName('Выполненные'));
    onPress();
  };

  const showNotDoneHandler = () => {
    if (activeName === 'Не выполненные') return;
    dispatch(changeFilterName('Не выполненные'));
    onPress();
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
                <TouchableHighlight
                  style={{ ...styles.button, ...styles.buttonBottomBorder }}
                  underlayColor={'#ffffff'}
                  onPress={showAllHandler}
                >
                  <Text style={showAll}>Показывать все задания</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={{ ...styles.button, ...styles.buttonBottomBorder }}
                  underlayColor={'#ffffff'}
                  onPress={showDoneHandler}
                >
                  <Text style={showDone}>Выполненные</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={{ ...styles.button, ...styles.buttonBottomBorder }}
                  underlayColor={'#ffffff'}
                  onPress={showNotDoneHandler}
                >
                  <Text style={showNotDone}>Не выполненные</Text>
                </TouchableHighlight>
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
    paddingHorizontal: 10,
    backgroundColor: 'rgba(0,0,0,0.5)'
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
