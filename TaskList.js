import React from 'react-native';
import TaskRow from './TaskRow'

const {
    Text,
    View,
    ListView,
} = React

const style = React.StyleSheet.Create({
    container: {
        paddingTop: 40
    }
});

class TakList extends React.Component {

    constructor(props, context) {
        super(props, context)

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2 });

        this.state = {
            dataSource: ds.cloneWithRows(props.todos),
        }
    }

    renderRow(todo){
        return (
            <TaskRow todo={this.props.todo} />
        );  
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.props.dataSource}
                    key={this.props.todos}
                    renderRow={this.renderRow.bind(this)}
                />
            </View>);
    }
}

TaskList.propTypes = {
    todos: React.PropTypes
        .arrayOf(React.PropTypes.object).isRequired,
}

export default TaskList;