import React, { Component } from 'react'
import './App.css';
import BoardList from './components/BoardList/BoardList'
import { connect } from 'react-redux';
import { createBoard, removeBoard, createTaskList, removeTaskList, editTaskList, createTask, removeTask, editTask } from './store/actions/boardActionCreator';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TaskLists from './components/TasksLists/TaskLists';

class App extends Component {
  state = {
    newBoardName: '',
    newTaskListName: '',
    editedTaskListName: '',
    editedTaskListId: '',
    editedBoardId: '',
    isEditedTaskList: false,
    newTaskName: '',
    editedTaskName: '',
    editedTaskId: '',
    isEditedTask: false
  }

  onChangeCreateBoardInput = e => {
    this.setState({
      newBoardName: e.target.value
    })
  }

  onChangeCreateTaskListInput = e => {
    this.setState({
      newTaskListName: e.target.value
    })
  }
  onChangeEditedTaskListName = e => {
    this.setState({
      editedTaskListName: e.target.value
    })
  }
  onChangeEditedTaskListId = value => {
    this.setState({ editedTaskListId: value });
  }

  onChangeEditedBoardId = value => {
    this.setState({ editedBoardId: value });
  }
  onChangeNewTaskName = e => {
    this.setState({ newTaskName: e.target.value });
  }

  onChangeEditedTaskName = e => {
    this.setState({ editedTaskName: e.target.value });
  }

  onChangeEditedTaskId = value => {
    this.setState({ editedTaskId: value });
  }

  createBoard = () => {
    const { createBoard } = this.props;
    const { newBoardName } = this.state;
    createBoard((new Date()).getTime(), newBoardName);
    this.setState({ newBoardName: '' });
  }

  createTaskList = (board_id) => {
    const { createTaskList } = this.props;
    const { newTaskListName } = this.state;
    createTaskList(board_id, (new Date().getTime()), newTaskListName);
    this.setState({ newTaskListName: '' })
  }

  editTaskList = () => {
    const { editTaskList } = this.props;
    const { editedBoardId, editedTaskListId, editedTaskListName } = this.state;
    editTaskList(editedBoardId, editedTaskListId, editedTaskListName);
    this.setState({ editedTaskListName: '' });
  }
  switchIsEdited = () => {
    this.setState({ isEditedTaskList: !this.state.isEditedTaskList });
  }
  createTask = (board_id, tasklist_id) => {
    const { createTask } = this.props;
    const { newTaskName } = this.state;
    createTask(board_id, tasklist_id, (new Date().getTime()), newTaskName, false);
    this.setState({ newTaskName: '' });
  }
  editTask = () => {
    const { editTask } = this.props;
    const { editedBoardId, editedTaskListId, editedTaskId, editedTaskName } = this.state;
    editTask(editedBoardId, editedTaskListId, editedTaskId, editedTaskName);
    this.setState({ editedTaskName: '' });
  }
  switchIsEditedTask = () => {
    this.setState({ isEditedTask: !this.state.isEditedTask });
  }
  render() {
    const { removeBoard, boards, getBoardById, removeTaskList, removeTask } = this.props;
    const { editedTaskListName, isEditedTaskList, newTaskListName, newTaskName, editedTaskName, isEditedTask } = this.state;
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' render={() => (<BoardList
              onChangeCreateBoardInput={this.onChangeCreateBoardInput}
              createBoard={this.createBoard}
              removeBoard={removeBoard}
              boards={boards}
              newBoardName={this.state.newBoardName}
            />)} />
            <Route path='/:id' render={((matchProps) => <TaskLists
              {...matchProps}
              onChangeCreateTaskListInput={this.onChangeCreateTaskListInput}
              onChangeEditedTaskListName={this.onChangeEditedTaskListName}
              boards={boards}
              getBoardById={getBoardById}
              createTaskList={this.createTaskList}
              removeTaskList={removeTaskList}
              editTaskList={this.editTaskList}
              newTaskListName={newTaskListName}
              editedTaskListName={editedTaskListName}
              isEditedTaskList={isEditedTaskList}
              switchIsEdited={this.switchIsEdited}
              onChangeEditedTaskListId={this.onChangeEditedTaskListId}
              onChangeEditedBoardId={this.onChangeEditedBoardId}
              newTaskName={newTaskName}
              onChangeNewTaskName={this.onChangeNewTaskName}
              createTask={this.createTask}
              removeTask={removeTask}
              onChangeEditedTaskName={this.onChangeEditedTaskName}
              editTask={this.editTask}
              editedTaskName={editedTaskName}
              isEditedTask={isEditedTask}
              switchIsEditedTask={this.switchIsEditedTask}
              onChangeEditedTaskId={this.onChangeEditedTaskId}
            />)} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default connect(state => ({
  boards: state.boards,
}), { createBoard, removeBoard, createTaskList, removeTaskList, editTaskList, createTask, removeTask, editTask })(App);
