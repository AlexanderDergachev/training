import React from 'react';
import BoardCreator from '../BoardCreator/BoardCreator';
import './BoardList.css';
import Board from '../Board/Board';
import '../Board/Board.css';
import { connect } from 'react-redux';

function BoardList(props) {
    const { onChangeCreateBoardInput, boards, addBoard } = props;
    return (
        <div className='board-list'>
            <BoardCreator
                onChangeCreateBoardInput={onChangeCreateBoardInput}
                addBoard={addBoard}
            />
            {
                boards && boards.map(board => {
                    return ( 
                        <Board key={board.id} name={board.name}></Board>
                    )
                })
            }
        </div>
    )
}

export default connect(state => ({
    boards: state.boards,
}))(BoardList);