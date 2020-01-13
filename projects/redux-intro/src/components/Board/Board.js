import React from 'react';
import './Board.css';
import { Link } from 'react-router-dom';


class Board extends React.Component {
    state = {
        hover: false
    }
    switchHover = () => {
        this.setState({ hover: !this.state.hover })
    }
    render() {
        const { name, id, removeBoard } = this.props
        return (
            <div className='board' onMouseEnter={this.switchHover} onMouseLeave={this.switchHover}>
                <Link className='board__link' to={`/${id}`}>{name}</Link>
                <span
                    onClick={() => removeBoard(id)}
                    className={this.state.hover ? 'board__icon visible' : 'board__icon hidden'}>
                    &#x2715;
                </span>
            </div>
        )
    }
}

export default Board;