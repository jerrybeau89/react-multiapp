import { useEffect, useState } from "react";
import TodoList from "./components/todoList";
import TodoForm from "./components/todoForm";
import "./assets/todoStyles.css";

const TodoApp = () => {
  const [todos, setTodos] = useState(() => {
    const locValue = localStorage.getItem("Items");
    if (locValue == null) return [];
    return JSON.parse(locValue);
  });

  useEffect(() => {
    localStorage.setItem("Items", JSON.stringify(todos));
  }, [todos]);

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }

        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <TodoForm onSubmit={addTodo} />
      <h1 className="todoHeader"> Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
};

export default TodoApp;
