import { FC, useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { useAppDispatch } from '../../../../../app/hooks';
import {
  DONE_TEXT_COLOR,
  MAIN_TEXT_COLOR,
  MAIN_TEXT_LINE_HEIGHT,
  MAIN_TEXT_SIZE,
  SECOND_TEXT_LINE_HEIGHT,
  SECOND_TEXT_SIZE
} from '../../../constants';
import { removeTodo, toggleTodo } from '../../../redux/slice';
import { TodoItem as TodoItemType } from '../../../types';
import { DoneIcon } from '../DoneIcon/DoneIcon';
import { TrashIcon } from '../TrashIcon/TrashIcon';

type Props = TodoItemType;

export const TodoItem: FC<Props> = ({ caption, description, isDone, id }) => {
  const dispatch = useAppDispatch();
  const removeTodoHandler = () => {
    dispatch(removeTodo(id));
  };
  const toggleTodoHandler = () => {
    dispatch(toggleTodo(id));
  };
  const descriptionStyle = isDone
    ? { ...styles.description, ...styles.descriptionDone }
    : { ...styles.description, ...styles.descriptionNotDone };

  return (
    <View style={styles.container}>
      <TouchableHighlight
        underlayColor={'transparent'}
        onPress={toggleTodoHandler}
      >
        <DoneIcon isDone={isDone}></DoneIcon>
      </TouchableHighlight>
      <View style={styles.body}>
        <Text style={styles.caption}>{caption}</Text>
        <Text style={descriptionStyle}>{description}</Text>
      </View>
      <TouchableHighlight
        style={styles.trashContainer}
        underlayColor={'transparent'}
        onPress={removeTodoHandler}
      >
        <TrashIcon />
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 16,
    marginRight: 16,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#EEF8FD'
  },
  caption: {
    fontWeight: '500',
    fontSize: MAIN_TEXT_SIZE,
    lineHeight: MAIN_TEXT_LINE_HEIGHT,
    color: MAIN_TEXT_COLOR
  },
  description: {
    lineHeight: SECOND_TEXT_LINE_HEIGHT,
    fontSize: SECOND_TEXT_SIZE
  },
  descriptionDone: {
    color: DONE_TEXT_COLOR,
    textDecorationLine: 'line-through'
  },
  descriptionNotDone: {
    color: MAIN_TEXT_COLOR
  },
  trashContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    backgroundColor: '#F8F8F8',
    borderRadius: 8
  },
  body: {
    flex: 1,
    marginLeft: 15
  }
});
