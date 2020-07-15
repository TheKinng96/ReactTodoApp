import React, { useState } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core'
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('')

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, input]);
    setTodos('');
  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <form>
        <FormControl>
          <InputLabel>What's in your mind?</InputLabel>
          <Input value={input} onChange={(string) => setInput(string.target.value)} />
        </FormControl>
        <Button variant="contained" color="primary" disabled={!input} onClick={addTodo}>Add</Button>

        <ul>
          {todos.map(todo => (
            <li>{todo}</li>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default App;
