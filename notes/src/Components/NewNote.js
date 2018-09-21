import React, { Component } from 'react';

class NewNote extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            note: ""
        }
    }

    handleTitleChange = (e) => {
        this.setState({title: e.target.value});
    }

    handleNoteChange = (e) => {
        this.setState({note: e.target.value});
    }

    handleSubmit = () => {
        console.log("submit note");
        const note = this.state;
        this.props.addNote(note);
        this.setState({title: "", note: ""})
    }

    render() {
        return (
            <div className="Page">
            <div className="PageHeader">Create New Note:</div>
            <div className="NoteForm">
                <input type="text" placeholder="Note Title" onChange={this.handleTitleChange} value={this.state.title} className="NewTitle" size="75"/>
                <textarea placeholder="Note Title" onChange={this.handleNoteChange} value={this.state.note} className="NewNote"/>
                <button onClick={() => this.handleSubmit()}>Add Note</button>
            </div>
            </div>
        );
    }
}

export default NewNote;
