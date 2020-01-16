import React, { Component } from 'react'
import './App.css';
import BoardList from './components/BoardList/BoardList'
import { connect } from 'react-redux';
import { createBoard, removeBoard, createTaskList, removeTaskList, editTaskList } from './store/actions/boardActionCreator';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TaskLists from './components/TasksLists/TaskLists';

class App extends Component {
  state = {
    newBoardName: '',
    newTaskListName: '',
    editedTaskListName: '',
    editedTaskListId: '',
    editedBoardId: '',
    isEdited: false
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

  createBoard = () => {
    const { createBoard } = this.props;
    const { newBoardName } = this.state;
    createBoard((new Date()).getTime(), newBoardName);
    this.setState({ newBoardName: '' });
  }

  createTaskList = (board_id) => {
    const { createTaskList } = this.props;
    const { newTaskListName, editedTaskListIndex } = this.state;
    createTaskList(board_id, (new Date().getTime()), newTaskListName, editedTaskListIndex);
    this.setState({ newTaskListName: '' })
    this.setState({editedTaskListIndex: 0})
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

  render() {
    const { removeBoard, boards, getBoardById, removeTaskList } = this.props;
    const {editedTaskListName, isEdited, newTaskListName } = this.state;
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
            />)} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default connect(state => ({
  boards: state.boards,
}), { createBoard, removeBoard, createTaskList, removeTaskList, editTaskList})(App);
