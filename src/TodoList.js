import React, { useState } from 'react'
import NewTodoForm from './NewTodoForm'
import EditTodoForm from './EditTodoForm'
import Todo from './Todo'

export default function TodoList() {
    const [todos, setTodos] = useState([]);
    const [showEditForm, setShowEditForm] = useState(false);
    const [editIndex, setEditIndex] = useState(null);

    const addTodo = (newTodo) => {
        setTodos((todos) => [...todos, newTodo]);
    };

    const deleteTodo = (index) => {
        setTodos((todos) => todos.filter((_todo, i) => i !== index));
    }

    const editTodo = (index, newText) => {  
        setTodos((todos) => todos.map((todo, i) => i === index ? {...todo, text: newText} : todo));
    }

    const toggleEditForm = (index) => {
        setShowEditForm(!showEditForm);
        setEditIndex(index);
    }
    return (
        <div className="container">
            {/* form to add new todos */}
            {showEditForm ?
                <h1 className="text-center">Editing</h1>
                :
                <h1 className="text-center">Create a new Todo</h1>
            }
            {showEditForm ?
                <EditTodoForm editTodo={editTodo} toggleEditForm={toggleEditForm} index={editIndex} currentText={todos[editIndex].text} />
                :
                <NewTodoForm submitNewTodo={addTodo} />
            }            

            {/* the list of todos rendered as a Todo Component */}
            <div className="mt-4 row">
                {todos.map((todo, i) => (
                    <div key={i} className="col-md-3 mb-4">
                        <Todo
                            text={todo.text}
                            beingEdited={i === editIndex}
                            onEdit={() => toggleEditForm(i)}
                            onClick={() => deleteTodo(i)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
