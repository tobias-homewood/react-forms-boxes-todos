import React from 'react'

export default function Box({color, width, height, text}) {
  return (
    <div className="card col-1 justify-content-center" style={{ width: `${width}px`, height: `${height}px`, backgroundColor: color }}>
        <div className="card-body">
            <p className="card-text text-center">{text}</p>
        </div>
    </div>
  )
}
