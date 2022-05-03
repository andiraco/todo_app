import React, { useState, useEffect  } from 'react';
import Todo from './Todo';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import db from "./firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
//import { serverTimestamp } from "firebase/firestore";






function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  //when the App loads, we need to listen to the database and fetch new todos as they get added/removed
 
  useEffect(() =>{
      db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
        //console.log(snapshot.docs.map(doc => doc.data()));
        setTodos(snapshot.docs.map(doc => ({id:doc.id,todo: doc.data().todo })));
      })
    }, []
  );

  const addTodo = (event) => {
    //this will fire off when we click the button
    event.preventDefault(); //Will stop the refresh
    db.collection("todos").add({
      todo: input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    });
    setTodos([...todos, input]);
    setInput('');//clear up the input after clicking todo button

  }

  return (
    <div className="App">
      <h1>Hello People</h1>
      <form>  
        <FormControl>
          <InputLabel>✅Write a Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
      </FormControl>
        
        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
        Add Todo
      </Button>
              
      </form>
      
      <ul>
        {todos.map(todo => (
          <Todo todo={todo}/>
          //<li>{todo}</li>
        ))}
        </ul>

    </div>
  );
}

export default App;
