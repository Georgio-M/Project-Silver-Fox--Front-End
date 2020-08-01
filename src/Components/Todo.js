import React, {useEffect, useState, useRef} from "react";


function Todo(){
    const [isOpen, setIsOpen]= useState(false)
    return(
        <div>
            <button onClick={()=> setIsOpen(! isOpen)}>Update Info</button>
            {isOpen ? (
                <div><p>Modal is open</p></div>
            ): null}
        </div>
    )
}
export default Todo;