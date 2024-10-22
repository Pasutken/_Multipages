import { useEffect, useState } from "react";

import "./Timer.css";

function Timer() {

  const [running, setRunning] = useState(false)
  const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        let interval = null
        if (running) {
            interval = setInterval(() => {
                setSeconds(seconds + 1)
            }, 1000)
        }
        return () => clearInterval(interval)
    },[running, seconds])

  function runClick() {
    setRunning(!running);
  }

  function secondsToString(seconds) {
    const MINUETS_SECONDS = 60
    const HOURS_SECONDS = 60 * MINUETS_SECONDS 
    const DAY_SECONDS = 24 * HOURS_SECONDS

    const days = Math.floor(seconds / DAY_SECONDS)
    const hours = Math.floor((seconds % DAY_SECONDS) / HOURS_SECONDS)
    const minutes = Math.floor((seconds % HOURS_SECONDS) / MINUETS_SECONDS)
    const secs = seconds % MINUETS_SECONDS

    if (days > 0) {
      return `${days}d ${hours}h ${minutes}m ${secs}s`
    } else if (hours > 0) {
      return `${hours}h ${minutes}m ${secs}s`
    } else if (minutes > 0) {
      return `${minutes}m ${secs}s`
    } else {
      return `${secs}s`
    }
  }

  function resetCick() {
    setRunning(false)
    setSeconds(0)
  }

  return (
    <div className="timer-container">
      <h3 className="timer-title">TIMER</h3>
      <p>
        <input 
        className="timer-display" 
        type="text"  
        readOnly={true} 
        value={(secondsToString(seconds))}  
        />
      </p>
      <div className="timer-bottons">
        <button className="btn btn-danger" onClick={resetCick}>
          {<i class="bi bi-arrow-counterclockwise"> </i>}
           Reset </button>
        <button 
          className= {
            (running ? 'bi bi-pause ' : 'bi bi-play ') +
              'btn ' + 
            (running ? 'btn-warning' : 'btn-success')
            } 
            
            onClick={runClick}>
          
          {running ? "Pause" : "Run"}{" "}
        </button>
      </div>
    </div>
  );
}

export default Timer;





