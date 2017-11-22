import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import TaskList from './TaskList';
import TaskForm from './TaskForm'

import MainForm from './screens/MainFormScreen'

const RootStackNavigator = StackNavigator(
  {
    Home: {
      screen: MainForm,
    },
    TaskForm: {
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

export default class App extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <MainForm />
    );
  }
}