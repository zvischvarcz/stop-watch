import { useState, useEffect } from 'react';
import './App.css';



function App() {

  const [time, setTime] = useState(0);

  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  const hours = Math.floor(time / 360000);

  const minutes = Math.floor((time % 360000) / 6000);

  const seconds = Math.floor((time % 6000) / 100);

  const milliseconds = time % 100;

  const startAndStop = () => {
    setIsRunning(!isRunning);
  };

  const reset = () => {
    setTime(0);
    setIsRunning(false)
  };

  return (
    <div className="app">
      <p className="stopwatch-time">
    {hours}:{minutes.toString().padStart(2, "0")}:
    {seconds.toString().padStart(2, "0")}:
    {milliseconds.toString().padStart(2, "0")}
  </p>
  <div>
    <button className={isRunning ? "stopButton buttons" : "startButton buttons"} onClick={startAndStop}>
      {isRunning ? "Stop" : "Start"}
    </button>
    <button className='buttons resetButton' onClick={reset}>
      Reset
    </button>
  </div>
    </div>
  );
}

export default App;
