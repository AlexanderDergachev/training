import React, { Component } from 'react'
import './Task.css';
export default class Task extends Component {
    openIsEditedTaskPanel = () => {
        const { switchIsEditedTask, boardId, tasklistId, id,
            onChangeEditedBoardId, onChangeEditedTaskListId, onChangeEditedTaskId } = this.props;
        onChangeEditedBoardId(boardId);
        onChangeEditedTaskListId(tasklistId);
        onChangeEditedTaskId(id);
        switchIsEditedTask();
    }
    render() {
        const { name, removeTask, boardId, tasklistId, id, completeTask, isCompleted } = this.props;
        // console.log(isCompleted);
        
        return (
            <div className={isCompleted ? "task task__completed" : "task"}>
                <label className="task__checkbox-container">
                    <input checked={isCompleted} onChange={() => completeTask(boardId, tasklistId, id)} type="checkbox" />

                    <span className="task__checkmark"></span>
                </label>
                <div className="task__title">{name}</div>
                <span
                    className='task__icon'
                    onClick={this.openIsEditedTaskPanel}
                >
                    &#9998;
                </span>
                <span
                    onClick={() => removeTask(boardId, tasklistId, id)}
                    className='task__icon'
                >
                    &#x2715;
                </span>
            </div>
        )
    }
}
