import React from 'react'
import { Button } from 'react-bootstrap'

function TodoItem(props) {
  return (
    <div>
        <h5>{props.todo.title}</h5>
        <p>{props.todo.desc}</p>
        <Button className='btn-danger' onClick={() => {props.onDelete(props.todo)}}>Delete</Button>
        <hr/>
    </div>
  )
}

export default TodoItem