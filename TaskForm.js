
import React, { Component } from 'react';
import Native, { View, ListView, StyleSheet, TouchableHighlight, Text, TextInput } from 'react-native';

//import PropTypes from 'prop-types';

const styles = Native.StyleSheet.create({
    container: {
        // backgroundColor: '#f7f7f7',
        // paddingTop: 40,
        // flex: 1,
        // justifyContent: 'flex-start',
    },
    button: {
        // height: 60,
        // borderColor: '#05A5D1',
        // borderWidth: 2,
        // backgroundColor: '#333',
        // margin: 20,
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    buttonCancel: {
        // color: '#fff',
        // fontSize: 20,
        // fontWeight: '600',
    },
    buttonText: {
        // color: '#fff',
        // fontSize: 20,
        // fontWeight: '600',
    },
    input: {
        // color: '#fff',
        // fontSize: 20,
        // fontWeight: '600',
    },
});

class TaskForm extends React.Component {
    
    static navigationOptions = {
        title: 'Task form page',
    };

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input}></TextInput>
                
                <TouchableHighlight 
                    onPress={this.props.onAddStarted}
                    style={styles.button}
                    >
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableHighlight>

                <TouchableHighlight 
                    onPress={this.props.onAddStarted}
                    style={[styles.button,  styles.buttonCancel]}
                    >
                    <Text style={styles.buttonText}>Cancel</Text>
                </TouchableHighlight>
            </View>
        );
    }
};

export default TaskForm;