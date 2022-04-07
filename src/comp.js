import React, { useState, useEffect } from 'react'

const Comp = () => {
    const [text,setText] = useState('Arthur');

    return (
        <div>
            <h1>Hello {text}</h1>
        </div>
    )

}

export default Comp;