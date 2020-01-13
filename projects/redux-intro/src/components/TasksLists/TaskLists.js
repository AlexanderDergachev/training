import React, { Component } from 'react'
import TaskListCreator from '../TaskListCreator/TaskListCreator'
import './TaskLists.css';

export default class TaskLists extends Component {
    render() {
        const boardId = this.props.match.params.id;
        const { boards, onChangeCreateTaskListInput, createTaskList } = this.props;
        const board = boards.filter(board => board.id === +boardId)[0];
        return (
            <React.Fragment>
                <h1 className="tasklists__title">{board.name}</h1>
                <div className='tasklists'>
                    <TaskListCreator
                        onChangeCreateTaskListInput={onChangeCreateTaskListInput}
                        createTaskList={createTaskList}
                        id={boardId}
                    />
                </div>
            </React.Fragment>
        )
    }
}
