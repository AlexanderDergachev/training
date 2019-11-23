import React, { Component } from 'react'
import BoardCreator from './BoardCreator'
// import initialData from '../initial-data';
export default class BoardsList extends Component {
    state = {
        boards: {},
        boardName: '',
        boardIndex: 0,
        columns: {
            'column-1': {
                id: 'column-1',
                boardsIds: [],
            },
        },
    }
    createTable = (value) => {
        let boardIndex = this.state.boardIndex;
        ++boardIndex;
        this.setState({boardIndex: boardIndex});
        const newBoardName = `board-${boardIndex}`;
        const newBoardsIds = this.state.columns["column-1"].boardsIds;
        newBoardsIds.push(newBoardName);
        const newBoards = this.state.boards;
        newBoards[`${newBoardName}`] = {id: `${newBoardName}`, content: `${value}`};
        const newState = {
            ...this.state,
            boards: newBoards,
            columns: {
                ...this.state.columns,
                'column-1': {
                    ...this.state.columns["column-1"],
                    boardsIds: newBoardsIds,
                }
            }
        }
        this.setState({newState}); 
    }
    render() {
        console.log(this.state);
        
        return (
            <div className="board-list">
                <BoardCreator createTable={this.createTable} />
            </div>
        )
    }
}
