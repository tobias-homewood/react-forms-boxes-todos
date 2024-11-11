import React from 'react'
import Box from './Box'

export default function Todo({text, onClick}) {
  return (
    <Box width={200} height={200} color={"yellow"} text={text} onClick={onClick} />
  )
}
