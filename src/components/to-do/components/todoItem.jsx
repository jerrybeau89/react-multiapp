import React from 'react';

const TodoItem = ({ completed, id, title, toggleTodo, deleteTodo }) => {
  return(
    <>
      <li>
        <label>
          <input type='checkbox' 
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
          />
          {title}
        </label>
        <button className='todoBtn todoBtn-danger' 
        onClick={() => deleteTodo(id)}
        >Delete</button>
      </li>
    </>
  )
}
export default TodoItem;