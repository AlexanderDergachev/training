import React from 'react';
import './Board.css';

function Board(props) {
    const { name } = props
    return (
        <div className='board'>
            {name}
        </div>
    )
}

export default Board;