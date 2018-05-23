import React from 'react'
import './NoteList.css'
import NodeListItem from './NodeListItem'

const NoteList = (props) => (
    <div className="NoteList">
        <h3>Notes</h3>
        <ul id="notes">
            {props.list.map(listItem =>
                <NodeListItem 
                title={listItem.title} 
                body={listItem.body} 
                index={props.list.indexOf(listItem)}
                handleClick={props.handleClick} />
            )}
        </ul>
    </div>
)

export default NoteList