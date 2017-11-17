// import React from 'react';
import React from 'react-native';

// import React = require('react-native');
import { View, Text, TextInput } from 'react-native';
import TaskList from './TaskList';

let {
  AppRegistry, Component
} = React;




// import { Platform, StatusBar, StyleSheet, View, Text, TextInput } from 'react-native';
// import { AppLoading, Asset, Font } from 'expo';
// import { Ionicons } from '@expo/vector-icons';
// import RootNavigation from './navigation/RootNavigation';

export default class PluralTodo extends React.Component {

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

  render(){
      return (
        <TaskList todos={this.state.todos} />
        );
  }
}