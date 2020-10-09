import React, { Component } from 'react'

export default class AddForm extends Component {
  state = {
    todos: [{ content: null }],
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addTodos(this.state)
    this.setState({
      content: '',
    })
  }

  handleChange = (e) => {
    this.setState({
      content: e.target.value,
    })
  }
  render() {
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit}>
          <div className='input-field'>
            <i style={{ fontSize: '2.5rem' }} className='material-icons prefix'>
              event
            </i>
            <input
              id='icon_prefix'
              type='text'
              className='validate'
              name='todo'
              value={this.state.content}
              onChange={this.handleChange}
            />
            <label htmlFor='icon_prefix'>Enter Todo</label>
          </div>
        </form>
      </div>
    )
  }
}
