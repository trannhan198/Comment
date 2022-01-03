import React from "react";

export default class NoteItem extends React.Component {
  render() {
    const { id, note, onEdit, onDelete } = this.props;
    return (
      <li className="item">
        <div>{id}</div>
        <div>{note}</div>
        <div>
          <button className="btn btn-warning" onClick={() => onEdit(id)}>Edit</button>
          <button className="btn btn-primary" onClick={() => onDelete(id)}>Delete</button>
        </div>
      </li>
    );
  }
}
