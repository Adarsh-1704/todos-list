import React from 'react'
import TodoItem from './TodoItem'

function Todos(props) {
  return (
    <div className='container' style={{paddingBottom: "4px"}}>
        <h3>Todo List</h3>
        <hr/>
        {props.todos.length === 0 ? "Empty":props.todos.map((todo)=>{
          return <TodoItem todo = {todo} onDelete = {props.onDelete}/>
        })}
    </div>
  )
}

export default Todos