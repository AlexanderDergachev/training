import React from 'react';
import Creator from '../Creator/Creator';
import './BoardList.css';
import Board from '../Board/Board';
import '../Board/Board.css';
import Modal from '../Modal/Modal';

function BoardList(props) {
    const { onChangeCreateBoardInput, boards, createBoard, removeBoard, newBoardName, editBoard, isEditedBoard, onChangeEditedBoardId,
        newNoteName, onChangeCreateNoteInput, createNote, onChangeEditedBoardName, switchIsEdited, editedBoardName } = props;
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
                            name={board.name}
                            switchIsEdited={switchIsEdited}
                            onChangeEditedBoardId={onChangeEditedBoardId}
                        />
                    )
                })
            }
            <Modal
                inputValue={editedBoardName}
                onClose={switchIsEdited}
                onChange={onChangeEditedBoardName}
                inputPlaceholder="enter new name"
                editFoo={editBoard}
                isEdited={isEditedBoard}
            />
        </div>
    )
}

export default BoardList;