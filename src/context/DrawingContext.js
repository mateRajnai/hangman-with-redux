import React, {useState} from 'react';
export const DrawingContext = React.createContext();

export const DrawingProvider = (props) => {

    const drawingParts = document.getElementsByClassName("drawing-part");
    const [indexOfDrawingParts, setIndexOfDrawingParts] = useState(0);

    return (
        <DrawingContext.Provider value={{
            drawingParts, 
            indexOfDrawingParts, 
            setIndexOfDrawingParts
        }}>
            {props.children}
        </DrawingContext.Provider>
    )
}