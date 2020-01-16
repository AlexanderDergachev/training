import React, { Component } from 'react'
import './SingleTaskList.css';

export default class SingleTaskList extends Component {
    state = {
        hover: false,
    }

    switchHover = () => {
        this.setState({ hover: !this.state.hover })
    }

    confirmEdit = () => {
        const { editTaskList, id, boardId } = this.props;
        this.switchIsEdited();
        editTaskList(id, boardId)
    }
    openEditPanel = () => {
        const {onChangeEditedBoardId, onChangeEditedTaskListId, boardId, id, switchIsEdited} = this.props;
        onChangeEditedBoardId(boardId);
        onChangeEditedTaskListId(id);
        switchIsEdited();
    }
    render() {
        const { name, id, removeTaskList, boardId } = this.props;
        return (
            <React.Fragment>
                <div
                    onMouseEnter={this.switchHover}
                    onMouseLeave={this.switchHover}
                    className='single-tasklist'>
                    <h1 className='single-tasklist__title'>{name}</h1>
                    <span
                        onClick={() => { if (window.confirm('This list will be deleted')) removeTaskList(boardId, id) }}
                        className={this.state.hover ? 'single-tasklist__remove-icon visible' :
                            'single-tasklist__remove-icon hidden'}>
                        &#x2715;
                    </span>
                    <span
                        onClick={this.openEditPanel}
                        className={this.state.hover ? 'single-tasklist__edit-icon visible' :
                            'single-tasklist__edit-icon hidden'}
                    >
                        &#9998;
                    </span>
                </div>

            </React.Fragment>
        )
    }
}
