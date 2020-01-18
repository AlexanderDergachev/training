import React from 'react';
import './Board.css';
import { Link } from 'react-router-dom';


class Board extends React.Component {
    render() {
        const { name, id, removeBoard } = this.props
        return (
            <div className='board'>
                <Link className='board__link' to={`/${id}`}>{name}</Link>
                <span
                    onClick={() => removeBoard(id)}
                    className='board__icon visible'
                >
                    &#x2715;
                </span>
            </div>
        )
    }
}

export default Board;