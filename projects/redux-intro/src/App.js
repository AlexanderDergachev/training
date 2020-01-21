import React, { Component } from 'react'
import './App.css';
import BoardList from './components/BoardList/BoardList'
import { connect } from 'react-redux';
import { createBoard, removeBoard, editBoard, createTaskList, removeTaskList, editTaskList, createTask, removeTask, editTask, completeTask } from './store/actions/boardActionCreator';
import { createNote } from './store/actions/noteActionCreator'
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
    isEditedTask: false,
    isEditedBoard: false,
    newNoteName: '',
    editedBoardName: '',
  }

  onChangeCreateBoardInput = e => {
    this.setState({
      newBoardName: e.target.value
    })
  }

  onChangeCreateNoteInput = e => {
    this.setState({
      newNoteName: e.target.value
    })
  }

  onChangeEditedBoardName = e => {
    this.setState({
      editedBoardName: e.target.value
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

  editBoard = () => {
    const { editBoard } = this.props;
    const { editedBoardName, editedBoardId } = this.state;
    editBoard(editedBoardId, editedBoardName);
    this.setState({editedBoardName: ''});
  }

  createBoard = () => {
    const { createBoard } = this.props;
    const { newBoardName } = this.state;
    if (newBoardName.length > 0) {
      createBoard((new Date()).getTime(), newBoardName);
      this.setState({ newBoardName: '' });
    }
  }

  createTaskList = (board_id) => {
    const { createTaskList } = this.props;
    const { newTaskListName } = this.state;
    if (newTaskListName.length > 0) {
      createTaskList(board_id, (new Date().getTime()), newTaskListName);
      this.setState({ newTaskListName: '' })
    }
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
  switchIsEditedBoard = () => {
    this.setState({ isEditedBoard: !this.state.isEditedBoard });
  }
  createTask = (board_id, tasklist_id) => {
    const { createTask } = this.props;
    const { newTaskName } = this.state;
    if (newTaskName.length > 0) {
      createTask(board_id, tasklist_id, (new Date().getTime()), newTaskName, false);
      this.setState({ newTaskName: '' });
    }
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
  createNote = () => {
    const { createNote } = this.props;
    const { newNoteName } = this.state;
    if (newNoteName.length > 0) {
      createNote((new Date()).getTime(), newNoteName);
      this.setState({ newNoteName: '' });
    }
  }
  render() {
    const { removeBoard, boards, getBoardById, removeTaskList, removeTask, completeTask} = this.props;
    const { editedTaskListName, isEditedTaskList, newTaskListName, newTaskName, editedTaskName,
      isEditedTask, newNoteName, newBoardName, editedBoardName, isEditedBoard } = this.state;
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' render={() => (<BoardList
              onChangeCreateBoardInput={this.onChangeCreateBoardInput}
              createBoard={this.createBoard}
              removeBoard={removeBoard}
              boards={boards}
              newBoardName={newBoardName}
              onChangeCreateNoteInput={this.onChangeCreateNoteInput}
              newNoteName={newNoteName}
              createNote={this.createNote}
              onChangeEditedBoardName={this.onChangeEditedBoardName}
              switchIsEdited={this.switchIsEditedBoard}
              editedBoardName={editedBoardName}
              editBoard={this.editBoard}
              isEditedBoard={isEditedBoard}
              onChangeEditedBoardId={this.onChangeEditedBoardId}
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
              completeTask={completeTask}
            />)} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default connect(state => ({
  boards: state.boards,
  notes: state.notes
}), { createBoard, removeBoard, editBoard, createTaskList, removeTaskList, editTaskList, createTask, removeTask, editTask, completeTask, createNote })(App);
