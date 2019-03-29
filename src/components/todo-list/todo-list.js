import React from 'react';
import TodoListItem from '../todo-list-item';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
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
    let items = null;
    const { todos, onDone, onDelete, onNotDone } = props;
    if (todos.length === 0) {
        items = <Typography variant="h5">Записки не найдены!</Typography>
    }
    else {
        items = todos.map(({name,text, id, ...todoItemProps}) => {
            return (
                <TodoListItem
                    key={id}
                    onDone={() => onDone(id)}
                    onDelete={() => onDelete(id)}
                    onNotDone={() => onNotDone(id)}
                    name={name}
                    text={text}
                    {...todoItemProps}
                />
            )
        })
    }

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