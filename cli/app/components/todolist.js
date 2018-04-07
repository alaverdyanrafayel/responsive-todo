import React from 'react'
import '../public/style.css'
import {SortableContainer} from 'react-sortable-hoc';
import TodoItem from './todoItem'

class TodoList extends React.Component{

  removetodo = (id) => {
    this.props.removetodo(id)
  }

  render(){
    return(
      <div className = "item-wrapper">
          {this.props.todos.map((item, index) => {
            return <TodoItem key={item._id} index={index} item={item} removetodo={this.removetodo}/>
              })}
      </div>
    );
  }
}
export default SortableContainer(TodoList)
