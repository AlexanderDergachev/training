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
            editTaskList, onChangeEditedTaskListName, editedTaskListName, isEditedTaskList, switchIsEdited,
            onChangeEditedBoardId, onChangeEditedTaskListId, newTaskName, onChangeNewTaskName, createTask,
            removeTask, onChangeEditedTaskName, editTask, editedTaskName, switchIsEditedTask, isEditedTask,
            onChangeEditedTaskId, completeTask } = this.props;
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
                                        isCompleted={tasklist.isCompleted}
                                        removeTaskList={removeTaskList}
                                        switchIsEdited={switchIsEdited}
                                        onChangeEditedBoardId={onChangeEditedBoardId}
                                        onChangeEditedTaskListId={onChangeEditedTaskListId}
                                        newTaskName={newTaskName}
                                        onChangeNewTaskName={onChangeNewTaskName}
                                        createTask={createTask}
                                        boards={boards}
                                        removeTask={removeTask}
                                        onChangeEditedTaskName={onChangeEditedTaskName}
                                        editTask={editTask}
                                        switchIsEditedTask={switchIsEditedTask}
                                        onChangeEditedTaskId={onChangeEditedTaskId}
                                        completeTask={completeTask}
                                    />
                                )
                            })
                        }
                    </SliderWrapper>
                </div>
                {
                    <>
                        <Modal
                            inputValue={editedTaskListName}
                            onClose={switchIsEdited}
                            onChange={onChangeEditedTaskListName}
                            inputPlaceholder="enter new list name"
                            editTaskList={editTaskList}
                            isEdited={isEditedTaskList}
                        />
                        <Modal
                            inputValue={editedTaskName}
                            onClose={switchIsEditedTask}
                            onChange={onChangeEditedTaskName}
                            inputPlaceholder="enter new task name"
                            editFoo={editTask}
                            isEdited={isEditedTask}
                        />
                    </>
                }
                {

                }
            </React.Fragment>
        )
    }
}
