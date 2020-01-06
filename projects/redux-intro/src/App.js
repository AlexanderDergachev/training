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

  addBoard = () => {
    const { createBoard, boards } = this.props;
    const { newBoardName } = this.state;
    const id = (new Date()).getTime();
    createBoard(id, newBoardName);
    localStorage.setItem('boards', JSON.stringify([...boards, {id: id, name: newBoardName}]));
    this.setState({newBoardName: ''});
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
