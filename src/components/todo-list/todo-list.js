import React, { Component } from 'react';
import TodoListItem from '../todo-list-item';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    ul: {
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        listStyle: 'none',
        padding: 0
    },
    section: {
        display: 'flex',
        justifyContent: 'center',
    }
});

class TodoList extends Component {
    render () {

        const { classes } = this.props;

        return (
            <section className={classes.section}>
                 <ul className={classes.ul}>
                    <TodoListItem name="Первая записка" text="Тыц-тыц-тыц"></TodoListItem>
                    <TodoListItem name="Первая записка" text="Тыц-тыц-тыц"></TodoListItem>
                 </ul>
           </section>
        )
    }
}

export default withStyles(styles)(TodoList);