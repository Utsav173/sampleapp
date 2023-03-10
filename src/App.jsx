
import "./App.css";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import About from "./MyComponents/About";
import Addtodo from "./MyComponents/Addtodo";
import Combine from "./MyComponents/Combine";


function App(todo) {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("i am ondelete of todo", todo);

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    console.log("I am adding this todo..!!", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  let toda = "toda";
  let fams = "fams";
  return (
    <Router>
      <Header title="Seenu Todo List" />
      <Routes>
        <Route exact path="/" element={<Combine promps={toda} fams={fams}/>}/>
        <Route exact path="/about" element={<About/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;