import React from 'react';
import Creator from '../Creator/Creator';
import './BoardList.css';
import Board from '../Board/Board';
import '../Board/Board.css';

function BoardList(props) {
    const { onChangeCreateBoardInput, boards, createBoard, removeBoard, newBoardName,
        newNoteName, onChangeCreateNoteInput, createNote } = props;
    return (
        <div className='board-list'>
            <Creator
                onChangeInput={onChangeCreateBoardInput}
                onSubmit={createBoard}
                inputValue={newBoardName}
                title={'Creating a board'}
                subtitle={'How we can call your board?'}
                mainTitle={'New board'}
            />
            <Creator
                onChangeInput={onChangeCreateNoteInput}
                onSubmit={createNote}
                inputValue={newNoteName}
                title={'Creating a note'}
                subtitle={'How we can call your note?'}
                mainTitle={'New note'}
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