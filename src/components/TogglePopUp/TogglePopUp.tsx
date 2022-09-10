import { FC } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { MAIN_BUTTON_COLOR } from '../../shared/style/constants';

type Props = {
  isOpen: boolean;
  activeName: 'Показывать все задания' | 'Выполненные' | 'Не выполненные';
};

export const TogglePopUp: FC<Props> = ({
  isOpen = false,
  activeName = 'Показывать все задания'
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
        <View style={styles.popup}>
          <View style={styles.vertical}>
            <View style={styles.container}>
              <View style={{ ...styles.button, ...styles.buttonBottomBorder }}>
                <Text style={showAll}>Показывать все задания</Text>
              </View>
              <View style={{ ...styles.button, ...styles.buttonBottomBorder }}>
                <Text style={showDone}>Выполненные</Text>
              </View>
              <View style={styles.button}>
                <Text style={showNotDone}>Не выполненные</Text>
              </View>
            </View>
          </View>
        </View>
      )}
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
  vertical: {
    justifyContent: 'center',
    flex: 1
  },
  container: {
    borderRadius: 8,
    backgroundColor: '#EBEBF5',
    opacity: 0.94
  },
  button: {
    height: 56,
    width: '100%',
    justifyContent: 'center'
  },
  buttonBottomBorder: {
    borderBottomWidth: 0.3,
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
