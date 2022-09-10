import { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { DONE_BUTTON_COLOR, DONE_TEXT_COLOR } from '../../../constants';
import {
  HEIGHT_CONTAINER,
  HEIGHT_ICON,
  WIDTH_CONTAINER,
  WIDTH_ICON
} from './constants';

type Props = {
  isDone?: boolean;
};

export const DoneIcon: FC<Props> = ({ isDone = false }) => {
  const containerStyle = isDone
    ? { ...styles.containerShared, ...styles.containerIsDone }
    : { ...styles.containerShared, ...styles.container };
  const iconStyle = isDone
    ? { ...styles.iconShared, ...styles.iconIsDone }
    : { ...styles.iconShared, ...styles.icon };

  return (
    <View style={containerStyle}>
      <View style={iconStyle}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerShared: {
    height: HEIGHT_CONTAINER,
    width: WIDTH_CONTAINER,
    borderRadius: 8,
    position: 'relative',
    marginLeft: 3
  },
  container: {
    borderWidth: 1.5,
    borderColor: '#292D32'
  },
  containerIsDone: {
    borderWidth: 1.5,
    borderColor: 'transparent',
    backgroundColor: DONE_BUTTON_COLOR
  },
  iconShared: {
    height: HEIGHT_ICON,
    width: WIDTH_ICON,
    position: 'absolute',
    top: '30%',
    left: '30%',
    borderBottomWidth: 1.5,
    borderLeftWidth: 1.5,
    transform: [{ rotate: '-45deg' }]
  },
  icon: {
    borderColor: DONE_TEXT_COLOR
  },
  iconIsDone: {
    borderColor: '#fff'
  }
});
