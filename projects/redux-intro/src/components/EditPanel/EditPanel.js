import React, { Component } from 'react'
import './EditPanel.css'
export default class EditPanel extends Component {
    confirmEdit = () => {
        const { editTaskList, switchIsEdited } = this.props;
        switchIsEdited();
        editTaskList();
    }
    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            const { editTaskList, switchIsEdited } = this.props;
            switchIsEdited();
            editTaskList();
        }
    }
    render() {
        const { isEdited, switchIsEdited, editedTaskListName, onChangeEditedTaskListName} = this.props;
        return (
            <React.Fragment>
                {
                    isEdited && (
                        <div className="edit-panel">
                            <input onKeyPress={this.handleKeyPress}
                                value={editedTaskListName}
                                onChange={onChangeEditedTaskListName}
                                placeholder="Enter new name"
                                className="edit-panel__input" type="text" />
                            <div className="edit-panel__button-container">
                                <button
                                    onClick={switchIsEdited}
                                    className="edit-panel__close">Close</button>
                                <button
                                    onClick={this.confirmEdit}
                                    className="edit-panel__rename">Rename</button>
                            </div>
                        </div>
                    )
                }
            </React.Fragment>
        )
    }
}
