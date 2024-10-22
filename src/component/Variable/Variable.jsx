import { useState } from "react";

import "./Variable.css"

function Variable({ type, name, value, setValue }) {

//   const [value, setValue] = useState(prpos.value || 0)

  return (
    <div className="counter-container">
      <h3 className="counter-title"> {name || "Counter"} </h3>
      <button className="btn btn-danger" onClick={() => setValue(value - 1)}>
        &minus;
      </button>
      <span className="value"> {value} </span>
      <button className="btn btn-success" onClick={() => setValue(value + 1)}>
        +
      </button>
    </div>
  )
}

export default Variable