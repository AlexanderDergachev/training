import React, { Component } from 'react'
import './SingleTaskList.css';
import Task from '../Task/Task';

export default class SingleTaskList extends Component {
    confirmEdit = () => {
        const { editTaskList, id, boardId } = this.props;
        this.switchIsEdited();
        editTaskList(id, boardId)
    }
    openEditPanel = () => {
        const { onChangeEditedBoardId, onChangeEditedTaskListId, boardId, id, switchIsEdited } = this.props;
        onChangeEditedBoardId(boardId);
        onChangeEditedTaskListId(id);
        switchIsEdited();
    }
    handleKeyPress = (e) => {
        const { createTask, id, boardId } = this.props;
        if (e.key === 'Enter') {
            createTask(boardId, id);
        }
    }
    render() {
        const { name, id, removeTaskList, boardId, onChangeNewTaskName, newTaskName, boards, removeTask } = this.props;
        const board = boards.filter(board => board.id === +boardId)[0];
        const tasklist = board.tasklists.filter(tasklist => tasklist.id === +id)[0];
        const tasks = tasklist.tasks;
        return (
            <div className='single-tasklist'>
                <h1 className='single-tasklist__title'>{name}</h1>
                <span
                    onClick={() => removeTaskList(boardId, id)}
                    className='single-tasklist__remove-icon'
                >
                    &#x2715;
                </span>
                <span
                    onClick={this.openEditPanel}
                    className='single-tasklist__edit-icon'
                >
                    &#9998;
                </span>
                <hr />
                <input
                    onKeyPress={this.handleKeyPress}
                    onChange={onChangeNewTaskName}
                    value={newTaskName}
                    placeholder='add a task'
                    className="single-tasklist__input" type="text"
                />
                {
                    tasks.map(task => {
                        return (
                            <Task
                                key={task.id}
                                id={task.id}
                                name={task.name}
                                isCompleted={task.isCompleted}
                                removeTask={removeTask}
                                boardId={boardId}
                                tasklistId={id}
                            />
                        )
                    })
                }
            </div>
        )
    }
}
