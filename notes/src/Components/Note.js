import React, { Component } from 'react';

class Note extends Component {
  render() {
    return (
      <div className="Note">
        <div className="NoteTitle">{this.props.note.title}</div>
        <div className="NoteBody">{this.props.note.note}</div>
      </div>
    );
  }
}

export default Note;
