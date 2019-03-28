import React from 'react';
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

const TodoList = (props) =>{

    const items = props.todos.map(({name,text, id}) => {
        return (
            <TodoListItem
                key={id}
                onDone={() => props.onDone(id)}
                onDelete={() => props.onDelete(id)}
                onNotDone={() => props.onNotDone(id)}
                name={name}
                text={text}
            />
        )
    })
    const { classes } = props;

    return (
        <section className={classes.section}>
             <ul className={classes.ul}>
                {items}
             </ul>
       </section>
    )
}

export default withStyles(styles)(TodoList);