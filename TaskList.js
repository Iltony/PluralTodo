
import React, { Component } from 'react';
import Native, { View, ListView, StyleSheet, TouchableHighlight, Text } from 'react-native';
import PropTypes from 'prop-types';
import TaskRow from './TaskRow'

const styles = Native.StyleSheet.create({
    container: {
        backgroundColor: '#f7f7f7',
        paddingTop: 40,
        flex: 1,
        // justifyContent: 'flex-start',
    },
    contentContainerStyle: {
        // flex: 1, 
        justifyContent: 'flex-start',
    },
});

class TaskList extends React.Component {

    constructor(props, context) {
        super(props, context);

        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

        this.state = {
            dataSource: ds.cloneWithRows(props.todos),
        };
    }

    renderRow(todo) {
        return (
            <TaskRow todo={todo} />
        );
    }

    render() {
        return (
            // <View style={styles.container}><>
            <ListView
                style={styles.container}
                contentContainerStyle={styles.contentContainerStyle}
                dataSource={this.state.dataSource}
                key={this.props.todos}
                renderRow={this.renderRow.bind(this)}
            />
            // <TouchableHighlight>
            //     <Text>Add one</Text>
            // </TouchableHighlight>
        );
    }
};


TaskList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default TaskList;