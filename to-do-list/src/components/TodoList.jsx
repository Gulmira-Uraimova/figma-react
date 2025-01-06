import {useState} from 'react'
import TodoItem  from './TodoItem'

const TodoList = () => {
     const [todos, setTodos] = useState([])
     const [newTodo, setNewTodo] = useState('')
     const addTodo = () => {
        if (newTodo.length() === '') {
            return
        }

        const newTask = {
            id: Date.now(),
            text: newTodo,
            completed: false
        }
        setTodos([...todos, newTask])
        setNewTodo('')

        const toggleTodo = (id) => {
            setTodos(todos.map(todo => 
                todo.id === id ? { ...todo,completed: !todo.id.completed} : todo
            ))
        }

        const deleteTodo = (id) => {
            setTodos(todos.filter(todo => todo.id !== id))
        }

     }

     

  return (
    <div>
        <h1>TodoList</h1>
            <input 
                type='text' 
                value={newTodo}
                onChange={(e) => 
                setNewTodo(e.target.value)}
            />
        <button onClick={addTodo}>Добавить</button>
        <ul>
            {
                todos.map(todo => (
                    <TodoItem 
                        todo={todo}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                        key={todo.id}
                    />
                ))
            }
            
        </ul>
    </div>
  )
}

export default TodoList