import React from 'react'

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li style={{textDecoration: todo.comlpeted ? 'line-through' : 'none'}}>
        <input 
          type='checkbox' 
          checked={todo.completed} 
          onChange={() => toggleTodo(todo.id)}
          />
          {todo.text}
          <button onClick={() => deleteTodo(todo.id)}>Удалить</button>
    </li>
  )
}

export default TodoItem