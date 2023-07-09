import { useState } from 'react';
import './App.css';

function App() {

  const[todo, setTodos] = useState([{
    id:0,
    text:'Hello',
    completed: false,
  }])
  const [inpVal, setInpVal] = useState('')

  const inpChange = (e) => {
    setInpVal(e.target.value)
  }

  const AddTodo = () =>{
    if(inpVal.trim() !== ''){
      const newTodo = {
        id: Date.now(),
        text: inpVal,
        completed: false,
      };
      setTodos([...todo, newTodo])
      setInpVal('')
    }
  }

  const ToggleTodo = (id) =>{
    const ToggleTodo = todo.map((todo) =>{
      if(todo.id === id){
        return {
          ...todo,
          completed: !todo.completed
        }
      }return todo
    })
    setTodos(ToggleTodo)
  }

  const DeletTodo = (id) =>{
    const delet = todo.filter((todo) => todo.id !== id)
    setTodos(delet)
  }
  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <div className="add_todo">
        <input type="text" placeholder='Todo List' onChange={inpChange} value={inpVal}/>
        <button onClick={AddTodo}>Add</button>
      </div>
      <ul className='todo_list'>
        {
          todo.map((todo) => (
            <li className={todo.completed ? 'completed' : ''}>{todo.text}
              <div className='tog_del'>
                <button onClick={() => ToggleTodo(todo.id)}>Toggle</button>
                <button onClick={() => DeletTodo(todo.id)}>Delete</button>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
