import React, { Component } from 'react'
import './Task.css';
export default class Task extends Component {
    render() {
        const { name, removeTask, boardId, tasklistId, id } = this.props;
        return (
            <div className="task">
                <label className="task__checkbox-container">
                    <input type="checkbox" />
                    <span className="task__checkmark"></span>
                </label>
                <div className="task__title">{name}</div>
                <span className='task__edit-icon'>
                    &#9998;
                </span>
                <span
                    onClick={() => removeTask(boardId, tasklistId, id)}
                    className='task__remove-icon'
                >
                    &#x2715;
                </span>
            </div>
        )
    }
}
