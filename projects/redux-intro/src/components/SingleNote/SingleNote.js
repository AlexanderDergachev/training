import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './SingleNote.css';

export default class SingleNote extends Component {
    state = {
        editedText: ''
    }
    componentDidMount() {
        const { switchIsEditedNoteText, notes } = this.props;
        const noteId = this.props.match.params.id;
        const note = notes.filter(note => note.id === +noteId)[0];
        if (note.text.length < 1) {
            switchIsEditedNoteText();
        }
        this.setState({editedText: note.text});
    }
    onChangeEditedText = e => {
        this.setState({ editedText: e.target.value })
    }
    onSubmit = (id, text) => {
        const { editNoteText, switchIsEditedNoteText } = this.props;
        if (text.length > 0) {
            editNoteText(id, text);
            switchIsEditedNoteText();
        }
    }
    render() {
        const noteId = this.props.match.params.id;
        const { notes, isEditedNoteText, switchIsEditedNoteText } = this.props;
        const { editedText } = this.state;
        const note = notes.filter(note => note.id === +noteId)[0];
        return (
            <div className="single-note">
                <Link className="single-note__link" to='/'>{note.name}</Link>
                {
                    isEditedNoteText  && (
                        <>
                            <textarea
                                onChange={this.onChangeEditedText}
                                value={editedText}
                                className="single-note__text-editor"
                                placeholder={`type something\ndouble click to edit`}
                            />
                            <button onClick={() => this.onSubmit(note.id, editedText)} className="single-note__submit">Submit</button>
                        </>
                    )
                }
                {
                    !isEditedNoteText && (
                        <div className="single-note__text-container">
                            <div className='single-note__text' onDoubleClick={switchIsEditedNoteText}>{note.text}</div>
                        </div>
                    )
                }
            </div>
        )
    }
}
