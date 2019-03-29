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
    getItemsFromLS = () => {
        return JSON.parse(localStorage.getItem('items'));
    }
    setItemsInLS = (value) => {
        localStorage.setItem('items', JSON.stringify(value));
    }
    componentDidMount = () => {
        const items = this.getItemsFromLS();
        if (items != null) {
            this.globalId = items.length === 0 ? 0 : items[items.length - 1].id;
            this.setState(({ todos }) => {
                const newTodos = [
                    ...todos,
                    ...items
                ];
                return {todos: newTodos}
            })
        }
    }
    componentDidUpdate = () => {
        this.setItemsInLS(this.state.todos);
        const items = this.getItemsFromLS();
        this.globalId = items.length === 0 ? 0 : items[items.length - 1].id;
    }
    addNewTodoItem = ({name, text, done}) => {
        const newItem = {
            name: name,
            text: text,
            done: done || null,
            id: ++this.globalId,
        }
        this.setState(({ todos }) => {
            const newTodos = [
                ...todos,
                newItem
            ];
            this.setItemsInLS(newTodos);
            return { todos: newTodos }
        })
    }
    delete = (id) => {
        this.setState(({ todos }) => {
            const index = todos.findIndex((Element) => Element.id === id);
            
            const newTodos = [
                ...todos.slice(0, index),
                ...todos.slice(index + 1)
            ];
            
            return { todos: newTodos };

        });
    }
    notDone = (id) => {
        this.changeDone(false, id);

    }
    done = (id) => {
        this.changeDone(true, id);
    }
    changeDone = (bool, id) => {
        this.setState(({ todos }) => {
            const index = todos.findIndex((Element) => Element.id === id);
            
            const newTodoItem = {
                ...todos[index],
                done: bool,
            };
            
            const newTodos = [
                ...todos.slice(0, index),
                newTodoItem,
                ...todos.slice(index + 1)
            ]
            return { todos: newTodos };

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