import React, { Component } from 'react'
import TaskListCreator from '../TaskListCreator/TaskListCreator'
import './TaskLists.css';
import { Link } from 'react-router-dom'
import SingleTaskList from '../SingleTaskList/SingleTaskList';
import SliderWrapper from '../SliderWrapper/SliderWrapper'
import Modal from '../Modal/Modal';


export default class TaskLists extends Component {
    render() {
        const boardId = this.props.match.params.id;
        const { boards, onChangeCreateTaskListInput, createTaskList, removeTaskList, newTaskListName,
            editTaskList, onChangeEditedTaskListName, editedTaskListName, isEdited, switchIsEdited,
            onChangeEditedBoardId, onChangeEditedTaskListId, newTaskName, onChangeNewTaskName, createTask, removeTask } = this.props;
        const board = boards.filter(board => board.id === +boardId)[0];
        return (
            <React.Fragment>
                <div className="tasklists__title-container">
                    <Link to='/' className="tasklists__title">{board.name}</Link>
                </div>
                <div className='tasklists'>
                    <TaskListCreator
                        onChangeCreateTaskListInput={onChangeCreateTaskListInput}
                        createTaskList={createTaskList}
                        id={boardId}
                        newTaskListName={newTaskListName}
                    />
                    <SliderWrapper>
                        {
                            board.tasklists && board.tasklists.map(tasklist => {
                                return (
                                    <SingleTaskList
                                        boardId={boardId}
                                        key={tasklist.id}
                                        name={tasklist.name}
                                        id={tasklist.id}
                                        removeTaskList={removeTaskList}
                                        switchIsEdited={switchIsEdited}
                                        onChangeEditedBoardId={onChangeEditedBoardId}
                                        onChangeEditedTaskListId={onChangeEditedTaskListId}
                                        newTaskName={newTaskName}
                                        onChangeNewTaskName={onChangeNewTaskName}
                                        createTask={createTask}
                                        boards={boards}
                                        removeTask={removeTask}
                                    />
                                )
                            })
                        }
                    </SliderWrapper>
                </div>
                {
                    <Modal
                        inputValue={editedTaskListName}
                        onClose={switchIsEdited}
                        onChange={onChangeEditedTaskListName}
                        inputPlaceholder="enter new name"
                        editTaskList={editTaskList}
                        isEdited={isEdited}
                    />
                }
            </React.Fragment>
        )
    }
}
