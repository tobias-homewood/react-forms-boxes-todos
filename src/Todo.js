import React from 'react'
import Box from './Box'

export default function Todo({text, onClick, onEdit, beingEdited}) {
  return (
    <Box width={200} height={200} color={beingEdited ? "cyan" : "yellow"} text={text} onClick={onClick} onEdit={onEdit} />
  )
}
