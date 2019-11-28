import React, { Component } from 'react'
import BoardCreator from './BoardCreator'
import BoardColumn from './BoardColumn';
import uuid from 'uuid';
import { DragDropContext } from 'react-beautiful-dnd';
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
        columnOrder: ['column-1'],
    }
    onDragEnd = result => {
        
    }
    componentDidMount() {
        // let newState = JSON.parse(localStorage.getItem('newState'));
        let boards = JSON.parse(localStorage.getItem('boards'));
        let boardsIds = JSON.parse(localStorage.getItem('boardsIds'));
        let boardIndex = JSON.parse(localStorage.getItem('boardIndex'));
        if (boards && boardsIds) {
            this.setState({
                boards: boards,
                boardIndex: boardIndex,
                columns: {
                    'column-1': {
                        id: 'column-1',
                        boardsIds: boardsIds,
                    },
                }
            });
        }
    }
    createTable = (value) => {
        let boardIndex = this.state.boardIndex;
        ++boardIndex;
        this.setState({ boardIndex: boardIndex });
        const newBoardName = `board-${boardIndex}`;
        const newBoardsIds = this.state.columns["column-1"].boardsIds;
        newBoardsIds.push(newBoardName);
        const newBoards = this.state.boards;
        newBoards[`${newBoardName}`] = { id: uuid(), content: `${value}` };
        const newState = {
            ...this.state,
            boards: newBoards,
            boardIndex: boardIndex,
            columns: {
                ...this.state.columns,
                'column-1': {
                    ...this.state.columns["column-1"],
                    boardsIds: newBoardsIds,
                }
            },
            columnOrder: ['column-1'],
        }
        localStorage.setItem('boards', JSON.stringify(newState.boards));
        localStorage.setItem('boardsIds', JSON.stringify(newState.columns["column-1"].boardsIds));
        localStorage.setItem('boardIndex', JSON.stringify(newState.boardIndex));


        this.setState({ newState });
    }
    render() {
        console.log(this.state);

        return (
            <div className="board-list">
                <DragDropContext
                    onDragEnd={this.onDragEnd}
                >
                    <BoardCreator createTable={this.createTable} />
                    {
                        this.state.columnOrder.map(columnId => {
                            const column = this.state.columns[columnId];
                            const boards = column.boardsIds.map(boardId => this.state.boards[boardId]);

                            return <BoardColumn key={column.id} column={column} boards={boards} />
                        })
                    }
                </DragDropContext>
            </div>
        )
    }
}
