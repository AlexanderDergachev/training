import React, { Component } from 'react'
import './SingleTaskList.css';

export default class SingleTaskList extends Component {
    state = {
        hover: false
    }
    switchHover = () => {
        this.setState({ hover: !this.state.hover })
    }
    render() {
        const { name, id, removeTaskList, boardId } = this.props;
        return (
            <div
                onMouseEnter={this.switchHover}
                onMouseLeave={this.switchHover}
                className='single-tasklist'>
                <h1 className='single-tasklist__title'>{name}</h1>
                <span
                    onClick={() => { if (window.confirm('This list will be deleted')) removeTaskList(boardId, id)}}
                    className={this.state.hover ? 'single-tasklist__remove-icon visible' : 
                    'single-tasklist__remove-icon hidden'}>
                    &#x2715;
                </span>
            </div>
        )
    }
}
