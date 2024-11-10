import React, { useState } from 'react'

export default function NewBoxForm({fields, submitNewBox}) {
    const [color, setColor] = useState('');
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');
    const [text, setText] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        submitNewBox({color, width, height, text});
    }

  return (
    <div className='container col-md-3'>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="color">Color</label>
                <input
                    type="text"
                    className="form-control"
                    id="color"
                    value={color}
                    onChange={({target: input}) => setColor(input.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="width">Width</label>
                <input
                    type="text"
                    className="form-control"
                    id="width"
                    value={width}
                    onChange={({target: input}) => setWidth(input.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="height">Height</label>
                <input
                    type="text"
                    className="form-control"
                    id="height"
                    value={height}
                    onChange={({target: input}) => setHeight(input.value)}
                />
            </div>
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
            <button type="submit" className="btn btn-primary mt-3">Create Box</button>
        </form>
    </div>
  )
}
