import React from 'react'
import quill from './quill.svg'
import newIcon from './new.png'
import newHover from './new-hover.png'
import './Sidebar.css'
const Sidebar = ({clearCurrentNote, signOut}) => (
    <nav className="Sidebar">
        <div className="logo">
            <img src={quill} alt="Noteherder" />
        </div>
        <a className="new-note" href="/notes" onClick={(e)=>{
            e.preventDefault()
            clearCurrentNote()
        }}  >
            <img src={newHover} alt="New note" />
            <img className="outline" src={newIcon} alt="New note" />
        </a>
        <div className="SignOut">
            <button onClick={signOut}>
                <i className="fa fa-sign-out" />
            </button>
        </div>
    </nav>
)
export default Sidebar