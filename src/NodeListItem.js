import React from "react"

const NodeListItem = (props) => (
    <a className="active">
    <li>
      <div className="note">
        <div className="note-title">
            {props.title}
        </div>
        <div className="note-body">
          <p>
            {props.body}
          </p>
        </div>
      </div>
    </li>
  </a>
)
export default NodeListItem