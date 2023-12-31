import React, {useState} from 'react';
import classes from './Counter.module.scss';

export const Counter = () => {
    const [count, setCounter] = useState(0);
    const increment = () => {
        setCounter(count+1);
    }
    return (
        <div>
            <button className={classes.btn} onClick={increment}>{count}</button>
        </div>
    );
};

export default Counter;