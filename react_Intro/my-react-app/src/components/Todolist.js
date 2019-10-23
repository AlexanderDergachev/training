import React, { Component } from 'react';
import Todoitem from './Todoitem';

export default class Todolist extends Component {
    render() {
        return (
            <div>
                <Todoitem />
                <Todoitem />
                <Todoitem />
            </div>
        )
    }
}
