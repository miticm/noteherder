import React from 'react'
import './NoteForm.css'

const NoteForm = (props) => (
    <div className="NoteForm">
        <div className="form-actions">
            <button type="button">
              <i className="fa fa-trash-o"></i>
            </button>
          </div>
          <form>
            <p>
              <input
                type="text"
                name="title"
                placeholder={
                  props.state.activeListItem===-1?
                  "Title your note":
                  props.state.list[props.state.activeListItem].title}
              />
            </p>
            <textarea name="body" placeholder={ props.state.activeListItem===-1?
                  "":
                  props.state.list[props.state.activeListItem].body}></textarea>
          </form>
    </div>
)


export default NoteForm