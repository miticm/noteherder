import React from 'react'
import Sidebar from './Sidebar';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
const Rebase = require('re-base');
const firebase = require('firebase');
const app = firebase.initializeApp({
    //secret
})
const base = Rebase.createClass(app.database());

class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            currentNote: this.emptyNote(),
            notes: [],
        }
    }
    componentDidMount = () =>{
        // const notes = []
        // Object.keys(localStorage).forEach(d=>{
        //     notes.push(JSON.parse(localStorage.getItem(d)))
        // })
        // this.setState({
        //     notes
        // })
        base.syncState(`notes`, {
            context: this,
            state: 'notes',
            asArray: true
          });
    }
    emptyNote= () => ({
        id: null,
        title: "",
        body: "",
    })
    clearCurrentNote = () => {
        this.setCurrentNote(this.emptyNote())
    }
    setCurrentNote = (note) => {
        this.setState({
            currentNote: note
        })
    }
    saveNote = (note) => {
        const notes = [...this.state.notes]
        if (note.id) {
          const i = notes.findIndex(currentNote => currentNote.id === note.id)
          notes[i] = note
        } else {
          note.id = Date.now()
          notes.push(note)
        }
        this.setState({ notes })
        this.setCurrentNote(note)
        // localStorage.setItem(note.id,JSON.stringify(note))
      }
    deleteNote = (note) => {
        const notes = this.state.notes.filter(n => n !== note)
        this.setState({notes})
        this.clearCurrentNote()
        // localStorage.removeItem(note.id)
    }
    
    render() {
        return (
            <div className="Main" style={style}>
                <Sidebar clearCurrentNote={this.clearCurrentNote}/>
                <NoteList notes={this.state.notes} setCurrentNote={this.setCurrentNote} />
                <NoteForm currentNote={this.state.currentNote} saveNote={this.saveNote} deleteNote={this.deleteNote}/>
            </div>
        )
    }
}
const style = {
    display: 'flex',
    height: '100vh',
    alignItems: "stretch",
}

export default Main