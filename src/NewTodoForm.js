import React, { useState } from 'react'
import NewBoxForm from './NewBoxForm';

export default function NewTodoForm({submitNewTodo}) {
  return (
    <NewBoxForm fields={{text: 'text'}} onSubmit={submitNewTodo} />
  )
}
