import React, { Component } from 'react';
import AppNavbar from '../app-navbar';
import CardCreate from '../cart-create';
import TodoList from '../todo-list';


export default class App extends Component {
    globalId = null;

    state = {
        todos: [],
        search: ''
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
        console.log(this.globalId);
        this.setState(({ todos }) => {
            const newTodos = [
                ...todos,
                newItem
            ];
            localStorage.setItem('items', JSON.stringify(newTodos));
            return {
                todos: newTodos,
            }
        })
    }
    componentDidMount = () => {
        const items = JSON.parse(localStorage.getItem('items'));
        this.globalId = items.length === 0 ? 0 : items[items.length - 1].id;
        console.log(this.globalId);
        if (items != null) {
            this.setState(({ todos }) => {
                const newTodos = [
                    ...todos,
                    ...items
                ];
                return {
                    todos: newTodos,
                }
            })
        }
    }
    componentDidUpdate = () => {
        localStorage.setItem('items', JSON.stringify(this.state.todos));
        const items = JSON.parse(localStorage.getItem('items'));
        this.globalId = items.length === 0 ? 0 : items[items.length - 1].id;
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
    searchInput = (search) => {
        this.setState({ search });
    }
    search = (items, search) => {
        if (search.length === 0) { return items };
        return items.filter((item) => {
            return item.text.toLowerCase().indexOf(search.toLowerCase()) > -1;
        })
    }
    render() {
        const { todos, search} = this.state;
        const items = this.search(todos, search);
        return (
            <section>
                <AppNavbar
                    onSearch={this.searchInput}
                ></AppNavbar>
                <CardCreate
                    onAdd={this.addNewTodoItem}
                ></CardCreate>
                <TodoList
                    todos={items}
                    onDone={this.done}
                    onDelete={this.delete}
                    onNotDone={this.notDone}
                />
           </section>
        )
    }
};