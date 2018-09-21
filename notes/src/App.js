import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';

import Menu from './Components/Menu.js';
import NoteList from './Components/NoteList.js';
import NewNote from './Components/NewNote.js';
import SingleNote from './Components/SingleNote.js';
import EditNote from './Components/EditNote.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      notes: [
        {title: "test1", note: "testing 123 testing 123"},
        {title: "test2", note: "testing 123 testing 123"},
        {title: "test3", note: "testing 123 testing 123"},
        {title: "test4", note: "testing 123 testing 123"},
        {title: "test5", note: "testing 123 testing 123"},
      ]
    }
    this.addNote = this.addNote.bind(this);
  }

  addNote = (note) => {
    console.log("add Note: ", note);
    const notes = this.state.notes;
    notes.push(note);
    this.setState({notes})
    console.log(this.state.notes);
  }

  render() {
    return (
      <div className="App">
        <Menu/>
        <Switch>
          <Route exact path="/" render={props => <NoteList {...props} notes={this.state.notes}/>}/>
          <Route path="/edit/:id" component={EditNote}/>
          <Route path="/view/:id" component={SingleNote}/>
          <Route path="/new" render={props => <NewNote {...props} addNote={this.addNote}/>}/>
        </Switch>
      </div>
    );
  }
}

export default App;
