import React, { useState } from 'react'

export default function NewTodoForm({submitNewTodo}) {
    const [text, setText] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        submitNewTodo({text});
    }

  return (
    <div className='container col-md-3'>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="text">Text</label>
                <input
                    type="text"
                    className="form-control"
                    id="text"
                    value={text}
                    onChange={({target: input}) => setText(input.value)}
                />
            </div>
            <button type="submit" className="btn btn-primary mt-3">Create Todo</button>
        </form>
    </div>
  )
}
