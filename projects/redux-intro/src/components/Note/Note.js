import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Note.css'

export default class Note extends Component {
    openEditPanel = () => {
        const { onChangeEditedNoteId, switchIsEditedNote, id } = this.props;
        onChangeEditedNoteId(id);
        switchIsEditedNote();
    }
    render() {
        const { id, name, removeNote} = this.props;
        return (
            <div className='note'>
                <Link className='note__link' to={`/note/${id}`}>{name}</Link>
                <span
                    className='note__icon'
                    onClick={this.openEditPanel}
                >
                    &#9998;
                    </span>
                <span
                    onClick={() => removeNote(id)}
                    className='note__icon'
                >
                    &#x2715;
                    </span>
            </div>
        )
    }
}


