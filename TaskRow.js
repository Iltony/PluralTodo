import React from 'react-native'

const {
    Text
} = React

class TaskRow extends React.Component {
    render(){
        return (
            <Text>{this.props.todo.task}</Text>
        );
    }
}

TaskRow.PropTypes = {
    todo: React.PropTypes.shape({
        task: React.PropTypes.string.isRequired, 
    }).isRequired
};

export default TaskRow;
