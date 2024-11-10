import React from 'react'

export default function Box({properties}) {
    // get the box's properties for styling
    const style = {
        backgroundColor: properties.backgroundColor || 'white',
        width: properties.width || '100px',
        height: properties.height || '100px'
    }
  return (
    <div>
        <div style={style}>
            {properties.text}
        </div>
    </div>
  )
}
