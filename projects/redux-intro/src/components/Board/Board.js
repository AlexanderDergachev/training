import React from 'react';
import './Board.css';
import { Link } from 'react-router-dom';

class Board extends React.Component {
    openEditPanel = () => {
        const { onChangeEditedBoardId, id, switchIsEdited } = this.props;
        onChangeEditedBoardId(id);
        switchIsEdited();
    }
    render() {
        const { name, id, removeBoard } = this.props
        return (
            <div className='board'>
                <Link className='board__link' to={`/${id}`}>{name}</Link>
                <span
                    className='board__icon'
                    onClick={this.openEditPanel}
                >
                    &#9998;
                </span>
                <span
                    onClick={() => removeBoard(id)}
                    className='board__icon'
                >
                    &#x2715;
                </span>
            </div>
        )
    }
}

export default Board;