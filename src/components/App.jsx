import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Todo from "./Todo";
import CreateArea from "./CreateArea";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  function addTodoItem(newTodo) {
    setTodoItems((prevTodoItems) => {
      return [...prevTodoItems, newTodo];
    });
  }

  function deleteTodoItem(id) {
    setTodoItems((prevTodoItems) => {
      return prevTodoItems.filter((todoItems, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addTodoItem} />
      {todoItems.map((todoItems, index) => {
        return (
          <Todo
            key={index}
            id={index}
            title={todoItems.title}
            content={todoItems.content}
            onDelete={deleteTodoItem}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
