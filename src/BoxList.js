import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

export default function BoxList() {
    const [boxes, setBoxes] = useState([]);

    const addBox = (newBox) => {
        setBoxes((boxes) => [...boxes, newBox]);
    };

    const deleteBox = (index) => {
        setBoxes((boxes) => boxes.filter((box, i) => i !== index));
    }
    return (
        <div className="container">
            {/* form to add new boxes */}
            <h1 className="text-center">Create a new Box</h1>
            <NewBoxForm fields={{width: 'number', height: 'number', color: 'text', text: 'text'}} submitNewBox={addBox} />

            {/* the list of boxes rendered as a Box Component */}
            <div className="mt-4 row">
                {boxes.map((box, i) => (
                    <div key={i} className="col-md-3 mb-4">
                        <Box
                            width={box.width}
                            height={box.height}
                            color={box.color}
                            text={box.text}
                            onClick={() => deleteBox(i)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
