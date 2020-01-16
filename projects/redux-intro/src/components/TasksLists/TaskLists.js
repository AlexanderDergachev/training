import React, { Component } from 'react'
import TaskListCreator from '../TaskListCreator/TaskListCreator'
import './TaskLists.css';
import {Link} from 'react-router-dom'
import SingleTaskList from '../SingleTaskList/SingleTaskList';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";
import EditPanel from '../EditPanel/EditPanel';

export default class TaskLists extends Component {
    render() {
        const boardId = this.props.match.params.id;
        const { boards, onChangeCreateTaskListInput, createTaskList, removeTaskList, newTaskListName, 
                editTaskList, onChangeEditedTaskListName, editedTaskListName, isEdited, switchIsEdited, 
                onChangeEditedBoardId, onChangeEditedTaskListId } = this.props;
        const board = boards.filter(board => board.id === +boardId)[0];
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
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
                    <Slider {...settings} className="tasklists__carousel">
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
                                    />
                                )
                            })
                        }
                    </Slider>
                </div>
                <EditPanel 
                    isEdited={isEdited}
                    switchIsEdited={switchIsEdited}
                    editedTaskListName={editedTaskListName}
                    onChangeEditedTaskListName={onChangeEditedTaskListName}
                    editTaskList={editTaskList}
                />
            </React.Fragment>
        )
    }
}
