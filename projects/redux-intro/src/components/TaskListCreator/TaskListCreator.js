import React, { Component } from 'react'
import './TaskListCreator.css'

export default class TaskListCreator extends Component {
    inputRef = React.createRef();

    handleKeyPress = (e) => {
        const { createTaskList, id } = this.props;
        if (e.key === 'Enter') {
            createTaskList(id);
            this.inputRef.current.focus();
        }
    }
    render() {
        const { onChangeCreateTaskListInput, newTaskListName } = this.props;
        return (
            <div className='tasklist-creator'>
                <input
                    placeholder='add a list'
                    type="text"
                    className="tasklist-creator__input"
                    onChange={onChangeCreateTaskListInput}
                    onKeyPress={this.handleKeyPress}
                    ref={this.inputRef}
                    value={newTaskListName}
                />
            </div>
        )
    }

}
