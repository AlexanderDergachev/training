import React, { Component } from 'react'
import Board from './Board'
export default class BoardColumn extends Component {
    render() {
        return (
            <React.Fragment>
                {this.props.boards.map(board => <Board key={board.id} board={board} />)}
            </React.Fragment>
        )
    }
}
