import React, { Component } from 'react'
import edit from '../icons/edit.svg'
import remove from '../icons/remove.svg'
export default class Todoitem extends Component {
    render() {
        const {title, handleDelete, handleEdit} = this.props
        return (
            <div className="main-item">
                <span>{title}</span>
                <img className="edit-icon" src={edit} alt={edit} onClick={handleEdit}/>
                <img className="remove-icon" src={remove} alt={remove} onClick={handleDelete}/>
            </div>
        )
    }
}
