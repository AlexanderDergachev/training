import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class SingleNote extends Component {
    
    render() {
        const noteId = this.props.match.params.id;
        const { notes } = this.props;
        const note = notes.filter(note => note.id === +noteId)[0];
        console.log(note);
        
        return (
            <div>
                <Link to='/'>{note.name}</Link>
                <textarea></textarea>
            </div>
        )
    }
}
