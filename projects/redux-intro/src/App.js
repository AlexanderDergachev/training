import React, { Component } from 'react'
import './App.css';
import BoardList from './components/BoardList/BoardList'
import { connect } from 'react-redux';
import { createBoard, removeBoard } from './store/actions/actionCreator';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  state = {
    newBoardName: '',
  }

  onChangeCreateBoardInput = e => {
    this.setState({
      newBoardName: e.target.value
    })
  }

  createBoard = () => {
    const { createBoard } = this.props;
    const { newBoardName } = this.state;
    createBoard((new Date()).getTime(), newBoardName);
    this.setState({ newBoardName: '' });
  }

  render() {
    const { removeBoard, boards } = this.props
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path='/' render={() => (<BoardList
              onChangeCreateBoardInput={this.onChangeCreateBoardInput}
              createBoard={this.createBoard}
              removeBoard={removeBoard}
              boards={boards}
            />)} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default connect(state => ({
  boards: state.boards,
}), { createBoard, removeBoard })(App);
