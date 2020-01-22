import React from 'react';
import Creator from '../Creator/Creator';
import './BoardList.css';
import Board from '../Board/Board';
import '../Board/Board.css';
import Modal from '../Modal/Modal';
import Note from '../Note/Note';

function BoardList(props) {
    const { onChangeCreateBoardInput, boards, createBoard, removeBoard, newBoardName, editBoard, isEditedBoard,
        onChangeEditedBoardId, newNoteName, onChangeCreateNoteInput, createNote, onChangeEditedBoardName,
        switchIsEditedBoard, editedBoardName, notes, removeNote, editNote, onChangeEditedNoteName, onChangeEditedNoteId,
        switchIsEditedNote, isEditedNote, editedNoteName } = props;
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
                            switchIsEdited={switchIsEditedBoard}
                            onChangeEditedBoardId={onChangeEditedBoardId}
                        />
                    )
                })
            }
            {
                notes && notes.map(note => {
                    return (
                        <Note
                            id={note.id} key={note.id}
                            name={note.name}
                            removeNote={removeNote}
                            onChangeEditedNoteId={onChangeEditedNoteId}
                            switchIsEditedNote={switchIsEditedNote}
                        />
                    )
                })
            }
            <Modal
                inputValue={editedBoardName}
                onClose={switchIsEditedBoard}
                onChange={onChangeEditedBoardName}
                inputPlaceholder="enter new name"
                editFoo={editBoard}
                isEdited={isEditedBoard}
            />
            <Modal
                inputValue={editedNoteName}
                onClose={switchIsEditedNote}
                onChange={onChangeEditedNoteName}
                inputPlaceholder="enter new name"
                editFoo={editNote}
                isEdited={isEditedNote}
            />
        </div>
    )
}

export default BoardList;