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
    editedTaskListIndex: 0
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
    const { newTaskListName, editedTaskListIndex } = this.state;
    createTaskList(board_id, (new Date().getTime()), newTaskListName, editedTaskListIndex);
    this.setState({ newTaskListName: '' })
    this.setState({editedTaskListIndex: 0})
  }
  editTaskList = (id, name, board_id) => {
    this.setState({ newTaskListName: name })
    const { boards, removeTaskList } = this.props;
    boards.forEach(board => {
      board.tasklists.forEach(tasklist => {
        if (tasklist.id === id) {
          this.setState({editedTaskListIndex: board.tasklists.indexOf(tasklist)});
          removeTaskList(board_id, id);
        }
      })

    })
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
              newBoardName={this.state.newBoardName}
            />)} />
            <Route path='/:id' render={((matchProps) => <TaskLists
              {...matchProps}
              onChangeCreateTaskListInput={this.onChangeCreateTaskListInput}
              boards={boards}
              getBoardById={getBoardById}
              createTaskList={this.createTaskList}
              removeTaskList={removeTaskList}
              editTaskList={this.editTaskList}
              newTaskListName={this.state.newTaskListName}
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
