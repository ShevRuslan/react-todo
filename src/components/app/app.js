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
    render () {
        return (
            <section>
                <AppNavbar></AppNavbar>
                <CardCreate></CardCreate>
                <TodoList></TodoList>
           </section>
        )
    }
};