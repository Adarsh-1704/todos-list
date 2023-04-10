import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from "./components/Header"
import Todos from './components/Todos';
import AddToDos from './components/AddToDos';

function App() {
  const [todos, setTodos] = useState([
    {
      sno : 1,
      title : "Go to market",
      desc : "To purchase items"
    },
    {
      sno : 2,
      title : "Go to mall",
      desc : "To purchase clothes"
    },
    {
      sno : 3,
      title : "Go to hall",
      desc : "To watch movie"
    }
  ])

  const onDelete = (todo) =>{
    setTodos(todos.filter((e)=>{return e!==todo}))
  }

  const addTodo = (title, desc) => {
    let sn = todos.length + 1
    let newTodos = [...todos]
    newTodos.push({sn, title, desc})
    setTodos(newTodos)
  }

  return (
    <>
      <Header/>
      <AddToDos addTodo = {addTodo}/>
      <Todos todos = {todos} onDelete = {onDelete}/>
      <Footer/>
    </>
  );
}

export default App;
