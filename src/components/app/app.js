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
    globalId = 1;

    state = {
        todos: [
            {
                name: 1,
                text: 1,
                done: null,
                id: this.globalId,
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
    addNewTodoItem = (option) => {
        const newItem = {
            name: option.name,
            text: option.text,
            done: option.done || null,
            id: ++this.globalId,
        }
        this.setState(({ todos }) => {
            const newTodos = [
                ...todos,
                newItem
            ];
            return {
                todos: newTodos,
            }
        })
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
                <CardCreate
                    onAdd={this.addNewTodoItem}
                ></CardCreate>
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