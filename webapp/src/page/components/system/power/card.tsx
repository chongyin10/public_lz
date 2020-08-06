import * as React from 'react';
import { Component } from 'react';

export function CustomForm(handleSubmit: (value: any) => void) {
    let inputElement: any = undefined;
    return (
        <form onSubmit={() => handleSubmit(inputElement.value)}>
            <input
                type='text'
                ref={(input) => inputElement = input} />
            <button type='submit'>Submit</button>
        </form>
    )
}

// Hooks
import { useState } from 'react';

export function Example(props: any) {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    )
}