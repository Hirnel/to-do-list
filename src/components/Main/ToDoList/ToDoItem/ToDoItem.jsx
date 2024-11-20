import React, { useState } from "react";
import './toDoItem.css'


// const toDoItem = ({data, remove, editItem}) => {
//   const {title } = data;
//   const {isEditing, setIsEditing} = useState(false);
//   const [editText, setEditText] = useState(title);

// };


const toDoItem = ({ data, remove, editItem}) => {
  const { title } = data;
  return (
    <section className="toDo-item-container">
      <h3 className="toDo-item-title">{title}</h3>
      <button onClick={() => remove(data)} className="toDo-item-button" >🗑️</button>
      <button onClick={remove} className="toDo-item-button">✏️</button>
      {/* <button onClick={addEntry}>{isEditing ? "Update" : "Add"}</button> */}
    </section>
  );
};

export default toDoItem;
