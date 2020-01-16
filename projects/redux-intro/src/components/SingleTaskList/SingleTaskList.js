import React, { Component } from 'react'
import './SingleTaskList.css';

export default class SingleTaskList extends Component {
    state = {
        hover: false,
        isEdited: false
    }

    switchHover = () => {
        this.setState({ hover: !this.state.hover })
    }
    switchIsEdited = () => {
        this.setState({ isEdited: !this.state.isEdited });
    }
    confirmEdit = () => {
        const { editTaskList, id, boardId } = this.props;
        this.switchIsEdited();
        editTaskList(id, boardId)
    }
    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            const { editTaskList, id, boardId } = this.props;
            this.switchIsEdited();
            editTaskList(id, boardId)
        }
    }

    render() {
        const { name, id, removeTaskList, boardId, onChangeEditedTaskListName, editedTaskListName } = this.props;
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
                        onClick={this.switchIsEdited}
                        className={this.state.hover ? 'single-tasklist__edit-icon visible' :
                            'single-tasklist__edit-icon hidden'}
                    >
                        &#9998;
                    </span>
                    {
                        this.state.isEdited && (
                            <div className="single-tasklist__edit">
                                <input onKeyPress={this.handleKeyPress}
                                    value={editedTaskListName}
                                    onChange={onChangeEditedTaskListName}
                                    placeholder="Enter new name"
                                    className="single-tasklist__edit-input" type="text" />
                                <div className="single-tasklist__edit-button-container">
                                    <button
                                        onClick={this.switchIsEdited}
                                        className="single-tasklist__edit-close">Close</button>
                                    <button
                                        onClick={this.confirmEdit}
                                        className="single-tasklist__edit-rename">Rename</button>
                                </div>
                            </div>
                        )
                    }
                </div>

            </React.Fragment>
        )
    }
}
