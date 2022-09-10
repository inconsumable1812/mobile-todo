import { FC, useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import {
  MAIN_TEXT_COLOR,
  MAIN_TEXT_LINE_HEIGHT,
  MAIN_TEXT_SIZE,
  SECOND_TEXT_LINE_HEIGHT,
  SECOND_TEXT_SIZE
} from '../../../constants';
import { TodoItem as TodoItemType } from '../../../types';
import { DoneIcon } from '../DoneIcon/DoneIcon';
import { TrashIcon } from '../TrashIcon/TrashIcon';

type Props = Pick<TodoItemType, 'caption' | 'description' | 'isDone'>;

export const TodoItem: FC<Props> = ({ caption, description, isDone }) => {
  return (
    <View style={styles.container}>
      <TouchableHighlight underlayColor={'transparent'}>
        <DoneIcon isDone={isDone}></DoneIcon>
      </TouchableHighlight>
      <View style={styles.body}>
        <Text style={styles.caption}>{caption}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.trashContainer}>
        <TrashIcon />
      </View>
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
    color: MAIN_TEXT_COLOR,
    lineHeight: SECOND_TEXT_LINE_HEIGHT,
    fontSize: SECOND_TEXT_SIZE
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
