import React, { useState } from 'react'

export default function NewBoxForm({fields, submitNewBox}) {
    const [formData, setFormData] = useState(
        Object.keys(fields).reduce(
        (acc, key) => {
            acc[key] = '';
            return acc;
        },
        {})
    );
    
    const handleSubmit = (e) => {
        e.preventDefault();
        submitNewBox(formData);
    }

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }));
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            {Object.entries(fields).map(([name, type]) => (
            <div key={name}>
                <label htmlFor={name}>{name}</label>
                <input type={type} name={name} id={name} value={formData[name]} onChange={handleChange} />
            </div>
            ))}
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}
