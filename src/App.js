import React, { Component } from 'react'
import Todos from './Todos'
import AddForm from './AddForm'
import Footer from './Footer'
export default class App extends Component {
  state = {
    todos: [
      { content: 'Preach the Gospel', id: 1 },
      { content: 'Keep the Faith', id: 2 },
      { content: 'Code all Night', id: 3 },
    ],
  }

  handleDelete = (id) => {
    const sorted = this.state.todos.filter((todo) => todo.id !== id)

    this.setState({
      todos: sorted,
    })
  }
  addTodo = (todo) => {
    todo.id = Math.random()
    let todos = [...this.state.todos, todo]

    this.setState({
      todos: todos,

    })
  }

  render() {
    return (
      <React.Fragment className='app'>
        <h1 className='center indigo-text'>Todo's</h1>
        <Todos todos={this.state.todos} handleDelete={this.handleDelete} />
        <AddForm addTodos={this.addTodo} />
        <Footer />
      </React.Fragment>
    )
  }
}
