import React, { Component } from 'react'
import './App.css';
import BoardList from './components/BoardList/BoardList'
import { connect } from 'react-redux';
import { createBoard, removeBoard, createTaskList, removeTaskList } from './store/actions/boardActionCreator';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TaskLists from './components/TasksLists/TaskLists';

class App extends Component {
  state = {
    newBoardName: '',
    newTaskListName: '',
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
    this.setState({newTaskListName: '' })
  }
  render() {
    const { removeBoard, boards, getBoardById, removeTaskList } = this.props
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' render={() => (<BoardList
              onChangeCreateBoardInput={this.onChangeCreateBoardInput}
              createBoard={this.createBoard}
              removeBoard={removeBoard}
              boards={boards}
            />)} />
            <Route path='/:id' render={((matchProps) => <TaskLists
              {...matchProps}
              onChangeCreateTaskListInput={this.onChangeCreateTaskListInput}
              boards={boards}
              getBoardById={getBoardById}
              createTaskList={this.createTaskList}
              removeTaskList={removeTaskList}
            />)} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default connect(state => ({
  boards: state.boards,
}), { createBoard, removeBoard, createTaskList, removeTaskList})(App);
