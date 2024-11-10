import React from 'react'
import './Box.css'

export default function Box({color, width, height, text, onClick}) {
  return (
    <div className="card col-1 justify-content-center" style={{ width: `${width}px`, height: `${height}px` }}>
        <div className="card-header d-flex justify-content-end" style={{backgroundColor: 'beige'}}>
          <button className="btn btn-danger btn-round" onClick={onClick}>X</button>
        </div>
        <div className="card-body" style={{backgroundColor: color}}>
          <p className="card-text text-center">{text}</p>
        </div>
    </div>
  )
}
