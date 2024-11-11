import React, { useState } from 'react'
import NewBoxForm from './NewBoxForm';

export default function EditTodoForm({editTodo, toggleEditForm, index, currentText}) {
  const editOnSubmit = (formData) => {
    editTodo(index, formData.text);
    toggleEditForm(null);
  }
  return (
    <NewBoxForm fields={{text: 'text'}} values={{text: currentText}} onSubmit={editOnSubmit} />
  )
}