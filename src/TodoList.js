import React, { useState } from 'react'
import NewTodoForm from './NewTodoForm'
import Todo from './Todo'

export default function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = (newTodo) => {
        setTodos((todos) => [...todos, newTodo]);
    };

    const deleteTodo = (index) => {
        setTodos((todos) => todos.filter((_todo, i) => i !== index));
    }
    return (
        <div className="container">
            {/* form to add new todos */}
            <NewTodoForm submitNewTodo={addTodo} />

            {/* the list of todos rendered as a Todo Component */}
            <div className="mt-4 row">
                {todos.map((todo, i) => (
                    <div key={i} className="col-md-3 mb-4">
                        <Todo
                            text={todo.text}
                            onClick={() => deleteTodo(i)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
