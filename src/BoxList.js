import React, { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

export default function BoxList({fields}) {
    const [boxes, setBoxes] = useState([]);

    const addBox = (newBox) => {
        setBoxes(boxes => [...boxes, newBox]);
    }
  return (
    <div>
        {/* form to add new boxes */}
        <NewBoxForm submitNewBox={addBox} fields={fields}/>

        {/* the list of boxes rendered as a Box Component */}
        {boxes.map((properties, i) => (
            <Box key={i} properties={properties} />
        ))}

    </div>
  )
}
