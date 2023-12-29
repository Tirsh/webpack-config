import React, {useState} from 'react';
import './Counter.scss';

export const Counter = () => {
    const [count, setCounter] = useState(0);
    const increment = () => {
        setCounter(count+1);
    }
    return (
        <div>
            <button onClick={increment}>{count}</button>
        </div>
    );
};

export default Counter;