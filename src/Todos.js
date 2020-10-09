import React from 'react'

const Todos = ({ todos, handleDelete }) => {
  const todoLists = todos.length ? (
    todos.map((todo) => {
      return (
        <div key={todo.id} className='todo-item collection-item'>
          <span style={{fontSize: '1.35rem'}}>{todo.content}</span>
          <i
            className='material-icons right indigo-text'
            onClick={() => handleDelete(todo.id)}
            style={{ cursor: 'pointer', fontSize: '2.3rem' }}
          >
            delete
          </i>
        </div>
      )
    })
  ) : (
    <p className='center flow-text'>Sorry you have no todos again</p>
  )
  return <div className='todo collection container'>{todoLists}</div>
}

export default Todos
