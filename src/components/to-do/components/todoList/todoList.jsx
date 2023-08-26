import React from 'react';
import TodoItem from '../todoItem/todoItem';

const TodoList = ({todos, toggleTodo, deleteTodo}) => {
  return(
    <>
      <ul className='todoList'>
        {todos.length === 0 && "No Todos"}
        {todos.map(todo => {
            return ( 
                <TodoItem 
                key={todo.id} 
                {...todo}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
                />
        )})}
      </ul>
    </>
  )
}
export default TodoList;