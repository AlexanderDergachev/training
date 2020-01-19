import React from 'react';
import BoardCreator from '../BoardCreator/BoardCreator';
import './BoardList.css';
import Board from '../Board/Board';
import '../Board/Board.css';

function BoardList(props) {
    const { onChangeCreateBoardInput, boards, createBoard, removeBoard, newBoardName } = props;
    return (
        <div className='board-list'>
            <BoardCreator
                onChangeInput={onChangeCreateBoardInput}
                onSubmit={createBoard}
                inputValue={newBoardName}
            />
            {
                boards && boards.map(board => {
                    return (
                        <Board
                            removeBoard={removeBoard}
                            id={board.id} key={board.id}
                            name={board.name}>
                        </Board>
                    )
                })
            }
        </div>
    )
}

export default BoardList;