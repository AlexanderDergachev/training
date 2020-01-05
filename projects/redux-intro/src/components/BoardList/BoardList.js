import React from 'react';
import BoardCreator from '../BoardCreator/BoardCreator';
import './BoardList.css';
import { connect } from 'react-redux';

function BoardList(props) {
    const { onChangeCreateBoardInput, boards, addBoard } = props;
    return (
        <div className='board-list'>
            <BoardCreator
                onChangeCreateBoardInput={onChangeCreateBoardInput}
                addBoard={addBoard}
            />
        </div>
    )
}

export default connect(state => ({
    boards: state.boards,
}))(BoardList);