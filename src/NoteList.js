import React from 'react'
import './NoteList.css'
import Note from './Note'

const NoteList = (props) => (
    <div className="NoteList">
        <h3>Notes</h3>
        <ul id="notes">
            {props.list.map(note =>
                <Note note={note} key={note.id} changeCurrentNote={props.changeCurrentNote} />
            )}
        </ul>
    </div>
)

export default NoteList