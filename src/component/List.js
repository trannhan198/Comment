import React from "react";
import NoteItem from "./Noteitemi";

export default class List extends React.Component {
  render() {
    const { onEdit, data, onDelete } = this.props;
    return (
      <ul className="list">
        {data.map((item) => (
          <NoteItem
            key={item.id}
            onEdit={onEdit}
            id={item.id}
            note={item.note}
            onDelete={onDelete}
          />
        ))}
      </ul>
    );
  }
}
