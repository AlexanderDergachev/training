import React, { Component } from 'react'

export default class Board extends Component {
    render() {
        return (
            <div className="board">
                <h3 className="board__content">{this.props.board.content}</h3>
            </div>
        )
    }
}
