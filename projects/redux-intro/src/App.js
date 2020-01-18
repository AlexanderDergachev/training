import React, { Component } from 'react'
import './App.css';
import BoardList from './components/BoardList/BoardList'
import { connect } from 'react-redux';
import { createBoard, removeBoard, createTaskList, removeTaskList, editTaskList, createTask, removeTask } from './store/actions/boardActionCreator';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TaskLists from './components/TasksLists/TaskLists';

class App extends Component {
  state = {
    newBoardName: '',
    newTaskListName: '',
    editedTaskListName: '',
    editedTaskListId: '',
    editedBoardId: '',
    isEdited: false,
    newTaskName: '',
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
    this.setState({editedTaskListId: value});
  }

  onChangeEditedBoardId = value => {
    this.setState({editedBoardId: value});
  }
  onChangeNewTaskName = e => {
    this.setState({newTaskName: e.target.value});
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
    this.setState({ newTaskListName: '' })
    const { editTaskList } = this.props;
    const {editedBoardId, editedTaskListId, editedTaskListName} = this.state;
    editTaskList(editedBoardId, editedTaskListId, editedTaskListName);
    this.setState({editedTaskListName: ''});
  }
  switchIsEdited = () => {
    this.setState({ isEdited: !this.state.isEdited });
  }
  createTask = (board_id, tasklist_id) => {
    const { createTask } = this.props;
    const { newTaskName } = this.state;
    createTask(board_id, tasklist_id, (new Date().getTime()), newTaskName, false);
    this.setState({newTaskName: ''});
  }
  render() {
    const { removeBoard, boards, getBoardById, removeTaskList, removeTask } = this.props;
    const {editedTaskListName, isEdited, newTaskListName, newTaskName } = this.state;
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
              isEdited={isEdited}
              switchIsEdited={this.switchIsEdited}
              onChangeEditedTaskListId={this.onChangeEditedTaskListId}
              onChangeEditedBoardId={this.onChangeEditedBoardId}
              newTaskName={newTaskName}
              onChangeNewTaskName={this.onChangeNewTaskName}
              createTask={this.createTask}
              removeTask={removeTask}
            />)} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default connect(state => ({
  boards: state.boards,
}), { createBoard, removeBoard, createTaskList, removeTaskList, editTaskList, createTask, removeTask})(App);
