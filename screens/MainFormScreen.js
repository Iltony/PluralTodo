import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TaskList from '../TaskList';
import {
  StackNavigator,
} from 'react-navigation';


export default class MainFormScreen extends React.Component {

  static navigationOptions = {
    title: 'Main Page',
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      todos: [
        {
          task: 'Learn React Native'
        },
        {
          task: 'Learn Redux'
        },
        {
          task: 'Learn Angular4'
        }
      ]
    };
  }

  onAddStarted() {
    this.props.navigation.navigate('taskForm', {navigation: this.props.navigation});
  }

  render() {
    return (
      <TaskList
        onAddStarted={this.onAddStarted.bind(this)}
        todos={this.state.todos}
      />
    );
  }
}