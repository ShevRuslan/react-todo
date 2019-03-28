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
                done: null,
                id: 1,
            },
            {
                name: 2,
                text: 2,
                done: null,
                id: 2,
            },
            {
                name: 3,
                text: 3,
                done: null,
                id: 3,
            },
       ]
    }
    done = (id) => {
        this.setState(({ todos }) => {
            const index = todos.findIndex((Element) => Element.id === id);
            
            const oldTodoItem = todos[index];
            const newTodoItem = {
                ...oldTodoItem,
                done: true,
            };
            
            const newTodos = [
                ...todos.slice(0, index),
                newTodoItem,
                ...todos.slice(index + 1)
            ]
            console.log(newTodos);
            return {
                todos: newTodos
            };

        });
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
        this.setState(({ todos }) => {
            const index = todos.findIndex((Element) => Element.id === id);
            
            const oldTodoItem = todos[index];
            const newTodoItem = {
                ...oldTodoItem,
                done: false,
            };
            
            const newTodos = [
                ...todos.slice(0, index),
                newTodoItem,
                ...todos.slice(index + 1)
            ]
            
            return {
                todos: newTodos
            };

        });
    }
    render() {
        const { todos } = this.state;
        console.log(todos);
        console.log(`Всего объектов - ${todos.length}`);
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