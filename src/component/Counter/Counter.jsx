import { useState } from 'react';

import './Counter.css';


function Counter(prpos) {

    const [value, setValue] = useState(prpos.value || 0);

    function increment() {
        // value = value + 1
        setValue(value + 1)
        // console.log(value)
    }

    function decrement() {
        // value = value - 1
        setValue(value - 1)
        // console.log(value)
    }

    // render
    return ( 
        <div className='counter-container'>
            <h3 className="counter-title"> {prpos.name  ||  "COUNTER"} </h3>
            <button className='btn btn-danger' onClick={decrement}> &minus; </button>
            <span className='value'> {value} </span>
            <button className='btn btn-success' onClick={increment}> + </button>
        </div>
     );
}

export default Counter;