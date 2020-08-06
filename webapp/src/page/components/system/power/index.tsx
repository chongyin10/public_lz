import React, { useState, useEffect } from 'react';

export default function Example() {
    const [a, setA] = useState((() => {
        return 3
    }));
    const [b, setB] = useState(-1);

    useEffect(() => {
        document.title = `You clicked ${a} times`;
    }, [a]);

    useEffect(() => {
        document.title = `You clicked ${b} times`;
    }, [b]);

    const handleClickA = () => {
        setA(a + 1);
    }

    return (
        <div>
            <h1> hook写法应用 </h1>
            <p>You clicked {a} times</p>
            <button onClick={handleClickA}>
                Click a
            </button>
            <p>You clicked {b} times</p>
            <button onClick={() => setB(b - 1)}>
                Click b
            </button>
        </div>
    );
}