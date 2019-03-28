import React, { Component } from 'react';
import AppNavbar from '../app-navbar';
import CardCreate from '../cart-create';
import TodoList from '../todo-list';
//simple component
// const App = () => {
//     return (
//         <div>1</div>
//     )
// }

export default class App extends Component {
    state = {
        todos: [
            {
                name: 1,
                text: 1,
                id: 1,
            },
            {
                name: 2,
                text: 2,
                id: 2,
            },
            {
                name: 3,
                text: 3,
                id: 3,
            },
       ]
    }
    done = (id) => {
        
    }
    delete = (id) => {
        this.setState(({ todos }) => {
            const index = todos.findIndex((Element) => Element.id === id);
            
            const newTodos = [
                ...todos.slice(0, index),
                ...todos.slice(index + 1)
            ];
            
            return {
                todos: newTodos
            };

        });
    }
    notDone = (id) => {
        console.log(id)
    }
    render() {
        const { todos } = this.state;
        console.log(`Всего объектов - ${this.state.todos.length}`);
        return (
            <section>
                <AppNavbar></AppNavbar>
                <CardCreate></CardCreate>
                <TodoList
                    todos={todos}
                    onDone={this.done}
                    onDelete={this.delete}
                    onNotDone={this.notDone}
                />
           </section>
        )
    }
};