import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TaskList from '../TaskList';
import {
    StackNavigator,
  } from 'react-navigation';
  

export default class MainFormScreen extends React.Component {

  static navigationOptions = {
    title: 'Main form page',
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
  
  onAddStarted(props) {
    this.props.navigation.navigate('taskForm', 
      {
        onAddTask: this.onAddTask.bind(this),  
        onCancelTask: this.onCancelTask.bind(this)        
    });
  }

  onAddTask() {
    console.log('Add Task')
        //this.props.navigation.pop();
  }

  onCancelTask() {
    //console.log('Cancel Task')
    this.props.navigation.pop()
  }

  render() {
    return (
      <TaskList 
        onAddStarted={this.onAddStarted.bind(this)}
        onAddTask={this.onAddTask.bind(this)}
        onCancelTask={this.onCancelTask.bind(this)}
        todos={this.state.todos} 
      />
    );
  }
}