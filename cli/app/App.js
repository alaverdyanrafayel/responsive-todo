import React from 'react'
import './public/style.css'
import Header from './components/header'
import TodoInput from './components/todoinput'
import TodoList from './components/todolist'
import {arrayMove} from 'react-sortable-hoc'


class App extends React.Component{

    state = {
      value:"",
      todos:[]
    }



    handleChange = (value) => {
      this.setState({
        value
      });
    }

    addtodo = () => {
      const title = this.state.value;
      const initObj = {
                method: "POST",
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({title})
              }
      fetch("http://localhost:8000/todo-list", initObj).then(result => {
        return result.json()
      }).then(result => {
        this.setState({
            todos: [result.created_todoItem, ...this.state.todos],
            value:""
        });
      })
    }

    removetodo = (id) => {
        fetch(`http://localhost:8000/todo-list/${id}`, {
          method:"DELETE",
        }).then(result => {
          if(result.status === 200){
              const newArr = this.state.todos.filter(item => {
                return item._id !== id
            })
            this.setState({
                todos:newArr
            })
          }
        })
    }

    componentDidMount(){
      fetch("http://localhost:8000/todo-list").then(result => {
        return result.json()
      }).then(result => {
        this.setState({
          todos:result.requested_todoList
        })
      })
    }
onSortEnd = ({oldIndex, newIndex}) => {
  this.setState({todos: arrayMove(this.state.todos, oldIndex, newIndex)})
  fetch("http://jsonplaceholder.typicode.com/todos", {
    method:"POST",
    body: JSON.stringify({oldIndex, newIndex})
  })
}
  render(){
    return(
      <div className = "container">
          <div className = "insideContainer">
              <Header />
              <TodoInput value = {this.state.value} change = {this.handleChange} addtodo = {this.addtodo}/>
              <TodoList onSortEnd={this.onSortEnd}    todos = {this.state.todos} removetodo = {this.removetodo}/>
          </div>
      </div>
    );
  }
}
export default App
