import React, { Component } from 'react';
import Note from './Note.js';

class NoteList extends Component {
  render() {
    return (
      <div className="Page">
        <div className="PageHeader">Your Notes:</div>
        <div className="Notes">
            {this.props.notes.map(note => <Note note={note}/>)}
        </div>
      </div>
    );
  }
}

export default NoteList;
