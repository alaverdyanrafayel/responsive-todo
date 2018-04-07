import React from 'react'
import '../public/style.css'


class TodoInput extends React.Component{

    handleChange = (e) => {
      this.props.change(e.target.value)
    }
    addtodo = () => {
        this.props.addtodo()
    }

  render(){
    return(
      <div className = "input-wrapper">
          <input type = "text" value = {this.props.value} onChange = {this.handleChange}/>
          <button onClick = {this.addtodo}>+</button>
      </div>
    );
  }
}
export default TodoInput
