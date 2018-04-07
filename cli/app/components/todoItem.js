
import React from 'react';
import {SortableElement} from 'react-sortable-hoc';

const TodoItem =  ({item, removetodo}) => {
  return (
    <div key = {item.id} className = "list">
        <span>{item.title}</span>
        <button onClick = {removetodo.bind(null, item._id)}>x</button>
    </div>
  )
}

export default SortableElement(TodoItem)
