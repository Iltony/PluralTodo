import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import TaskList from './TaskList';
import TaskForm from './TaskForm'

import MainForm from './screens/MainFormScreen'

export default RootStackNavigator = StackNavigator(
  {
    home: {
      screen: MainForm,
    },
    taskForm: {
      screen: TaskForm,
    },
  },
  {
    navigationOptions: () => ({
      headerTitleStyle: {
        fontWeight: 'normal',
      },
    }),
  }
);
