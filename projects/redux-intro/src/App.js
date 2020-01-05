import React, { Component } from 'react'
import './App.css';
import BoardList from './components/BoardList/BoardList'

import { connect } from 'react-redux';
import { createBoard } from './actions/actionCreator';

class App extends Component {
  state = {
    newBoardName: '',
  }

  onChangeCreateBoardInput = e => {
    this.setState({
      newBoardName: e.target.value
    })

  }

  addBoard = (value) => {
    const { createBoard } = this.props;
    createBoard(this.state.newBoardName);
    console.log('addBoard в App.js сработал');
  }
  render() {
    return (
      <div>
        <BoardList
          onChangeCreateBoardInput={this.onChangeCreateBoardInput}
          addBoard={this.addBoard}
        />
      </div>
    )
  }
}

export default connect(state => ({
  boards: state.boards,
}), { createBoard })(App);
