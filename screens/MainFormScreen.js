import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TaskList from './TaskList';
import {
    StackNavigator,
  } from 'react-navigation';
  

export default class MainFormScreen extends React.Component {

  static navigationOptions = {
    title: 'Main form page',
  };
  
  constructor(props, context) {
    super(props, context);
    console.log('ctor MainForm')
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
    console.log('on add started');
    this.props.navigation.navigate('TaskForm');
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