import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TaskList from './TaskList';

export default class App extends React.Component {

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

  render() {
    return (
      <TaskList todos={this.state.todos} />
      
    );
  }
}