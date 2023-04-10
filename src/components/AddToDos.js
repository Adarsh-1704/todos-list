import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AddToDos(props) {
  const [title, setTitle] = useState()
  const [desc, setDesc] = useState()
  const submit = (e) => {
      e.preventDefault();
     if(!title || !desc) {
      alert("Title or Description is empty")
     }
     else
     props.addTodo(title, desc)
  }
  return (
    <div className='container my-3'>
        <h3 className='text-center'>Add List</h3>
        <Form onSubmit={submit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter title" onChange={(e)=>{setTitle(e.target.value)}}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Enter Description" onChange={(e)=>{setDesc(e.target.value)}}/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Add
      </Button>
    </Form>
    </div>
  )
}

export default AddToDos