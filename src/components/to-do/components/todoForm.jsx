import React, { useState } from 'react';

const TodoForm = ({onSubmit}) => {
  const [newItem, setNewItem] = useState('');

  function handleSubmit(e){
    e.preventDefault();
    
    if (newItem === "")return;

    onSubmit(newItem);
    setNewItem("");
  }

  return(
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
          <div className='form-row'>
            <label htmlFor='item'>To Do</label>
            <input 
              className='inputText'
              value={newItem} 
              onChange={(e) => setNewItem(e.target.value)} 
              type='text' 
              id='item'
              placeholder='New Item...'
              />
          </div>
          <button className='todoBtn'>Add</button>
        </form>
    </>
  )
}
export default TodoForm;